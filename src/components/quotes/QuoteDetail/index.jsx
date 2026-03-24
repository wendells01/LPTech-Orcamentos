import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuoteLogic } from './useQuoteLogic.jsx'
import { QuoteHeader } from './QuoteHeader.jsx'
import { QuoteInfoForm } from './QuoteInfoForm.jsx'
import { QuoteItemsSection } from './QuoteItemsSection.jsx'
import { ServiceSelectorModal } from './ServiceSelectorModal.jsx'
import { MaterialSelectorModal } from './MaterialSelectorModal.jsx'
import { QuoteSummary } from './QuoteSummary.jsx'
import { QuoteDetailErrorBoundary } from './ErrorBoundary.jsx'

export const QuoteDetail = () => {
  const navigate = useNavigate()
  const {
    // States
    loading,
    saving,
    deletingItem,
    clients,
    services,
    materials,
    quote,
    items,
    showServiceSelector,
    showMaterialSelector,
    serviceSearch,
    materialSearch,
    selectedServices,
    selectedMaterials,
    debugLogs,
    refDataError,

    // Setters
    setShowServiceSelector,
    setShowMaterialSelector,
    setServiceSearch,
    setMaterialSearch,
    setSelectedServices,
    setSelectedMaterials,

    // Handlers
    handleQuoteChange,
    handleAddServices,
    handleAddMaterials,
    handleUpdateItem,
    handleDeleteItem,
    handleSaveQuote,

    // Computed
    calculatedServices,
    calculatedMaterials,
    calculatedTotal,
    selectedClient,
    filteredServices,
    filteredMaterials,
    isNew,
  } = useQuoteLogic()

  // Error Boundary wrapper
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
        </div>
      </div>
    )
  }

  if (refDataError) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 max-w-lg">
          <div className="flex items-center gap-3 mb-4">
            <svg className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-bold text-red-400">Erro ao carregar dados</h3>
          </div>
          <p className="text-sm text-red-300 mb-4">
            Ocorreram erros ao carregar dados necessários para o orçamento:
          </p>
          <p className="text-sm text-red-400 font-mono mb-4">
            {refDataError}
          </p>
          <p className="text-sm text-slate-300 mb-4">
            Verifique sua conexão e permissões. Se o problema persistir, contate o suporte.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    )
  }

  const handleCancel = () => {
    navigate('/admin/orcamentos')
  }

  const handleToggleService = (serviceId, selected) => {
    if (selected) {
      const service = services.find(s => s.id === serviceId)
      setSelectedServices(prev => [...prev, { ...service, selected: true }])
    } else {
      setSelectedServices(prev => prev.filter(s => s.id !== serviceId))
    }
  }

  const handleToggleMaterial = (materialId, selected) => {
    if (selected) {
      const material = materials.find(m => m.id === materialId)
      setSelectedMaterials(prev => [...prev, { ...material, selected: true }])
    } else {
      setSelectedMaterials(prev => prev.filter(m => m.id !== materialId))
    }
  }

  return (
    <QuoteDetailErrorBoundary>
      <div className="space-y-6">
        <QuoteHeader
          isNew={isNew}
          saving={saving}
          onSave={handleSaveQuote}
          onCancel={handleCancel}
        />

        {/* 🔧 DEBUG PANEL - VISÍVEL NO IPHONE */}
        {debugLogs.length > 0 && (
          <div className="bg-slate-800 border-2 border-teal-500 rounded-lg p-4 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="text-base font-bold text-teal-400">🔧 DEBUG LOGS</span>
              </div>
              <button
                onClick={() => {/* clear logs controlled by component */}}
                className="text-xs text-slate-400 hover:text-white"
              >
                {debugLogs.length} registros
              </button>
            </div>
            <div className="space-y-1 max-h-64 overflow-y-auto bg-slate-900/50 p-3 rounded font-mono text-xs">
              {debugLogs.slice(-20).map((log, idx) => (
                <div key={idx} className={`flex gap-2 ${
                  log.type === 'ERROR' ? 'text-red-400' :
                  log.type === 'SUCCESS' ? 'text-green-400' :
                  log.type === 'WARN' ? 'text-amber-400' :
                  log.type === 'ITEM' ? 'text-blue-300' :
                  log.type === 'PAYLOAD' ? 'text-purple-300' :
                  'text-slate-300'
                }`}>
                  <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
                  <span className="shrink-0">{log.type}:</span>
                  <span className="text-white">{log.message}</span>
                  {log.data && (
                    <pre className="text-slate-400 overflow-auto text-[10px] leading-tight whitespace-pre-wrap">
                      {JSON.stringify(log.data, null, 2).slice(0, 300)}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <QuoteInfoForm
              quote={quote}
              clients={clients}
              onChange={handleQuoteChange}
            />

            <QuoteItemsSection
              title="Serviços"
              items={items}
              onUpdateItem={handleUpdateItem}
              onDeleteItem={handleDeleteItem}
              deletingItem={deletingItem}
            />

            <div className="flex mb-4">
              <button
                onClick={() => setShowServiceSelector(true)}
                disabled={services.length === 0}
                className={`flex-1 mr-2 ${services.length === 0 ? 'bg-slate-700 cursor-not-allowed opacity-60' : 'bg-teal-600 hover:bg-teal-700'} text-white font-medium py-2 px-4 rounded transition-colors`}
                title={services.length === 0 ? 'Cadastre pelo menos um serviço primeiro' : 'Adicionar Serviço'}
              >
                + Adicionar Serviço
              </button>
              <button
                onClick={() => setShowMaterialSelector(true)}
                disabled={materials.length === 0}
                className={`flex-1 ml-2 ${materials.length === 0 ? 'bg-slate-700 cursor-not-allowed opacity-60' : 'bg-amber-600 hover:bg-amber-700'} text-white font-medium py-2 px-4 rounded transition-colors`}
                title={materials.length === 0 ? 'Cadastre pelo menos um material primeiro' : 'Adicionar Material'}
              >
                + Adicionar Material
              </button>
            </div>

            {/* Warning messages for missing services/materials */}
            {services.length === 0 && (
              <div className="mb-4 p-3 bg-amber-500/20 border border-amber-500/50 rounded text-amber-400 text-sm">
                ⚠️ Nenhum serviço cadastrado. Cadastre serviços em <Link to="/admin/servicos" className="underline text-amber-300 hover:text-amber-200">Serviços</Link> antes de criar orçamentos.
              </div>
            )}
            {materials.length === 0 && (
              <div className="mb-4 p-3 bg-amber-500/20 border border-amber-500/50 rounded text-amber-400 text-sm">
                ⚠️ Nenhum material cadastrado. Cadastre materiais em <Link to="/admin/materiais" className="underline text-amber-300 hover:text-amber-200">Materiais</Link> antes de criar orçamentos.
              </div>
            )}

            <QuoteItemsSection
              title="Materiais"
              items={items}
              onUpdateItem={handleUpdateItem}
              onDeleteItem={handleDeleteItem}
              deletingItem={deletingItem}
            />
          </div>

          {/* Sidebar - Summary */}
          <div className="lg:col-span-1">
            <QuoteSummary
              selectedClient={selectedClient}
              calculatedServices={calculatedServices}
              calculatedMaterials={calculatedMaterials}
              calculatedTotal={calculatedTotal}
              quote={quote}
              onDiscountChange={(value) => handleQuoteChange('discount', value)}
            />
          </div>
        </div>

        {/* Service Selector Modal */}
        <ServiceSelectorModal
          isOpen={showServiceSelector}
          onClose={() => {
            setShowServiceSelector(false)
            setSelectedServices([])
            setServiceSearch('')
          }}
          services={services}
          filteredServices={filteredServices}
          selectedServices={selectedServices}
          onToggleService={handleToggleService}
          onAddServices={handleAddServices}
          search={serviceSearch}
          onSearchChange={setServiceSearch}
        />

        {/* Material Selector Modal */}
        <MaterialSelectorModal
          isOpen={showMaterialSelector}
          onClose={() => {
            setShowMaterialSelector(false)
            setSelectedMaterials([])
            setMaterialSearch('')
          }}
          materials={materials}
          filteredMaterials={filteredMaterials}
          selectedMaterials={selectedMaterials}
          onToggleMaterial={handleToggleMaterial}
          onAddMaterials={handleAddMaterials}
          search={materialSearch}
          onSearchChange={setMaterialSearch}
        />
      </div>
    </QuoteDetailErrorBoundary>
  )
}
