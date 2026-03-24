import React from 'react'
import { Trash2 } from 'lucide-react'
import { formatCurrency } from '../../../lib/utils/formatters.js'

export const QuoteItemsSection = ({ title, items, onUpdateItem, onDeleteItem, deletingItem }) => {
  const type = title.toLowerCase() // 'serviços' ou 'materiais'

  const filteredItems = items.filter(i => i.type === type)

  if (filteredItems.length === 0) {
    return (
      <div className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
        <p className="text-sm text-slate-400 text-center py-8">
          Nenhum {title.toLowerCase()} adicionado. Clique em "Adicionar" para selecionar.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-700">
          <thead className="bg-slate-700/50">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-slate-300 uppercase">Descrição</th>
              <th className="px-3 py-2 text-center text-xs font-medium text-slate-300 uppercase w-16">Qtd</th>
              <th className="px-3 py-2 text-center text-xs font-medium text-slate-300 uppercase w-20">Un</th>
              <th className="px-3 py-2 text-right text-xs font-medium text-slate-300 uppercase w-28">Vlr Unit.</th>
              <th className="px-3 py-2 text-right text-xs font-medium text-slate-300 uppercase w-24">Total</th>
              <th className="px-3 py-2 text-right text-xs font-medium text-slate-300 uppercase w-16">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {filteredItems.map((item) => (
              <tr key={item.id} className="hover:bg-slate-700/50">
                <td className="px-3 py-2">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => onUpdateItem(item.id, 'description', e.target.value)}
                    className="w-full text-sm border-0 focus:ring-0 p-0 bg-transparent text-slate-100"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={item.quantity}
                    onChange={(e) => onUpdateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                    className="w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent text-slate-100"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="text"
                    value={item.unit || ''}
                    onChange={(e) => onUpdateItem(item.id, 'unit', e.target.value)}
                    className="w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent text-slate-100"
                  />
                </td>
                <td className="px-3 py-2">
                  <div className="flex items-center justify-end">
                    <span className="text-slate-400 mr-1">R$</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={item.unit_price}
                      onChange={(e) => onUpdateItem(item.id, 'unit_price', parseFloat(e.target.value) || 0)}
                      className="w-full text-right text-sm border-0 focus:ring-0 p-0 bg-transparent text-slate-100"
                    />
                  </div>
                </td>
                <td className="px-3 py-2 text-right text-sm font-medium text-teal-400">
                  {formatCurrency(item.total)}
                </td>
                <td className="px-3 py-2 text-right">
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    disabled={deletingItem === item.id}
                    className="text-red-400 hover:text-red-300 disabled:opacity-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-slate-700/50 font-medium">
              <td colSpan={3} className="px-3 py-2 text-right text-sm text-slate-300">
                Subtotal {title}:
              </td>
              <td colSpan={3} className="px-3 py-2 text-right text-sm font-bold text-teal-400">
                {formatCurrency(
                  items
                    .filter(i => i.type === type)
                    .reduce((sum, i) => sum + Number(i.total), 0)
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
