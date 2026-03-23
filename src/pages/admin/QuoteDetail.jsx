import React, { useEffect, useState, useMemo } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  ArrowLeft,
  Plus,
  Trash2,
  Save,
  X,
  GripVertical,
  Building2,
  User,
  FileText,
  Calendar
} from 'lucide-react'
import {
  getQuote,
  createQuote,
  createQuoteItem,
  updateQuoteItem,
  deleteQuoteItem,
  updateQuote,
  getClients
} from '../../lib/firebase/queries.js'
import { QUOTE_STATUS, STATUS_OPTIONS } from '../../lib/constants/quoteStatus.js'
import { ITEM_TYPE_OPTIONS } from '../../lib/constants/itemTypes.js'
import { formatCurrency, formatDate } from '../../lib/utils/formatters.js'
import { Button } from '../../components/common/Button.jsx'
import { Input, Select, Textarea } from '../../components/common/Input.jsx'
import { Spinner } from '../../components/common/Spinner.jsx'
import { calculateTotal } from '../../lib/utils/formatters.js'

export const QuoteDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isNew = id === 'novo'

  // Form state
  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [deletingItem, setDeletingItem] = useState(null)
  const [clients, setClients] = useState([])
  const [error, setError] = useState(null)

  // Quote data
  const [quote, setQuote] = useState({
    quote_number: '',
    client_id: '',
    description: '',
    status: 'negociação',
    issue_date: new Date().toISOString().split('T')[0],
    valid_until: '',
    discount: 0,
    notes: '',
    subtotal_services: 0,
    subtotal_materials: 0,
    total: 0,
  })

  // Quote items
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState({
    type: 'service',
    description: '',
    quantity: 1,
    unit_price: 0,
    unit: '',
  })
  const [showNewItemForm, setShowNewItemForm] = useState(false)

  // Load data
  useEffect(() => {
    if (!isNew) {
      loadQuote()
    }
    // Always load clients for the select dropdown
    loadClients()
  }, [id])

  const loadQuote = async () => {
    try {
      const data = await getQuote(id)
      if (!data) {
        alert('Orçamento não encontrado')
        navigate('/admin/orcamentos')
        return
      }
      setQuote({
        quote_number: data.quote_number,
        client_id: data.client_id || '',
        description: data.description || '',
        status: data.status,
        issue_date: data.issue_date || new Date().toISOString().split('T')[0],
        valid_until: data.valid_until || '',
        discount: Number(data.discount) || 0,
        notes: data.notes || '',
        subtotal_services: Number(data.subtotal_services) || 0,
        subtotal_materials: Number(data.subtotal_materials) || 0,
        total: Number(data.total) || 0,
      })
      setItems(data.items || [])
    } catch (error) {
      console.error('Error:', error)
      alert('Erro ao carregar orçamento')
      navigate('/admin/orcamentos')
    } finally {
      setLoading(false)
    }
  }

  const loadClients = async () => {
    try {
      const data = await getClients()
      setClients(data || [])
    } catch (error) {
      console.error('Error loading clients:', error)
    }
  }

  // Calculated totals
  const calculatedServices = useMemo(() => {
    return items.filter(i => i.type === 'service').reduce((sum, i) => sum + Number(i.total), 0)
  }, [items])

  const calculatedMaterials = useMemo(() => {
    return items.filter(i => i.type === 'material').reduce((sum, i) => sum + Number(i.total), 0)
  }, [items])

  const calculatedTotal = useMemo(() => {
    return calculateTotal(calculatedServices, calculatedMaterials, quote.discount)
  }, [calculatedServices, calculatedMaterials, quote.discount])

  // Handlers
  const handleQuoteChange = (field, value) => {
    setQuote(prev => ({ ...prev, [field]: value }))
  }

  const handleAddItem = async () => {
    if (!newItem.description.trim() || newItem.quantity <= 0 || newItem.unit_price <= 0) {
      alert('Preencha descrição, quantidade e valor unitário')
      return
    }

    try {
      if (isNew) {
        // First create the quote to get its ID if it doesn't exist
        if (!quote.id) {
          const newQuote = await createQuote({
            client_id: quote.client_id,
            description: quote.description,
            status: quote.status,
            issue_date: quote.issue_date,
            valid_until: quote.valid_until || null,
            discount: quote.discount,
            notes: quote.notes,
          })
          setQuote(prev => ({ ...prev, id: newQuote.id, quote_number: newQuote.quote_number }))
        }

        const { data } = await createQuoteItem(quote.id, {
          ...newItem,
          total: newItem.quantity * newItem.unit_price,
        })
        setItems(prev => [...prev, data])
      } else {
        const { data } = await createQuoteItem(id, {
          ...newItem,
          total: newItem.quantity * newItem.unit_price,
        })
        setItems(prev => [...prev, data])
      }

      setNewItem({
        type: 'service',
        description: '',
        quantity: 1,
        unit_price: 0,
        unit: '',
      })
      setShowNewItemForm(false)
    } catch (error) {
      alert(`Erro ao adicionar item: ${error.message}`)
    }
  }

  const handleUpdateItem = async (itemId, field, value) => {
    // Update local state optimistically
    setItems(prev => prev.map(item =>
      item.id === itemId ? { ...item, [field]: value } : item
    ))

    try {
      const updates = { [field]: value }
      // Recalculate total if quantity or unit_price changed
      if (field === 'quantity' || field === 'unit_price') {
        const item = items.find(i => i.id === itemId)
        const quantity = field === 'quantity' ? value : Number(item.quantity)
        const unitPrice = field === 'unit_price' ? value : Number(item.unit_price)
        updates.total = quantity * unitPrice
      }

      await updateQuoteItem(isNew ? quote.id : id, itemId, updates)
    } catch (error) {
      alert(`Erro ao atualizar item: ${error.message}`)
      // Could revert to previous value here
    }
  }

  const handleDeleteItem = async (itemId) => {
    setDeletingItem(itemId)
    try {
      await deleteQuoteItem(isNew ? quote.id : id, itemId)
      setItems(prev => prev.filter(item => item.id !== itemId))
    } catch (error) {
      alert(`Erro ao excluir item: ${error.message}`)
    } finally {
      setDeletingItem(null)
    }
  }

  const handleSaveQuote = async () => {
    if (!quote.client_id) {
      alert('Selecione um cliente')
      return
    }

    setSaving(true)
    try {
      if (isNew) {
        if (!quote.id) {
          const data = await createQuote({
            client_id: quote.client_id,
            description: quote.description,
            status: quote.status,
            issue_date: quote.issue_date,
            valid_until: quote.valid_until || null,
            discount: quote.discount,
            notes: quote.notes,
          })
          setQuote(prev => ({ ...prev, id: data.id, quote_number: data.quote_number }))
          alert(`Orçamento ${data.quote_number} criado com sucesso!`)
        }
      } else {
        await updateQuote(id, {
          client_id: quote.client_id,
          description: quote.description,
          status: quote.status,
          issue_date: quote.issue_date,
          valid_until: quote.valid_until || null,
          discount: quote.discount,
          notes: quote.notes,
        })
        alert('Orçamento salvo com sucesso!')
      }
    } catch (error) {
      alert(`Erro ao salvar: ${error.message}`)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner size="lg" />
      </div>
    )
  }

  const selectedClient = clients.find(c => c.id === quote.client_id)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            to="/admin/orcamentos"
            className="text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {isNew ? 'Novo Orçamento' : `Orçamento ${quote.quote_number}`}
            </h1>
            <p className="text-gray-600 mt-1">
              {isNew ? 'Preencha as informações abaixo' : 'Edite as informações do orçamento'}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => navigate('/admin/orcamentos')}>
            Cancelar
          </Button>
          <Button onClick={handleSaveQuote} loading={saving}>
            <Save className="mr-2 h-4 w-4" />
            Salvar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quote Info Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Dados do Orçamento
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Select
                  label="Cliente"
                  value={quote.client_id}
                  onChange={(e) => handleQuoteChange('client_id', e.target.value)}
                  error={!quote.client_id && 'Cliente é obrigatório'}
                >
                  <option value="">Selecione um cliente</option>
                  {clients.map(client => (
                    <option key={client.id} value={client.id}>
                      {client.company_name || client.name} {client.email && `(${client.email})`}
                    </option>
                  ))}
                </Select>
              </div>

              <Textarea
                label="Descrição"
                value={quote.description}
                onChange={(e) => handleQuoteChange('description', e.target.value)}
                placeholder="Descreva o trabalho ou projeto..."
                rows={3}
              />

              <Select
                label="Status"
                value={quote.status}
                onChange={(e) => handleQuoteChange('status', e.target.value)}
              >
                {STATUS_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </Select>

              <Input
                label="Data de Emissão"
                type="date"
                value={quote.issue_date}
                onChange={(e) => handleQuoteChange('issue_date', e.target.value)}
              />

              <Input
                label="Validade (opcional)"
                type="date"
                value={quote.valid_until}
                onChange={(e) => handleQuoteChange('valid_until', e.target.value)}
              />

              <div className="md:col-span-2">
                <Textarea
                  label="Observações"
                  value={quote.notes}
                  onChange={(e) => handleQuoteChange('notes', e.target.value)}
                  placeholder="Informações adicionais..."
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Serviços</h2>
              <Button size="sm" onClick={() => setShowNewItemForm(!showNewItemForm)}>
                <Plus className="mr-1 h-4 w-4" />
                Adicionar
              </Button>
            </div>

            {/* Add Service Form */}
            {showNewItemForm && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Novo Serviço</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                  <Input
                    label="Descrição"
                    value={newItem.description}
                    onChange={(e) => setNewItem(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Ex: Consultoria"
                  />
                  <Input
                    label="Qtd"
                    type="number"
                    step="0.01"
                    min="0"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem(prev => ({ ...prev, quantity: parseFloat(e.target.value) || 0 }))}
                  />
                  <Input
                    label="Valor Unit."
                    type="number"
                    step="0.01"
                    min="0"
                    value={newItem.unit_price}
                    onChange={(e) => setNewItem(prev => ({ ...prev, unit_price: parseFloat(e.target.value) || 0 }))}
                    prefix="R$"
                  />
                  <Input
                    label="Unidade"
                    value={newItem.unit}
                    onChange={(e) => setNewItem(prev => ({ ...prev, unit: e.target.value }))}
                    placeholder="hora, un, m²..."
                  />
                  <div className="flex items-end">
                    <Button
                      onClick={handleAddItem}
                      className="w-full"
                    >
                      Adicionar
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Services Table */}
            {items.filter(i => i.type === 'service').length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-8">Nenhum serviço adicionado</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Descrição</th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-16">Qtd</th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-20">Un</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-28">Vlr Unit.</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-24">Total</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-16">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {items.filter(i => i.type === 'service').map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => handleUpdateItem(item.id, 'description', e.target.value)}
                            className="w-full text-sm border-0 focus:ring-0 p-0 bg-transparent"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={item.quantity}
                            onChange={(e) => handleUpdateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                            className="w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <input
                            type="text"
                            value={item.unit || ''}
                            onChange={(e) => handleUpdateItem(item.id, 'unit', e.target.value)}
                            className="w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-center justify-end">
                            <span className="text-gray-500 mr-1">R$</span>
                            <input
                              type="number"
                              step="0.01"
                              min="0"
                              value={item.unit_price}
                              onChange={(e) => handleUpdateItem(item.id, 'unit_price', parseFloat(e.target.value) || 0)}
                              className="w-full text-right text-sm border-0 focus:ring-0 p-0 bg-transparent"
                            />
                          </div>
                        </td>
                        <td className="px-3 py-2 text-right text-sm font-medium text-gray-900">
                          {formatCurrency(item.total)}
                        </td>
                        <td className="px-3 py-2 text-right">
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            disabled={deletingItem === item.id}
                            className="text-red-600 hover:text-red-900 disabled:opacity-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-50 font-medium">
                      <td colSpan={3} className="px-3 py-2 text-right text-sm text-gray-700">
                        Subtotal Serviços:
                      </td>
                      <td colSpan={3} className="px-3 py-2 text-right text-sm font-bold text-gray-900">
                        {formatCurrency(calculatedServices)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>

          {/* Materials Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Materiais</h2>
              <Button size="sm" onClick={() => {
                setNewItem({ ...newItem, type: 'material' })
                setShowNewItemForm(true)
              }}>
                <Plus className="mr-1 h-4 w-4" />
                Adicionar
              </Button>
            </div>

            {/* Add Material Form */}
            {showNewItemForm && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Novo Material</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                  <Input
                    label="Descrição"
                    value={newItem.description}
                    onChange={(e) => setNewItem(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Ex: Tijolo"
                  />
                  <Input
                    label="Qtd"
                    type="number"
                    step="0.01"
                    min="0"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem(prev => ({ ...prev, quantity: parseFloat(e.target.value) || 0 }))}
                  />
                  <Input
                    label="Valor Unit."
                    type="number"
                    step="0.01"
                    min="0"
                    value={newItem.unit_price}
                    onChange={(e) => setNewItem(prev => ({ ...prev, unit_price: parseFloat(e.target.value) || 0 }))}
                    prefix="R$"
                  />
                  <Input
                    label="Unidade"
                    value={newItem.unit}
                    onChange={(e) => setNewItem(prev => ({ ...prev, unit: e.target.value }))}
                    placeholder="un, m², kg..."
                  />
                  <div className="flex items-end">
                    <Button
                      onClick={handleAddItem}
                      className="w-full"
                    >
                      Adicionar
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Materials Table */}
            {items.filter(i => i.type === 'material').length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-8">Nenhum material adicionado</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Descrição</th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-16">Qtd</th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-20">Un</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-28">Vlr Unit.</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-24">Total</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-16">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {items.filter(i => i.type === 'material').map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => handleUpdateItem(item.id, 'description', e.target.value)}
                            className="w-full text-sm border-0 focus:ring-0 p-0 bg-transparent"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={item.quantity}
                            onChange={(e) => handleUpdateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                            className="w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <input
                            type="text"
                            value={item.unit || ''}
                            onChange={(e) => handleUpdateItem(item.id, 'unit', e.target.value)}
                            className="w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-center justify-end">
                            <span className="text-gray-500 mr-1">R$</span>
                            <input
                              type="number"
                              step="0.01"
                              min="0"
                              value={item.unit_price}
                              onChange={(e) => handleUpdateItem(item.id, 'unit_price', parseFloat(e.target.value) || 0)}
                              className="w-full text-right text-sm border-0 focus:ring-0 p-0 bg-transparent"
                            />
                          </div>
                        </td>
                        <td className="px-3 py-2 text-right text-sm font-medium text-gray-900">
                          {formatCurrency(item.total)}
                        </td>
                        <td className="px-3 py-2 text-right">
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            disabled={deletingItem === item.id}
                            className="text-red-600 hover:text-red-900 disabled:opacity-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-50 font-medium">
                      <td colSpan={3} className="px-3 py-2 text-right text-sm text-gray-700">
                        Subtotal Materiais:
                      </td>
                      <td colSpan={3} className="px-3 py-2 text-right text-sm font-bold text-gray-900">
                        {formatCurrency(calculatedMaterials)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Resumo</h2>

            {/* Selected Client Info */}
            {selectedClient && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Building2 className="mr-2 h-4 w-4" />
                  Cliente
                </h3>
                <p className="text-sm font-medium text-gray-900">{selectedClient.company_name || selectedClient.name}</p>
                {selectedClient.email && (
                  <p className="text-sm text-gray-600 mt-1">{selectedClient.email}</p>
                )}
                {selectedClient.phone && (
                  <p className="text-sm text-gray-600">{selectedClient.phone}</p>
                )}
              </div>
            )}

            {/* Totals */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-sm text-gray-600">Subtotal Serviços</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(calculatedServices)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-sm text-gray-600">Subtotal Materiais</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(calculatedMaterials)}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-600">Desconto</span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={quote.discount}
                  onChange={(e) => handleQuoteChange('discount', parseFloat(e.target.value) || 0)}
                  className="w-32 text-right text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div className="flex justify-between items-center py-3 border-t-2 border-gray-300">
                <span className="text-base font-bold text-gray-900">Total Final</span>
                <span className="text-xl font-bold text-primary-700">{formatCurrency(calculatedTotal)}</span>
              </div>
            </div>

            {/* Quote Metadata */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <Calendar className="mr-2 h-4 w-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-600">Emissão</p>
                  <p className="font-medium text-gray-900">{formatDate(quote.issue_date)}</p>
                </div>
              </div>
              {quote.valid_until && (
                <div className="flex items-start">
                  <Calendar className="mr-2 h-4 w-4 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-600">Validade</p>
                    <p className="font-medium text-gray-900">{formatDate(quote.valid_until)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
