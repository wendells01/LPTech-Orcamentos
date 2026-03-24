import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Save } from 'lucide-react'
import { Button } from '../../common/Button.jsx'

export const QuoteHeader = ({ isNew, saving, onSave, onCancel }) => {
  const navigate = useNavigate()

  return (
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
            {isNew ? 'Novo Orçamento' : 'Editar Orçamento'}
          </h1>
          <p className="text-slate-400 mt-1">
            {isNew ? 'Preencha as informações abaixo' : 'Edite as informações do orçamento'}
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button onClick={onSave} loading={saving}>
          <Save className="mr-2 h-4 w-4" />
          Salvar
        </Button>
      </div>
    </div>
  )
}
