import React from 'react'
import { Search } from 'lucide-react'
import { QUOTE_STATUS, STATUS_OPTIONS } from '../../lib/constants/quoteStatus.js'

export const QuoteFilters = ({ search, onSearchChange, selectedStatuses, onStatusChange }) => {
  const handleStatusToggle = (statusValue) => {
    if (selectedStatuses.includes(statusValue)) {
      onStatusChange(selectedStatuses.filter(s => s !== statusValue))
    } else {
      onStatusChange([...selectedStatuses, statusValue])
    }
  }

  const clearFilters = () => {
    onSearchChange('')
    onStatusChange([])
  }

  const hasActiveFilters = search || selectedStatuses.length > 0

  return (
    <div className="bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-700 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar por descrição ou cliente..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-slate-600 rounded-md bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap gap-2">
          {QUOTE_STATUS.map((status) => {
            const isSelected = selectedStatuses.includes(status.value)
            return (
              <button
                key={status.value}
                onClick={() => handleStatusToggle(status.value)}
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isSelected
                    ? status.color
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {status.label}
              </button>
            )
          })}

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium text-slate-300 bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Active filters summary */}
      {hasActiveFilters && (
        <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
          <span>Filtros ativos:</span>
          {search && (
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-700 text-slate-300">
              "{search}"
            </span>
          )}
          {selectedStatuses.map(status => {
            const statusConfig = QUOTE_STATUS.find(s => s.value === status)
            return (
              <span key={status} className={`inline-flex items-center px-2 py-0.5 rounded ${statusConfig.color}`}>
                {statusConfig.label}
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}
