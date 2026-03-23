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
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar por descrição ou cliente..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
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
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.label}
              </button>
            )
          })}

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Active filters summary */}
      {hasActiveFilters && (
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
          <span>Filtros ativos:</span>
          {search && (
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-gray-100">
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
