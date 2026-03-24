import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Save, AlertCircle, Bug, Mail, Lock, User } from 'lucide-react'
import { getClient, createClient, updateClient } from '../../lib/firebase/queries.js'
import { Button } from '../../components/common/Button.jsx'
import { Input, Textarea } from '../../components/common/Input.jsx'
import { Spinner } from '../../components/common/Spinner.jsx'
import { useAuth } from '../../hooks/useAuth.jsx'

export const ClientForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = id && id !== 'novo'  // Corrige: 'novo' é criação, não edição

  const { user } = useAuth()
  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [authError, setAuthError] = useState(null)
  const [debugInfo, setDebugInfo] = useState(null)
  const [lastOperation, setLastOperation] = useState(null)

  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    neighborhood: '',
    street: '',
    number: '',
    complement: '',
  })

  // DEBUG: mostrar info de autenticação
  useEffect(() => {
    const debug = {
      user: user ? { email: user.email, uid: user.uid?.slice(0, 10) + '...' } : null,
      isEditing,
      id,
      timestamp: new Date().toLocaleTimeString('pt-BR')
    }
    setDebugInfo(debug)
    console.log('🔍 ClientForm DEBUG:', debug)
  }, [user, isEditing, id])

  useEffect(() => {
    if (isEditing) {
      loadClient()
    }
  }, [id])

  const loadClient = async () => {
    try {
      if (!user) {
        const msg = '⚠️ VOCÊ NÃO ESTÁ LOGADO! Faça login primeiro.'
        setAuthError(msg)
        setLastOperation({ type: 'LOAD', status: 'FAILED', message: msg, timestamp: new Date().toLocaleTimeString() })
        setTimeout(() => navigate('/admin/login'), 2000)
        return
      }
      console.log('🔍 Loading client with id:', id)
      setLastOperation({ type: 'LOAD', status: 'STARTED', message: `Buscando cliente ${id}...`, timestamp: new Date().toLocaleTimeString() })
      const data = await getClient(id)
      if (!data) {
        alert('Cliente não encontrado')
        navigate('/admin/clientes')
        return
      }
      setClient({
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        city: data.city || '',
        neighborhood: data.neighborhood || '',
        street: data.street || '',
        number: data.number || '',
        complement: data.complement || '',
      })
      setLastOperation({ type: 'LOAD', status: 'SUCCESS', message: `Cliente "${data.name}" carregado`, timestamp: new Date().toLocaleTimeString() })
    } catch (error) {
      console.error('Error loading client:', error)
      setLastOperation({ type: 'LOAD', status: 'ERROR', message: error.message, details: error.code, timestamp: new Date().toLocaleTimeString() })
      alert('Erro ao carregar cliente')
      navigate('/admin/clientes')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field, value) => {
    setClient(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setAuthError(null)

    if (!user) {
      const msg = '❌ VOCÊ PRECISA ESTAR LOGADO para cadastrar clientes'
      setAuthError(msg)
      setLastOperation({ type: 'SAVE', status: 'FAILED', message: msg, timestamp: new Date().toLocaleTimeString() })
      alert(msg)
      console.error('❌ Unauthorized: no user')
      return
    }

    if (!client.name.trim()) {
      setError('O nome do cliente é obrigatório')
      setLastOperation({ type: 'SAVE', status: 'FAILED', message: 'Nome não informado', timestamp: new Date().toLocaleTimeString() })
      return
    }

    // Validação adicional: pelo menos cidade e rua para endereço completo
    if (!client.city.trim() || !client.street.trim()) {
      setError('Cidade e Rua são obrigatórios para o endereço')
      setLastOperation({ type: 'SAVE', status: 'FAILED', message: 'Cidade e Rua obrigatórios', timestamp: new Date().toLocaleTimeString() })
      return
    }

    setSaving(true)
    try {
      console.log('🚀 Attempting to save client:', client)
      console.log('👤 User auth status:', user ? { email: user.email, uid: user.uid } : 'NOT AUTHENTICATED')
      console.log('📤 Operation:', isEditing ? 'UPDATE' : 'CREATE')

      setLastOperation({
        type: 'SAVE',
        status: 'STARTED',
        message: `Enviando para Firebase...`,
        details: `Operação: ${isEditing ? 'UPDATE' : 'CREATE'}`,
        timestamp: new Date().toLocaleTimeString()
      })

      if (isEditing) {
        const result = await updateClient(id, client)
        console.log('✅ Update result:', result)
        setLastOperation({
          type: 'SAVE',
          status: 'SUCCESS',
          message: `Cliente "${client.name}" atualizado com sucesso!`,
          details: `ID: ${result.id}`,
          timestamp: new Date().toLocaleTimeString()
        })
        alert('✅ Cliente atualizado com sucesso!')
      } else {
        const result = await createClient(client)
        console.log('✅ Create result:', result)
        setLastOperation({
          type: 'SAVE',
          status: 'SUCCESS',
          message: `Cliente "${client.name}" criado com sucesso!`,
          details: `ID: ${result.id}`,
          timestamp: new Date().toLocaleTimeString()
        })
        alert(`✅ Cliente "${client.name}" criado com sucesso!`)
      }
      setTimeout(() => navigate('/admin/clientes'), 1500)
    } catch (error) {
      console.error('❌ Save error:', error)
      console.error('📋 Error details:', JSON.stringify(error, null, 2))
      const errorMsg = error?.code || error?.message || 'Erro desconhecido'
      const details = error?.code ? `Código: ${error.code}` : ''
      setLastOperation({
        type: 'SAVE',
        status: 'ERROR',
        message: errorMsg,
        details,
        timestamp: new Date().toLocaleTimeString()
      })
      alert(`❌ Erro ao salvar cliente: ${errorMsg}`)
      // Mostra erro específico de autenticação
      if (error?.code === 'permission-denied') {
        alert('🔴 ERRO DE PERMISSÃO: Verifique:\n1. Se você está logado\n2. Se as regras do Firebase permitem escrita\n3. Se sua sessão não expirou')
      }
      setError(`Erro: ${errorMsg}`)
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            to="/admin/clientes"
            className="text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">
              {isEditing ? 'Editar Cliente' : 'Novo Cliente'}
            </h1>
            <p className="text-slate-400 mt-1">
              {isEditing ? 'Atualize as informações do cliente' : 'Cadastre um novo cliente'}
            </p>
          </div>
        </div>
      </div>

      {/* DEBUG PANEL - Visível e destacado */}
      <div className="bg-slate-800 p-4 rounded-lg border-2 border-teal-500 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Bug className="h-5 w-5 text-teal-400" />
          <span className="text-base font-bold text-teal-400">🔧 STATUS & DEBUG</span>
        </div>

        {/* Auth Status */}
        <div className={`p-3 rounded-md mb-3 ${user ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/30 border border-red-700'}`}>
          <div className="flex items-center gap-2 mb-1">
            {user ? (
              <User className="h-4 w-4 text-green-400" />
            ) : (
              <Lock className="h-4 w-4 text-red-400" />
            )}
            <span className={`text-sm font-semibold ${user ? 'text-green-400' : 'text-red-400'}`}>
              {user ? '✅ AUTENTICADO' : '❌ NÃO AUTENTICADO'}
            </span>
          </div>
          {user && (
            <div className="text-xs text-green-300 ml-6">
              Email: {user.email}<br/>
              UID: {user.uid?.slice(0, 12)}...
            </div>
          )}
          {!user && (
            <div className="text-xs text-red-300 ml-6">
              Faça login em <Link to="/admin/login" className="underline text-red-400">/admin/login</Link>
            </div>
          )}
        </div>

        {/* Mode & Params */}
        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
          <div className="bg-slate-700/50 p-2 rounded">
            <span className="text-slate-400">Modo:</span>
            <span className="ml-2 font-mono text-white">{isEditing ? 'EDITAR' : 'NOVO'}</span>
          </div>
          <div className="bg-slate-700/50 p-2 rounded">
            <span className="text-slate-400">ID param:</span>
            <span className="ml-2 font-mono text-white">{id || 'novo'}</span>
          </div>
          <div className="bg-slate-700/50 p-2 rounded col-span-2">
            <span className="text-slate-400">Timestamp:</span>
            <span className="ml-2 font-mono text-white">{debugInfo?.timestamp}</span>
          </div>
        </div>

        {/* Auth Error */}
        {authError && (
          <div className="mb-3 p-3 bg-red-900/40 border-2 border-red-500 rounded-md text-sm text-red-300">
            <AlertCircle className="inline h-4 w-4 mr-2" />
            {authError}
          </div>
        )}

        {/* Last Operation */}
        {lastOperation && (
          <div className={`p-3 rounded-md ${lastOperation.status === 'SUCCESS' ? 'bg-green-900/30 border border-green-700' : lastOperation.status === 'ERROR' ? 'bg-red-900/30 border border-red-700' : 'bg-blue-900/30 border border-blue-700'}`}>
            <div className="flex items-center gap-2 mb-1">
              {lastOperation.status === 'STARTED' && <span className="text-blue-400">⏳</span>}
              {lastOperation.status === 'SUCCESS' && <span className="text-green-400">✅</span>}
              {lastOperation.status === 'ERROR' && <span className="text-red-400">❌</span>}
              {lastOperation.status === 'FAILED' && <span className="text-orange-400">⚠️</span>}
              <span className="text-sm font-semibold">
                Última Operação: {lastOperation.type} - {lastOperation.status}
              </span>
            </div>
            <div className="text-xs space-y-1">
              <div><span className="text-slate-400">Mensagem:</span> <span className={lastOperation.status === 'SUCCESS' ? 'text-green-300' : lastOperation.status === 'ERROR' ? 'text-red-300' : 'text-blue-300'}>{lastOperation.message}</span></div>
              {lastOperation.details && (
                <div><span className="text-slate-400">Detalhes:</span> <span className="text-yellow-300">{lastOperation.details}</span></div>
              )}
              <div><span className="text-slate-400">Horário:</span> <span className="text-slate-300">{lastOperation.timestamp}</span></div>
            </div>
          </div>
        )}
      </div>

      {/* Form */}
      <div className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-900/30 border border-red-700 rounded-md flex items-start">
              <AlertCircle className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome */}
            <div className="md:col-span-2">
              <Input
                label="Nome *"
                value={client.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Nome completo ou empresa"
                required
              />
            </div>

            {/* Email e Telefone */}
            <div>
              <Input
                label="Email"
                type="email"
                value={client.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="email@exemplo.com"
              />
            </div>

            <div>
              <Input
                label="Telefone"
                value={client.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="(00) 00000-0000"
              />
            </div>

            {/* Endereço - Cidade */}
            <div>
              <Input
                label="Cidade"
                value={client.city}
                onChange={(e) => handleChange('city', e.target.value)}
                placeholder="Cidade"
              />
            </div>

            {/* Endereço - Bairro */}
            <div>
              <Input
                label="Bairro"
                value={client.neighborhood}
                onChange={(e) => handleChange('neighborhood', e.target.value)}
                placeholder="Bairro"
              />
            </div>

            {/* Endereço - Rua */}
            <div className="md:col-span-2">
              <Input
                label="Rua"
                value={client.street}
                onChange={(e) => handleChange('street', e.target.value)}
                placeholder="Nome da rua, avenida, etc."
              />
            </div>

            {/* Endereço - Número e Complemento */}
            <div>
              <Input
                label="Número"
                value={client.number}
                onChange={(e) => handleChange('number', e.target.value)}
                placeholder="123"
              />
            </div>

            <div>
              <Input
                label="Complemento (opcional)"
                value={client.complement}
                onChange={(e) => handleChange('complement', e.target.value)}
                placeholder="Apto, bloco, etc."
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-700">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/admin/clientes')}
              disabled={saving}
            >
              Cancelar
            </Button>
            <Button type="submit" loading={saving}>
              <Save className="mr-2 h-4 w-4" />
              {isEditing ? 'Atualizar' : 'Criar'}
            </Button>
          </div>
        </form>
      </div>

      {/* Instructions */}
      <div className="bg-blue-900/20 border border-blue-500/50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-blue-400 mb-2">📱 Como testar no iPhone:</h3>
        <ol className="text-sm text-blue-300 space-y-1 list-decimal list-inside">
          <li>Faça login em <strong>/admin/login</strong></li>
          <li>Volte para <strong>/admin/clientes/novo</strong></li>
          <li>Veja o painel <strong>🔧 STATUS & DEBUG</strong> acima</li>
          <li>Preencha: Nome*, Cidade*, Rua* (obrigatórios)</li>
          <li>Clique em "Criar"</li>
          <li>Observe o painel - ele mostrará o que aconteceu</li>
        </ol>
      </div>
    </div>
  )
}
