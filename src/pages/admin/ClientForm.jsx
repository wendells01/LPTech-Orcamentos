import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Save, AlertCircle } from 'lucide-react'
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

  useEffect(() => {
    if (isEditing) {
      loadClient()
    }
  }, [id])

  const loadClient = async () => {
    try {
      if (!user) {
        setAuthError('Você não está autenticado. Faça login novamente.')
        navigate('/admin/login')
        return
      }
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
    } catch (error) {
      console.error('Error loading client:', error)
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
      setAuthError('Você precisa estar logado para cadastrar clientes')
      return
    }

    if (!client.name.trim()) {
      setError('O nome do cliente é obrigatório')
      return
    }

    // Validação adicional: pelo menos cidade e rua para endereço completo
    if (!client.city.trim() || !client.street.trim()) {
      setError('Cidade e Rua são obrigatórios para o endereço')
      return
    }

    setSaving(true)
    try {
      console.log('Attempting to save client:', client) // DEBUG
      console.log('User auth status:', user ? 'Authenticated' : 'NOT AUTHENTICATED')
      if (isEditing) {
        const result = await updateClient(id, client)
        console.log('Update result:', result)
        alert('Cliente atualizado com sucesso!')
      } else {
        const result = await createClient(client)
        console.log('Create result:', result)
        alert(`Cliente "${client.name}" criado com sucesso!`)
      }
      navigate('/admin/clientes')
    } catch (error) {
      console.error('Save error:', error)
      console.error('Error details:', JSON.stringify(error, null, 2))
      const errorMsg = error?.code || error?.message || 'Erro desconhecido'
      alert(`Erro ao salvar cliente: ${errorMsg}`)
      // Mostra erro específico de autenticação
      if (error?.code === 'permission-denied') {
        alert('ERRO DE PERMISSÃO: Verifique as regras do Firestore e se você está logado.')
      }
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

      {/* Form */}
      <div className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          {authError && (
            <div className="p-4 bg-red-900/30 border border-red-700 rounded-md flex items-start">
              <AlertCircle className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-400">{authError}</p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-900/30 border border-red-700 rounded-md">
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
    </div>
  )
}
