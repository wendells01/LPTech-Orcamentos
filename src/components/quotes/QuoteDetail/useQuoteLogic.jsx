import { useEffect, useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
} from '../../../lib/firebase/queries.js'
import { formatCurrency, calculateTotal } from '../../../lib/utils/formatters.js'

export const useQuoteLogic = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isNew = id === 'novo'

  // Loading states
  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [deletingItem, setDeletingItem] = useState(null)
  const [error, setError] = useState(null)

  // Reference data
  const [clients, setClients] = useState([])
  const [services, setServices] = useState([])
  const [materials, setMaterials] = useState([])

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

  // Selected client info
  const selectedClient = useMemo(() => {
    return clients.find(c => c.id === quote.client_id)
  }, [clients, quote.client_id])

  // Filter services and materials based on search
  const filteredServices = useMemo(() => {
    return services.filter(s =>
      s.name.toLowerCase().includes(serviceSearch.toLowerCase()) ||
      (s.description || '').toLowerCase().includes(serviceSearch.toLowerCase())
    )
  }, [services, serviceSearch])

  const filteredMaterials = useMemo(() => {
    return materials.filter(m =>
      m.name.toLowerCase().includes(materialSearch.toLowerCase()) ||
      (m.description || '').toLowerCase().includes(materialSearch.toLowerCase())
    )
  }, [materials, materialSearch])

  // Handlers
  const handleQuoteChange = (field, value) => {
    setQuote(prev => ({ ...prev, [field]: value }))
  }

  // Generic function to add items (services or materials)
  const addItems = async (type, itemsToAdd, createFunction) => {
    if (itemsToAdd.length === 0) return

    try {
      for (const item of itemsToAdd) {
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
            ...item,
            total: item.quantity * item.unit_price,
          })
          setItems(prev => [...prev, data])
        } else {
          const { data } = await createQuoteItem(id, {
            ...item,
            total: item.quantity * item.unit_price,
          })
          setItems(prev => [...prev, data])
        }
      }
    } catch (error) {
      throw error
    }
  }

  const handleAddServices = async () => {
    // Validação: cliente obrigatório
    if (!quote.client_id) {
      alert('Selecione um cliente antes de adicionar serviços')
      return
    }

    const servicesToAdd = selectedServices.filter(s => s.selected).map(s => ({
      type: 'service',
      description: s.name,
      quantity: 1,
      unit_price: Number(s.unit_price),
      unit: s.unit || '',
      service_id: s.id
    }))

    if (servicesToAdd.length === 0) {
      alert('Selecione pelo menos um serviço')
      return
    }

    try {
      await addItems('service', servicesToAdd, createQuoteItem)
      setShowServiceSelector(false)
      setSelectedServices([])
      setServiceSearch('')
    } catch (error) {
      alert(`Erro ao adicionar serviços: ${error.message}`)
    }
  }

  const handleAddMaterials = async () => {
    // Validação: cliente obrigatório
    if (!quote.client_id) {
      alert('Selecione um cliente antes de adicionar materiais')
      return
    }

    const materialsToAdd = selectedMaterials.filter(m => m.selected).map(m => ({
      type: 'material',
      description: m.name,
      quantity: 1,
      unit_price: Number(m.unit_price),
      unit: m.unit || '',
      material_id: m.id
    }))

    if (materialsToAdd.length === 0) {
      alert('Selecione pelo menos um material')
      return
    }

    try {
      await addItems('material', materialsToAdd, createQuoteItem)
      setShowMaterialSelector(false)
      setSelectedMaterials([])
      setMaterialSearch('')
    } catch (error) {
      alert(`Erro ao adicionar materiais: ${error.message}`)
    }
  }

  const handleUpdateItem = async (itemId, field, value) => {
    // Validação para quantidade e preço
    if (field === 'quantity' || field === 'unit_price') {
      const numValue = Number(value)
      if (numValue <= 0) {
        alert(`${field === 'quantity' ? 'Quantidade' : 'Preço unitário'} deve ser maior que zero`)
        return
      }
    }

    // Guardar estado anterior para rollback
    const previousItems = [...items]
    const previousItem = items.find(i => i.id === itemId)

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
      // Rollback: restaurar estado anterior
      setItems(previousItems)
      console.error('Rollback executed for item:', itemId, error)
    }
  }

  const handleDeleteItem = async (itemId) => {
    setDeletingItem(itemId)

    // Guardar estado anterior para rollback
    const previousItems = [...items]
    const deletedItem = items.find(i => i.id === itemId)

    // Otimistic update: remover da UI imediatamente
    setItems(prev => prev.filter(item => item.id !== itemId))

    try {
      await deleteQuoteItem(isNew ? quote.id : id, itemId)
    } catch (error) {
      alert(`Erro ao excluir item: ${error.message}`)
      // Rollback: restaurar item na UI
      setItems(prev => [...previousItems, deletedItem])
      console.error('Rollback executed for deleted item:', itemId, error)
    } finally {
      setDeletingItem(null)
    }
  }

  const handleSaveQuote = async () => {
    if (!quote.client_id) {
      alert('Selecione um cliente')
      return
    }

    // Validação: pelo menos um item (serviço ou material)
    if (items.length === 0) {
      alert('Adicione pelo menos um serviço ou material ao orçamento')
      return
    }

    // Validação: verificar se todos os itens têm quantidade > 0 e preço > 0
    const invalidItems = items.filter(item =>
      item.quantity <= 0 || item.unit_price <= 0
    )

    if (invalidItems.length > 0) {
      alert('Todos os itens devem ter quantidade e preço unitário maiores que zero')
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

  return {
    // States
    loading,
    saving,
    deletingItem,
    clients,
    services,
    materials,
    error,
    quote,
    items,
    showServiceSelector,
    showMaterialSelector,
    serviceSearch,
    materialSearch,
    selectedServices,
    selectedMaterials,

    // Setters
    setShowServiceSelector,
    setShowMaterialSelector,
    setServiceSearch,
    setMaterialSearch,
    setSelectedServices,
    setSelectedMaterials,

    // Handlers
    handleQuoteChange,
    handleAddServices,
    handleAddMaterials,
    handleUpdateItem,
    handleDeleteItem,
    handleSaveQuote,

    // Computed values
    calculatedServices,
    calculatedMaterials,
    calculatedTotal,
    selectedClient,
    filteredServices,
    filteredMaterials,
    isNew,
  }
}
