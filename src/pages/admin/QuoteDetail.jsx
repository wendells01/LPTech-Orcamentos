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
  Calendar,
  Search,
  Check
} from 'lucide-react'
import {
  getQuote,
  createQuote,
  createQuoteItem,
  updateQuoteItem,
  deleteQuoteItem,
  updateQuote,
  getClients,
  getServices,
  getMaterials
} from '../../lib/firebase/queries.js'
import { QUOTE_STATUS, STATUS_OPTIONS } from '../../lib/constants/quoteStatus.js'
import { formatCurrency, formatDate, calculateTotal } from '../../lib/utils/formatters.js'
import { Button } from '../../components/common/Button.jsx'
import { Input, Select, Textarea } from '../../components/common/Input.jsx'
import { Spinner } from '../../components/common/Spinner.jsx'
import { Modal } from '../../components/common/Modal.jsx'

export const QuoteDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isNew = id === 'novo'

  // Form state
  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [deletingItem, setDeletingItem] = useState(null)
  const [clients, setClients] = useState([])
  const [services, setServices] = useState([])
  const [materials, setMaterials] = useState([])
  const [error, setError] = useState(null)

  // Quote data
  const [quote, setQuote] = useState({
    quote_number: '',
    client_id: '',
    description: '',
    status: 'negotiation',
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

  // Selection modal state
  const [showServiceSelector, setShowServiceSelector] = useState(false)
  const [showMaterialSelector, setShowMaterialSelector] = useState(false)
  const [serviceSearch, setServiceSearch] = useState('')
  const [materialSearch, setMaterialSearch] = useState('')
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])

  // Load data
  useEffect(() => {
    if (!isNew) {
      loadQuote()
    }
    // Always load reference data
    loadClients()
    loadServices()
    loadMaterials()
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

  const loadServices = async () => {
    try {
      const data = await getServices()
      setServices(data || [])
    } catch (error) {
      console.error('Error loading services:', error)
    }
  }

  const loadMaterials = async () => {
    try {
      const data = await getMaterials()
      setMaterials(data || [])
    } catch (error) {
      console.error('Error loading materials:', error)
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

  // Add multiple services
  const handleAddServices = async () => {
    if (selectedServices.length === 0) return

    try {
      const servicesToAdd = selectedServices.filter(s => s.selected).map(s => ({
        type: 'service',
        description: s.name,
        quantity: 1,
        unit_price: Number(s.unit_price),
        unit: s.unit || '',
        service_id: s.id
      }))

      for (const serviceItem of servicesToAdd) {
        if (isNew) {
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
            ...serviceItem,
            total: serviceItem.quantity * serviceItem.unit_price,
          })
          setItems(prev => [...prev, data])
        } else {
          const { data } = await createQuoteItem(id, {
            ...serviceItem,
            total: serviceItem.quantity * serviceItem.unit_price,
          })
          setItems(prev => [...prev, data])
        }
      }

      setShowServiceSelector(false)
      setSelectedServices([])
      setServiceSearch('')
    } catch (error) {
      alert(`Erro ao adicionar serviços: ${error.message}`)
    }
  }

  // Add multiple materials
  const handleAddMaterials = async () => {
    if (selectedMaterials.length === 0) return

    try {
      const materialsToAdd = selectedMaterials.filter(m => m.selected).map(m => ({
        type: 'material',
        description: m.name,
        quantity: 1,
        unit_price: Number(m.unit_price),
        unit: m.unit || '',
        material_id: m.id
      }))

      for (const materialItem of materialsToAdd) {
        if (isNew) {
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
            ...materialItem,
            total: materialItem.quantity * materialItem.unit_price,
          })
          setItems(prev => [...prev, data])
        } else {
          const { data } = await createQuoteItem(id, {
            ...materialItem,
            total: materialItem.quantity * materialItem.unit_price,
          })
          setItems(prev => [...prev, data])
        }
      }

      setShowMaterialSelector(false)
      setSelectedMaterials([])
      setMaterialSearch('')
    } catch (error) {
      alert(`Erro ao adicionar materiais: ${error.message}`)
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

  // Filter services and materials based on search
  const filteredServices = services.filter(s =>
    s.name.toLowerCase().includes(serviceSearch.toLowerCase()) ||
    (s.description || '').toLowerCase().includes(serviceSearch.toLowerCase())
  )

  const filteredMaterials = materials.filter(m =>
    m.name.toLowerCase().includes(materialSearch.toLowerCase()) ||
    (m.description || '').toLowerCase().includes(materialSearch.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            to="/admin/orcamentos"
            className="text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">
              {isNew ? 'Novo Orçamento' : `Orçamento ${quote.quote_number}`}
            </h1>
            <p className="text-slate-400 mt-1">
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
          <div className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FileText className="mr-2 h-5 w-5 text-teal-400" />
              Dados do Orçamento
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Select
                  label="Cliente *"
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
          <div className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Serviços</h2>
              <Button size="sm" onClick={() => setShowServiceSelector(true)}>
                <Plus className="mr-1 h-4 w-4" />
                Adicionar
              </Button>
            </div>

            {/* Services Table */}
            {items.filter(i => i.type === 'service').length === 0 ? (
              <p className="text-sm text-slate-400 text-center py-8">Nenhum serviço adicionado. Clique em "Adicionar" para selecionar serviços.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-slate-300 uppercase">Descrição</th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-slate-300 uppercase w-16">Qtd</th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-slate-300 uppercase w-20">Un</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-slate-300 uppercase w-28">Vlr Unit.</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-slate-300 uppercase w-24">Total</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-slate-300 uppercase w-16">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {items.filter(i => i.type === 'service').map((item) => (
                      <tr key={item.id} className="hover:bg-slate-700/50">
                        <td className="px-3 py-2">
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => handleUpdateItem(item.id, 'description', e.target.value)}
                            className="w-full text-sm border-0 focus:ring-0 p-0 bg-transparent text-slate-100"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={item.quantity}
                            onChange={(e) => handleUpdateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                            className="w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent text-slate-100"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <input
                            type="text"
                            value={item.unit || ''}
                            onChange={(e) => handleUpdateItem(item.id, 'unit', e.target.value)}
                            className="w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent text-slate-100"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-center justify-end">
                            <span className="text-slate-400 mr-1">R$</span>
                            <input
                              type="number"
                              step="0.01"
                              min="0"
                              value={item.unit_price}
                              onChange={(e) => handleUpdateItem(item.id, 'unit_price', parseFloat(e.target.value) || 0)}
                              className="w-full text-right text-sm border-0 focus:ring-0 p-0 bg-transparent text-slate-100"
                            />
                          </div>
                        </td>
                        <td className="px-3 py-2 text-right text-sm font-medium text-teal-400">
                          {formatCurrency(item.total)}
                        </td>
                        <td className="px-3 py-2 text-right">
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            disabled={deletingItem === item.id}
                            className="text-red-400 hover:text-red-300 disabled:opacity-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-700/50 font-medium">
                      <td colSpan={3} className="px-3 py-2 text-right text-sm text-slate-300">
                        Subtotal Serviços:
                      </td>
                      <td colSpan={3} className="px-3 py-2 text-right text-sm font-bold text-teal-400">
                        {formatCurrency(calculatedServices)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>

          {/* Materials Section */}
          <div className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Materiais</h2>
              <Button size="sm" onClick={() => setShowMaterialSelector(true)}>
                <Plus className="mr-1 h-4 w-4" />
                Adicionar
              </Button>
            </div>

            {/* Materials Table */}
            {items.filter(i => i.type === 'material').length === 0 ? (
              <p className="text-sm text-slate-400 text-center py-8">Nenhum material adicionado. Clique em "Adicionar" para selecionar materiais.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-slate-300 uppercase">Descrição</th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-slate-300 uppercase w-16">Qtd</th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-slate-300 uppercase w-20">Un</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-slate-300 uppercase w-28">Vlr Unit.</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-slate-300 uppercase w-24">Total</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-slate-300 uppercase w-16">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {items.filter(i => i.type === 'material').map((item) => (
                      <tr key={item.id} className="hover:bg-slate-700/50">
                        <td className="px-3 py-2">
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => handleUpdateItem(item.id, 'description', e.target.value)}
                            className="w-full text-sm border-0 focus:ring-0 p-0 bg-transparent text-slate-100"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={item.quantity}
                            onChange={(e) => handleUpdateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                            className="w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent text-slate-100"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <input
                            type="text"
                            value={item.unit || ''}
                            onChange={(e) => handleUpdateItem(item.id, 'unit', e.target.value)}
                            className="w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent text-slate-100"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-center justify-end">
                            <span className="text-slate-400 mr-1">R$</span>
                            <input
                              type="number"
                              step="0.01"
                              min="0"
                              value={item.unit_price}
                              onChange={(e) => handleUpdateItem(item.id, 'unit_price', parseFloat(e.target.value) || 0)}
                              className="w-full text-right text-sm border-0 focus:ring-0 p-0 bg-transparent text-slate-100"
                            />
                          </div>
                        </td>
                        <td className="px-3 py-2 text-right text-sm font-medium text-teal-400">
                          {formatCurrency(item.total)}
                        </td>
                        <td className="px-3 py-2 text-right">
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            disabled={deletingItem === item.id}
                            className="text-red-400 hover:text-red-300 disabled:opacity-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-700/50 font-medium">
                      <td colSpan={3} className="px-3 py-2 text-right text-sm text-slate-300">
                        Subtotal Materiais:
                      </td>
                      <td colSpan={3} className="px-3 py-2 text-right text-sm font-bold text-teal-400">
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
          <div className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700 sticky top-6">
            <h2 className="text-lg font-semibold text-white mb-4">Resumo</h2>

            {/* Selected Client Info */}
            {selectedClient && (
              <div className="mb-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                <h3 className="text-sm font-medium text-teal-400 mb-2 flex items-center">
                  <Building2 className="mr-2 h-4 w-4" />
                  Cliente
                </h3>
                <p className="text-sm font-medium text-white">{selectedClient.company_name || selectedClient.name}</p>
                {selectedClient.email && (
                  <p className="text-sm text-slate-300 mt-1">{selectedClient.email}</p>
                )}
                {selectedClient.phone && (
                  <p className="text-sm text-slate-300">{selectedClient.phone}</p>
                )}
              </div>
            )}

            {/* Totals */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-sm text-slate-300">Subtotal Serviços</span>
                <span className="text-sm font-medium text-teal-400">{formatCurrency(calculatedServices)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-sm text-slate-300">Subtotal Materiais</span>
                <span className="text-sm font-medium text-teal-400">{formatCurrency(calculatedMaterials)}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-slate-300">Desconto</span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={quote.discount}
                  onChange={(e) => handleQuoteChange('discount', parseFloat(e.target.value) || 0)}
                  className="w-32 text-right text-sm border border-slate-600 rounded-md px-2 py-1 bg-slate-700 text-slate-100 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div className="flex justify-between items-center py-3 border-t-2 border-teal-600">
                <span className="text-base font-bold text-white">Total Final</span>
                <span className="text-xl font-bold text-teal-400">{formatCurrency(calculatedTotal)}</span>
              </div>
            </div>

            {/* Quote Metadata */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <Calendar className="mr-2 h-4 w-4 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-slate-400">Emissão</p>
                  <p className="font-medium text-white">{formatDate(quote.issue_date)}</p>
                </div>
              </div>
              {quote.valid_until && (
                <div className="flex items-start">
                  <Calendar className="mr-2 h-4 w-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-slate-400">Validade</p>
                    <p className="font-medium text-white">{formatDate(quote.valid_until)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Service Selector Modal */}
      {showServiceSelector && (
        <Modal
          isOpen={showServiceSelector}
          onClose={() => {
            setShowServiceSelector(false)
            setSelectedServices([])
            setServiceSearch('')
          }}
          title="Selecionar Serviços"
          size="lg"
        >
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar serviços..."
                value={serviceSearch}
                onChange={(e) => setServiceSearch(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-slate-600 rounded-md bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>

            <div className="max-h-96 overflow-y-auto space-y-2">
              {filteredServices.length === 0 ? (
                <p className="text-slate-400 text-center py-8">Nenhum serviço encontrado.</p>
              ) : (
                filteredServices.map(service => (
                  <div
                    key={service.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedServices.find(s => s.id === service.id)?.selected
                        ? 'bg-teal-600/20 border-teal-500'
                        : 'bg-slate-700 border-slate-600 hover:border-teal-500'
                    }`}
                    onClick={() => {
                      const isSelected = selectedServices.find(s => s.id === service.id)
                      if (isSelected) {
                        setSelectedServices(prev => prev.filter(s => s.id !== service.id))
                      } else {
                        setSelectedServices(prev => [...prev, { ...service, selected: true }])
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">{service.name}</p>
                        {service.description && (
                          <p className="text-sm text-slate-400">{service.description}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-teal-400 font-medium">
                          R$ {Number(service.unit_price).toFixed(2)}
                          {service.unit && <span className="text-slate-400 text-sm"> / {service.unit}</span>}
                        </span>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          selectedServices.find(s => s.id === service.id)
                            ? 'bg-teal-500 border-teal-500'
                            : 'border-slate-500'
                        }`}>
                          {selectedServices.find(s => s.id === service.id) && (
                            <Check className="h-3 w-3 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-700">
              <p className="text-sm text-slate-300">
                {selectedServices.filter(s => s.selected).length} serviço(s) selecionado(s)
              </p>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setShowServiceSelector(false)
                    setSelectedServices([])
                    setServiceSearch('')
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleAddServices}
                  disabled={selectedServices.filter(s => s.selected).length === 0}
                >
                  <Check className="mr-2 h-4 w-4" />
                  Adicionar Selecionados
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Material Selector Modal */}
      {showMaterialSelector && (
        <Modal
          isOpen={showMaterialSelector}
          onClose={() => {
            setShowMaterialSelector(false)
            setSelectedMaterials([])
            setMaterialSearch('')
          }}
          title="Selecionar Materiais"
          size="lg"
        >
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar materiais..."
                value={materialSearch}
                onChange={(e) => setMaterialSearch(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-slate-600 rounded-md bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>

            <div className="max-h-96 overflow-y-auto space-y-2">
              {filteredMaterials.length === 0 ? (
                <p className="text-slate-400 text-center py-8">Nenhum material encontrado.</p>
              ) : (
                filteredMaterials.map(material => (
                  <div
                    key={material.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedMaterials.find(m => m.id === material.id)?.selected
                        ? 'bg-teal-600/20 border-teal-500'
                        : 'bg-slate-700 border-slate-600 hover:border-teal-500'
                    }`}
                    onClick={() => {
                      const isSelected = selectedMaterials.find(m => m.id === material.id)
                      if (isSelected) {
                        setSelectedMaterials(prev => prev.filter(m => m.id !== material.id))
                      } else {
                        setSelectedMaterials(prev => [...prev, { ...material, selected: true }])
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">{material.name}</p>
                        {material.description && (
                          <p className="text-sm text-slate-400">{material.description}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-teal-400 font-medium">
                          R$ {Number(material.unit_price).toFixed(2)}
                          {material.unit && <span className="text-slate-400 text-sm"> / {material.unit}</span>}
                        </span>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          selectedMaterials.find(m => m.id === material.id)
                            ? 'bg-teal-500 border-teal-500'
                            : 'border-slate-500'
                        }`}>
                          {selectedMaterials.find(m => m.id === material.id) && (
                            <Check className="h-3 w-3 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-700">
              <p className="text-sm text-slate-300">
                {selectedMaterials.filter(m => m.selected).length} material(is) selecionado(s)
              </p>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setShowMaterialSelector(false)
                    setSelectedMaterials([])
                    setMaterialSearch('')
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleAddMaterials}
                  disabled={selectedMaterials.filter(m => m.selected).length === 0}
                >
                  <Check className="mr-2 h-4 w-4" />
                  Adicionar Selecionados
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
