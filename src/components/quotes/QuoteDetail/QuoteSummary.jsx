import React from 'react'
import { Building2, Calendar } from 'lucide-react'
import { formatCurrency, formatDate } from '../../../lib/utils/formatters.js'

export const QuoteSummary = ({ selectedClient, calculatedServices, calculatedMaterials, calculatedTotal, quote, onDiscountChange }) => {
  return (
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
            onChange={(e) => onDiscountChange && onDiscountChange(parseFloat(e.target.value) || 0)}
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
  )
}
