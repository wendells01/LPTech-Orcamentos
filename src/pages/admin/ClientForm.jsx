import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Save, AlertCircle, Bug, Mail, Lock, User } from 'lucide-react'
import { getClient, createClient, updateClient } from '../../lib/firebase/queries'
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
      console.error('❌ Error loading client:', error)
      console.error('📋 Full error object:', JSON.stringify(error, null, 2))
      setLastOperation({
        type: 'LOAD',
        status: 'ERROR',
        message: error.message || 'Erro ao carregar cliente',
        details: error.code || 'NO_CODE',
        stack: error.stack,
        timestamp: new Date().toLocaleTimeString()
      })
      alert(`Erro ao carregar cliente: ${error.message || error.code}`)
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
        payload: { ...client },
        timestamp: new Date().toLocaleTimeString()
      })

      // Create AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout
      const result = await (isEditing ? updateClient(id, client, controller.signal) : createClient(client, controller.signal))
      clearTimeout(timeoutId);
      console.log('✅ Save result:', result)

      if (isEditing) {
        setLastOperation({
          type: 'SAVE',
          status: 'SUCCESS',
          message: `Cliente "${client.name}" atualizado com sucesso!`,
          details: `ID: ${result.id}`,
          response: result,
          timestamp: new Date().toLocaleTimeString()
        })
        alert('✅ Cliente atualizado com sucesso!')
      } else {
        setLastOperation({
          type: 'SAVE',
          status: 'SUCCESS',
          message: `Cliente "${client.name}" criado com sucesso!`,
          details: `ID: ${result.id}\nColeção: quote_clients`,
          response: result,
          timestamp: new Date().toLocaleTimeString()
        })
        alert(`✅ Cliente "${client.name}" criado com sucesso!`)
      }
      setTimeout(() => navigate('/admin/clientes'), 1500)
    } catch (error) {
      console.error('❌ Save error:', error)
      console.error('📋 Full error object:', JSON.stringify(error, null, 2))
      const errorMsg = error?.code || error?.message || 'Erro desconhecido'
      const details = error?.code ? `Código: ${error.code}` : `Mensagem: ${error.message}`
      const stack = error.stack || undefined
      setLastOperation({
        type: 'SAVE',
        status: 'ERROR',
        message: errorMsg,
        details,
        stack,
        timestamp: new Date().toLocaleTimeString()
      })
      alert(`❌ Erro ao salvar cliente: ${errorMsg}`)
      // Mostra erro específico de autenticação
      if (error?.code === 'permission-denied') {
        alert('🔴 ERRO DE PERMISSÃO: Verifique:\n1. Se você está logado\n2. Se as regras do Firebase permitem escrita\n3. Se sua sessão não expirou')
      } else if (error?.code === 'unauthenticated') {
        alert('🔴 ERRO DE AUTENTICAÇÃO: Sua sessão expirou. Faça login novamente.')
      } else if (error.message?.includes('timeout') || error.message?.includes('Timeout')) {
        alert('⏱️ A operação excedeu o tempo limite. Verifique sua conexão com a internet e tente novamente.')
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
              {lastOperation.stack && (
                <div className="mt-2 pt-2 border-t border-red-700/50">
                  <div className="text-slate-400 mb-1">Stack Trace:</div>
                  <pre className="text-red-300 overflow-auto max-h-40 text-[10px] leading-tight whitespace-pre-wrap">
                    {lastOperation.stack}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Form - Premium Design com Fieldsets Organizados */}
      <div className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-900/30 border border-red-700 rounded-md flex items-start animate-fade-in">
              <AlertCircle className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-red-400 font-medium">{error}</p>
            </div>
          )}

          {/* 🔵 Dados Pessoais */}
          <fieldset className="border border-slate-700 rounded-lg p-5 space-y-4 transition-all hover:border-teal-500/50">
            <legend className="text-sm font-semibold text-teal-400 px-2 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Dados Pessoais
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              {/* Nome (obrigatório, full width) */}
              <div className="md:col-span-2">
                <label htmlFor="client-name" className="block text-sm font-medium text-slate-300 mb-2">
                  Nome / Empresa <span className="text-red-400" aria-label="obrigatório">*</span>
                </label>
                <input
                  id="client-name"
                  type="text"
                  value={client.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Nome completo ou razão social"
                  required
                  aria-required="true"
                  className="block w-full rounded-md border-slate-600 bg-slate-700 text-slate-100 shadow-sm focus:border-teal-400 focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-0 sm:text-sm transition-all placeholder:text-slate-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="client-email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  id="client-email"
                  type="email"
                  value={client.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="email@exemplo.com"
                  className="block w-full rounded-md border-slate-600 bg-slate-700 text-slate-100 shadow-sm focus:border-teal-400 focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-0 sm:text-sm transition-all placeholder:text-slate-500"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="client-phone" className="block text-sm font-medium text-slate-300 mb-2">
                  Telefone
                </label>
                <input
                  id="client-phone"
                  type="tel"
                  value={client.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="block w-full rounded-md border-slate-600 bg-slate-700 text-slate-100 shadow-sm focus:border-teal-400 focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-0 sm:text-sm transition-all placeholder:text-slate-500"
                />
              </div>
            </div>
          </fieldset>

          {/* 📍 Endereço */}
          <fieldset className="border border-slate-700 rounded-lg p-5 space-y-4 transition-all hover:border-amber-500/50">
            <legend className="text-sm font-semibold text-amber-400 px-2 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Endereço de Contato
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <p className="md:col-span-2 text-xs text-amber-300/70 flex items-center">
                <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Cidade e Rua são obrigatórios para cadastro completo
              </p>

              {/* Cidade (obrigatório) */}
              <div>
                <label htmlFor="client-city" className="block text-sm font-medium text-slate-300 mb-2">
                  Cidade <span className="text-red-400" aria-label="obrigatório">*</span>
                </label>
                <input
                  id="client-city"
                  type="text"
                  value={client.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  placeholder="Cidade"
                  required
                  aria-required="true"
                  className="block w-full rounded-md border-slate-600 bg-slate-700 text-slate-100 shadow-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-0 sm:text-sm transition-all placeholder:text-slate-500"
                />
              </div>

              {/* Bairro */}
              <div>
                <label htmlFor="client-neighborhood" className="block text-sm font-medium text-slate-300 mb-2">
                  Bairro
                </label>
                <input
                  id="client-neighborhood"
                  type="text"
                  value={client.neighborhood}
                  onChange={(e) => handleChange('neighborhood', e.target.value)}
                  placeholder="Bairro"
                  className="block w-full rounded-md border-slate-600 bg-slate-700 text-slate-100 shadow-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-0 sm:text-sm transition-all placeholder:text-slate-500"
                />
              </div>

              {/* Rua (obrigatório, full width) */}
              <div className="md:col-span-2">
                <label htmlFor="client-street" className="block text-sm font-medium text-slate-300 mb-2">
                  Rua / Avenida <span className="text-red-400" aria-label="obrigatório">*</span>
                </label>
                <input
                  id="client-street"
                  type="text"
                  value={client.street}
                  onChange={(e) => handleChange('street', e.target.value)}
                  placeholder="Nome da rua, avenida, etc."
                  required
                  aria-required="true"
                  className="block w-full rounded-md border-slate-600 bg-slate-700 text-slate-100 shadow-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-0 sm:text-sm transition-all placeholder:text-slate-500"
                />
              </div>

              {/* Número */}
              <div>
                <label htmlFor="client-number" className="block text-sm font-medium text-slate-300 mb-2">
                  Número <span className="text-red-400" aria-label="obrigatório">*</span>
                </label>
                <input
                  id="client-number"
                  type="text"
                  value={client.number}
                  onChange={(e) => handleChange('number', e.target.value)}
                  placeholder="123"
                  required
                  aria-required="true"
                  className="block w-full rounded-md border-slate-600 bg-slate-700 text-slate-100 shadow-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-0 sm:text-sm transition-all placeholder:text-slate-500"
                />
              </div>

              {/* Complemento */}
              <div>
                <label htmlFor="client-complement" className="block text-sm font-medium text-slate-300 mb-2">
                  Complemento
                </label>
                <input
                  id="client-complement"
                  type="text"
                  value={client.complement}
                  onChange={(e) => handleChange('complement', e.target.value)}
                  placeholder="Apto, bloco, sala, etc. (opcional)"
                  className="block w-full rounded-md border-slate-600 bg-slate-700 text-slate-100 shadow-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-0 sm:text-sm transition-all placeholder:text-slate-500"
                />
              </div>
            </div>
          </fieldset>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-slate-700">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/admin/clientes')}
              disabled={saving}
              className="w-full sm:w-auto order-2 sm:order-none"
            >
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancelar
            </Button>
            <Button
              type="submit"
              loading={saving}
              className="w-full sm:w-auto order-1 sm:order-none"
            >
              <Save className="mr-2 h-4 w-4" aria-hidden="true" />
              {isEditing ? 'Atualizar Cliente' : 'Criar Cliente'}
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
