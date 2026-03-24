import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuoteLogic } from './useQuoteLogic.jsx'
import { QuoteHeader } from './QuoteHeader.jsx'
import { QuoteInfoForm } from './QuoteInfoForm.jsx'
import { QuoteItemsSection } from './QuoteItemsSection.jsx'
import { ServiceSelectorModal } from './ServiceSelectorModal.jsx'
import { MaterialSelectorModal } from './MaterialSelectorModal.jsx'
import { QuoteSummary } from './QuoteSummary.jsx'

export const QuoteDetail = () => {
  const navigate = useNavigate()
  const {
    // States
    loading,
    saving,
    deletingItem,
    clients,
    quote,
    items,
    showServiceSelector,
    showMaterialSelector,
    serviceSearch,
    materialSearch,
    selectedServices,
    selectedMaterials,

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
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
    <div className="space-y-6">
      <QuoteHeader
        isNew={isNew}
        saving={saving}
        onSave={handleSaveQuote}
        onCancel={handleCancel}
      />

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
  )
}
