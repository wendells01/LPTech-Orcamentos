import React from 'react'
import { Select, Textarea, Input } from '../../../components/common/Input.jsx'
import { QUOTE_STATUS, STATUS_OPTIONS } from '../../../lib/constants/quoteStatus.js'

export const QuoteInfoForm = ({ quote, clients, onChange }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700">
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
        Dados do Orçamento
      </h2>

      {clients.length === 0 && (
        <div className="mb-4 p-3 bg-amber-500/20 border border-amber-500/50 rounded text-amber-400 text-sm">
          ⚠️ Nenhum cliente cadastrado. Cadastre pelo menos um cliente antes de criar orçamentos.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <Select
            label="Cliente *"
            value={quote.client_id}
            onChange={(e) => onChange('client_id', e.target.value)}
            error={!quote.client_id && 'Cliente é obrigatório'}
            disabled={clients.length === 0}
          >
            <option value="">
              {clients.length === 0 ? 'Nenhum cliente disponível' : 'Selecione um cliente'}
            </option>
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
          onChange={(e) => onChange('description', e.target.value)}
          placeholder="Descreva o trabalho ou projeto..."
          rows={3}
        />

        <Select
          label="Status"
          value={quote.status}
          onChange={(e) => onChange('status', e.target.value)}
        >
          {STATUS_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>

        <Input
          label="Data de Emissão"
          type="date"
          value={quote.issue_date}
          onChange={(e) => onChange('issue_date', e.target.value)}
        />

        <Input
          label="Validade (opcional)"
          type="date"
          value={quote.valid_until}
          onChange={(e) => onChange('valid_until', e.target.value)}
        />

        <div className="md:col-span-2">
          <Textarea
            label="Observações"
            value={quote.notes}
            onChange={(e) => onChange('notes', e.target.value)}
            placeholder="Informações adicionais..."
            rows={2}
          />
        </div>
      </div>
    </div>
  )
}
