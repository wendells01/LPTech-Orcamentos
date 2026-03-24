import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Save } from 'lucide-react'
import { getMaterial, createMaterial, updateMaterial } from '../../lib/firebase/queries'
import { Button } from '../../components/common/Button.jsx'
import { Input, Textarea } from '../../components/common/Input.jsx'
import { Spinner } from '../../components/common/Spinner.jsx'

export const MaterialForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id

  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  const [material, setMaterial] = useState({
    name: '',
    description: '',
    unit_price: 0,
    unit: '',
  })

  useEffect(() => {
    if (isEditing) {
      loadMaterial()
    }
  }, [id])

  const loadMaterial = async () => {
    try {
      const data = await getMaterial(id)
      if (!data) {
        alert('Material não encontrado')
        navigate('/admin/materiais')
        return
      }
      setMaterial({
        name: data.name || '',
        description: data.description || '',
        unit_price: Number(data.unit_price) || 0,
        unit: data.unit || '',
      })
    } catch (error) {
      console.error('Error loading material:', error)
      alert('Erro ao carregar material')
      navigate('/admin/materiais')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field, value) => {
    setMaterial(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!material.name.trim()) {
      setError('O nome do material é obrigatório')
      return
    }

    if (material.unit_price <= 0) {
      setError('O valor unitário deve ser maior que zero')
      return
    }

    setSaving(true)
    try {
      const materialData = {
        ...material,
        unit_price: Number(material.unit_price),
      }

      if (isEditing) {
        await updateMaterial(id, materialData)
        alert('Material atualizado com sucesso!')
      } else {
        await createMaterial(materialData)
        alert('Material criado com sucesso!')
      }
      navigate('/admin/materiais')
    } catch (error) {
      console.error('Save error:', error)
      alert(`Erro ao salvar material: ${error.message}`)
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
            to="/admin/materiais"
            className="text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">
              {isEditing ? 'Editar Material' : 'Novo Material'}
            </h1>
            <p className="text-slate-400 mt-1">
              {isEditing ? 'Atualize as informações do material' : 'Cadastre um novo material'}
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
                label="Nome do Material *"
                value={material.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Ex: Tijolo cerâmico"
                required
              />
            </div>

            <div className="md:col-span-2">
              <Textarea
                label="Descrição"
                value={material.description}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="Descrição detalhada do material..."
                rows={3}
              />
            </div>

            <div>
              <Input
                label="Valor Unitário *"
                type="number"
                step="0.01"
                min="0"
                value={material.unit_price || ''}
                onChange={(e) => handleChange('unit_price', e.target.value)}
                placeholder="0.00"
                prefix="R$"
                required
              />
            </div>

            <div>
              <Input
                label="Unidade"
                value={material.unit}
                onChange={(e) => handleChange('unit', e.target.value)}
                placeholder="Ex: un, m², kg, etc."
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-700">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/admin/materiais')}
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
