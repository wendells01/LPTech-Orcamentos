import React from 'react'
import { Search, Check } from 'lucide-react'
import { Modal } from '../../../components/common/Modal.jsx'
import { Button } from '../../../components/common/Button.jsx'

export const ServiceSelectorModal = ({
  isOpen,
  onClose,
  services,
  filteredServices,
  selectedServices,
  onToggleService,
  onAddServices,
  search,
  onSearchChange
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose()
      }}
      title="Selecionar Serviços"
      size="lg"
    >
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar serviços..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-slate-600 rounded-md bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>

        <div className="max-h-96 overflow-y-auto space-y-2">
          {filteredServices.length === 0 ? (
            <p className="text-slate-400 text-center py-8">Nenhum serviço encontrado.</p>
          ) : (
            filteredServices.map(service => (
              <div
                key={service.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedServices.find(s => s.id === service.id)?.selected
                    ? 'bg-teal-600/20 border-teal-500'
                    : 'bg-slate-700 border-slate-600 hover:border-teal-500'
                }`}
                onClick={() => {
                  const isSelected = selectedServices.find(s => s.id === service.id)
                  if (isSelected) {
                    onToggleService(service.id, false)
                  } else {
                    onToggleService(service.id, true)
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">{service.name}</p>
                    {service.description && (
                      <p className="text-sm text-slate-400">{service.description}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-teal-400 font-medium">
                      R$ {Number(service.unit_price).toFixed(2)}
                      {service.unit && <span className="text-slate-400 text-sm"> / {service.unit}</span>}
                    </span>
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      selectedServices.find(s => s.id === service.id)
                        ? 'bg-teal-500 border-teal-500'
                        : 'border-slate-500'
                    }`}>
                      {selectedServices.find(s => s.id === service.id) && (
                        <Check className="h-3 w-3 text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-slate-700">
          <p className="text-sm text-slate-300">
            {selectedServices.filter(s => s.selected).length} serviço(s) selecionado(s)
          </p>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                onClose()
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={onAddServices}
              disabled={selectedServices.filter(s => s.selected).length === 0}
            >
              <Check className="mr-2 h-4 w-4" />
              Adicionar Selecionados
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
