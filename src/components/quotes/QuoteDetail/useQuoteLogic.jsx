import { useEffect, useState, useMemo } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
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
} from '../../../lib/firebase/queries'
import { calculateTotal } from '../../../lib/utils/formatters.js'
import { useAuth } from '../../../hooks/useAuth.jsx'

export const useQuoteLogic = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()
  // Precise detection: only /admin/orcamentos/novo is creation mode
  const isNew = location.pathname === '/admin/orcamentos/novo'

  console.log('🔍 useQuoteLogic: Inicializando', { id, isNew, pathname: location.pathname, user: user?.email })

  // Loading states - sempre começa true, pois precisamos carregar dados de referência
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deletingItem, setDeletingItem] = useState(null)
  const [error, setError] = useState(null)
  const [debugLogs, setDebugLogs] = useState([])

  // Reference data
  const [clients, setClients] = useState([])
  const [services, setServices] = useState([])
  const [materials, setMaterials] = useState([])
  const [refDataError, setRefDataError] = useState(null)

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

  // Quote items (all items that will be saved: existing + pending)
  const [items, setItems] = useState([])

  // Selection modal state
  const [showServiceSelector, setShowServiceSelector] = useState(false)
  const [showMaterialSelector, setShowMaterialSelector] = useState(false)
  const [serviceSearch, setServiceSearch] = useState('')
  const [materialSearch, setMaterialSearch] = useState('')
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])

  // Debug helper - captures logs to state for iPhone debugging
  const addDebugLog = (type, message, data = null) => {
    const timestamp = new Date().toLocaleTimeString('pt-BR', { hour12: false })
    setDebugLogs(prev => [...prev.slice(-19), { type, message, data, timestamp }]) // Keep last 20 logs
  }

  // Load data — each loader has its own 10s timeout
  useEffect(() => {
    console.log('🔍 useQuoteLogic: useEffect rodando', { id, isNew, userEmail: user?.email, userExists: !!user })
    let isMounted = true

    const loadAllData = async () => {
      try {
        console.log('🚀 Iniciando carregamento de dados:', { isNew, id })

        // Fail fast if no user
        if (!user) {
          const err = new Error('Usuário não autenticado')
          console.error('❌ loadAllData: Sem usuário logado')
          if (isMounted) {
            setRefDataError('Você precisa estar logado para acessar esta página.')
            setLoading(false)
          }
          throw err
        }

        // Load reference data in parallel (clients, services, materials)
        // Cada load* tem timeout próprio de 10s
        console.log('📦 Iniciando Promise.allSettled das 3 consultas...')
        const results = await Promise.allSettled([
          loadClients(),
          loadServices(),
          loadMaterials()
        ])
        console.log('✅ Promise.allSettled resolved')

        // Check for errors
        const errors = []
        if (results[0].status === 'rejected') {
          errors.push('clientes')
          console.error('❌ Erro ao carregar clientes:', results[0].reason)
        }
        if (results[1].status === 'rejected') {
          errors.push('serviços')
          console.error('❌ Erro ao carregar serviços:', results[1].reason)
        }
        if (results[2].status === 'rejected') {
          errors.push('materiais')
          console.error('❌ Erro ao carregar materiais:', results[2].reason)
        }

        if (errors.length > 0 && isMounted) {
          setRefDataError(`Falha ao carregar: ${errors.join(', ')}`)
        }

        // Only load existing quote if we have a valid id and are NOT in creation mode
        if (!isNew && id) {
          try {
            await loadQuote()
          } catch (err) {
            console.error('❌ Erro ao carregar orçamento:', err)
            // loadQuote já lida com redirect e messages
          }
        }

        if (isMounted) {
          console.log('✅ Carregamento concluído')
          setLoading(false)
        }
      } catch (err) {
        console.error('❌ Erro geral no carregamento:', err)
        if (isMounted) {
          setRefDataError('Erro inesperado ao carregar dados')
          setLoading(false)
        }
      }
    }

    loadAllData()

    return () => {
      isMounted = false
      console.log('🧹 useQuoteEffect cleanup')
    }
  }, [id, isNew, user]) // ✅ user added as dependency

  const loadQuote = async () => {
    addDebugLog('INFO', 'Carregando orçamento', { id })
    try {
      // Timeout de 10s para loadQuote
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout ao carregar orçamento')), 10000)
      )
      const data = await Promise.race([getQuote(id), timeoutPromise])
      addDebugLog('DATA', 'Dados recebidos', data)

      if (!data) {
        addDebugLog('WARN', 'Orçamento não encontrado')
        alert('Orçamento não encontrado')
        navigate('/admin/orcamentos')
        throw new Error('Quote not found')
      }

      // Ensure items have total calculated if missing
      const itemsWithTotal = (data.items || []).map(item => ({
        ...item,
        total: item.total !== undefined ? Number(item.total) : Number(item.quantity) * Number(item.unit_price)
      }))
      addDebugLog('INFO', 'Itens processados', { count: itemsWithTotal.length })

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
      setItems(itemsWithTotal)
      addDebugLog('SUCCESS', 'Orçamento carregado')
      return data
    } catch (error) {
      addDebugLog('ERROR', 'Erro ao carregar orçamento', { error: error.message, code: error.code })
      alert(`Erro ao carregar orçamento: ${error.message || error.code}`)
      navigate('/admin/orcamentos')
      throw error
    }
  }

  const loadClients = async () => {
    console.log('🔍 useQuoteLogic: Carregando clientes para orçamento...')
    if (!user) {
      console.error('❌ loadClients: Usuário NÃO autenticado!')
      throw new Error('Usuário não autenticado')
    }
    // Timeout de 10s para esta operação específica
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout ao carregar clientes')), 10000)
    )
    const loadPromise = getClients()
    return Promise.race([loadPromise, timeoutPromise])
      .then(result => {
        const { data: clientsData } = result
        console.log('🔍 useQuoteLogic: Clientes carregados:', clientsData?.length || 0, 'clientes')
        setClients(clientsData || [])
        return clientsData
      })
  }

  const loadServices = async () => {
    console.log('🔍 useQuoteLogic: Carregando serviços...')
    if (!user) {
      console.error('❌ loadServices: Usuário NÃO autenticado!')
      throw new Error('Usuário não autenticado')
    }
    // Timeout de 10s para esta operação específica
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout ao carregar serviços')), 10000)
    )
    const loadPromise = getServices()
    return Promise.race([loadPromise, timeoutPromise])
      .then(result => {
        const { data: servicesData } = result
        console.log('🔍 useQuoteLogic: Serviços carregados:', servicesData?.length || 0)
        setServices(servicesData || [])
        return servicesData
      })
  }

  const loadMaterials = async () => {
    console.log('🔍 useQuoteLogic: Carregando materiais...')
    if (!user) {
      console.error('❌ loadMaterials: Usuário NÃO autenticado!')
      throw new Error('Usuário não autenticado')
    }
    // Timeout de 10s para esta operação específica
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout ao carregar materiais')), 10000)
    )
    const loadPromise = getMaterials()
    return Promise.race([loadPromise, timeoutPromise])
      .then(result => {
        const { data: materialsData } = result
        console.log('🔍 useQuoteLogic: Materiais carregados:', materialsData?.length || 0)
        setMaterials(materialsData || [])
        return materialsData
      })
  }

  // Calculated totals - now based on all items (including pending)
  const calculatedServices = useMemo(() => {
    return items.filter(i => i.type === 'service').reduce((sum, i) => {
      const total = i.total !== undefined ? Number(i.total) : Number(i.quantity) * Number(i.unit_price)
      return sum + total
    }, 0)
  }, [items])

  const calculatedMaterials = useMemo(() => {
    return items.filter(i => i.type === 'material').reduce((sum, i) => {
      const total = i.total !== undefined ? Number(i.total) : Number(i.quantity) * Number(i.unit_price)
      return sum + total
    }, 0)
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

  // Add services/materials to local state (without saving to Firebase yet)
  const handleAddServices = async () => {
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
      service_id: s.id,
      total: Number(s.unit_price) * 1
    }))

    if (servicesToAdd.length === 0) {
      alert('Selecione pelo menos um serviço')
      return
    }

    // Add to local state only (no Firebase save yet)
    setItems(prev => [...prev, ...servicesToAdd])
    setShowServiceSelector(false)
    setSelectedServices([])
    setServiceSearch('')
  }

  const handleAddMaterials = async () => {
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
      material_id: m.id,
      total: Number(m.unit_price) * 1
    }))

    if (materialsToAdd.length === 0) {
      alert('Selecione pelo menos um material')
      return
    }

    // Add to local state only (no Firebase save yet)
    setItems(prev => [...prev, ...materialsToAdd])
    setShowMaterialSelector(false)
    setSelectedMaterials([])
    setMaterialSearch('')
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

      // Only save to Firebase if item already exists (has id)
      if (itemId) {
        await updateQuoteItem(isNew ? quote.id : id, itemId, updates)
      }
      // If item has no id (pending), it will be saved when handleSaveQuote is called
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
      // Only delete from Firebase if item already exists (has id)
      if (itemId) {
        await deleteQuoteItem(isNew ? quote.id : id, itemId)
      }
      // If item has no id (pending), it's already removed from local state
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
    addDebugLog('ACTION', 'Salvar orçamento cliqueado')

    if (!quote.client_id) {
      alert('Selecione um cliente')
      addDebugLog('ERROR', 'Nenhum cliente selecionado')
      return
    }

    // Validação: pelo menos um item (serviço ou material)
    if (items.length === 0) {
      alert('Adicione pelo menos um serviço ou material ao orçamento')
      addDebugLog('ERROR', 'Nenhum item no orçamento')
      return
    }

    // Validação: verificar se todos os itens têm quantidade > 0 e preço > 0
    const invalidItems = items.filter(item =>
      item.quantity <= 0 || item.unit_price <= 0
    )

    if (invalidItems.length > 0) {
      alert('Todos os itens devem ter quantidade e preço unitário maiores que zero')
      addDebugLog('ERROR', 'Itens inválidos', invalidItems)
      return
    }

    setSaving(true)
    try {
      // Prepare items for saving (ensure total is calculated)
      addDebugLog('INFO', 'Preparando itens para salvar', { count: items.length })
      const itemsToSave = items.map((item, index) => {
        const total = item.total !== undefined ? Number(item.total) : Number(item.quantity) * Number(item.unit_price)
        const itemData = {
          type: item.type,
          description: item.description,
          quantity: Number(item.quantity),
          unit_price: Number(item.unit_price),
          unit: item.unit || '',
          total: total,
          display_order: index
        }
        if (item.type === 'service') {
          itemData.service_id = item.service_id
        } else if (item.type === 'material') {
          itemData.material_id = item.material_id
        }
        addDebugLog('ITEM', `Item ${index}`, itemData)
        return itemData
      })

      addDebugLog('PAYLOAD', 'Salvando orçamento', {
        client_id: quote.client_id,
        description: quote.description,
        status: quote.status,
        issue_date: quote.issue_date,
        valid_until: quote.valid_until,
        discount: quote.discount,
        notes: quote.notes,
        subtotal_services: calculatedServices,
        subtotal_materials: calculatedMaterials,
        total: calculatedTotal,
        itemsCount: itemsToSave.length
      })

      if (isNew) {
        // Create new quote with all items at once
        addDebugLog('ACTION', 'Criando novo orçamento')
        const data = await createQuote({
          client_id: quote.client_id,
          description: quote.description,
          status: quote.status,
          issue_date: quote.issue_date,
          valid_until: quote.valid_until || null,
          discount: quote.discount,
          notes: quote.notes,
          subtotal_services: calculatedServices,
          subtotal_materials: calculatedMaterials,
          total: calculatedTotal,
          items: itemsToSave
        })
        addDebugLog('SUCCESS', 'Orçamento criado', { id: data.id, quote_number: data.quote_number })
        setQuote(prev => ({ ...prev, id: data.id, quote_number: data.quote_number }))
        setItems([]) // Clear local items as they are now saved
        alert(`Orçamento ${data.quote_number} criado com sucesso!`)
        // Redirect to quotes list after short delay
        setTimeout(() => navigate('/admin/orcamentos'), 1000)
      } else {
        // Update existing quote with all items (replace all)
        addDebugLog('ACTION', 'Atualizando orçamento', { id })
        await updateQuote(id, {
          client_id: quote.client_id,
          description: quote.description,
          status: quote.status,
          issue_date: quote.issue_date,
          valid_until: quote.valid_until || null,
          discount: quote.discount,
          notes: quote.notes,
          subtotal_services: calculatedServices,
          subtotal_materials: calculatedMaterials,
          total: calculatedTotal,
          items: itemsToSave
        })
        setItems([]) // Clear pending changes
        addDebugLog('SUCCESS', 'Orçamento atualizado')
        alert('Orçamento salvo com sucesso!')
      }
    } catch (error) {
      addDebugLog('ERROR', 'Erro ao salvar orçamento', { message: error.message, code: error.code, stack: error.stack })
      alert(`Erro ao salvar: ${error.message || error.code || 'Erro desconhecido'}`)
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
    debugLogs,

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
