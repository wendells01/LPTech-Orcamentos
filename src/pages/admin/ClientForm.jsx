import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Save } from 'lucide-react'
import { getClient, createClient, updateClient } from '../../lib/firebase/queries.js'
import { Button } from '../../components/common/Button.jsx'
import { Input, Textarea } from '../../components/common/Input.jsx'
import { Spinner } from '../../components/common/Spinner.jsx'

export const ClientForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id

  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  useEffect(() => {
    if (isEditing) {
      loadClient()
    }
  }, [id])

  const loadClient = async () => {
    try {
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
        address: data.address || '',
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

    if (!client.name.trim()) {
      setError('O nome do cliente é obrigatório')
      return
    }

    setSaving(true)
    try {
      if (isEditing) {
        await updateClient(id, client)
        alert('Cliente atualizado com sucesso!')
      } else {
        await createClient(client)
        alert('Cliente criado com sucesso!')
      }
      navigate('/admin/clientes')
    } catch (error) {
      console.error('Save error:', error)
      alert(`Erro ao salvar cliente: ${error.message}`)
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
          {error && (
            <div className="p-4 bg-red-900/30 border border-red-700 rounded-md">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Input
                label="Nome *"
                value={client.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Nome completo ou empresa"
                required
              />
            </div>

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

            <div className="md:col-span-2">
              <Textarea
                label="Endereço"
                value={client.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="Endereço completo"
                rows={3}
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
