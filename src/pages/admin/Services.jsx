import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Plus, Edit2, Trash2, Wrench, Search } from 'lucide-react'
import { getServices, createService, updateService, deleteService } from '../../lib/firebase/queries.js'
import { Button } from '../../components/common/Button.jsx'
import { Input, Textarea } from '../../components/common/Input.jsx'
import { Spinner } from '../../components/common/Spinner.jsx'
import { Modal } from '../../components/common/Modal.jsx'

export const Services = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [search, setSearch] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [deleting, setDeleting] = useState(false)
  const [lastDoc, setLastDoc] = useState(null)
  const [hasMore, setHasMore] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    resetAndFetch()
  }, [search])

  const resetAndFetch = async () => {
    setLastDoc(null)
    setHasMore(true)
    await fetchServices(false)
  }

  const fetchServices = async (isLoadingMore = false) => {
    if (isLoadingMore) {
      setLoadingMore(true)
    } else {
      setLoading(true)
    }

    try {
      const result = await getServices(20, lastDoc || undefined)

      if (isLoadingMore) {
        setServices(prev => [...prev, ...result.data])
      } else {
        setServices(result.data)
      }

      setLastDoc(result.lastDoc)
      setHasMore(result.hasMore)
    } catch (error) {
      console.error('Error fetching services:', error)
      if (!isLoadingMore) {
        setServices([])
      }
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }

  const handleLoadMore = () => {
    if (hasMore && !loadingMore) {
      fetchServices(true)
    }
  }

  const handleDelete = async (serviceId, serviceName) => {
    setDeleting(true)
    try {
      await deleteService(serviceId)
      setServices(services.filter(s => s.id !== serviceId))
      alert(`Serviço "${serviceName}" excluído com sucesso!`)
    } catch (error) {
      console.error('Delete error:', error)
      alert('Erro ao excluir serviço')
    } finally {
      setDeleting(false)
      setDeleteConfirm(null)
    }
  }

  // Apply search filter
  const filteredServices = useMemo(() => {
    if (!search) return services
    const searchLower = search.toLowerCase()
    return services.filter(service =>
      (service.name?.toLowerCase() || '').includes(searchLower) ||
      (service.description?.toLowerCase() || '').includes(searchLower)
    )
  }, [services, search])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Serviços</h1>
          <p className="text-slate-400 mt-1">Gerencie os serviços oferecidos pela empresa</p>
        </div>
        <Link to="/admin/servicos/novo">
          <Button size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Novo Serviço
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Buscar por nome ou descrição..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-slate-600 rounded-md bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        />
      </div>

      {/* Table */}
      <div className="bg-slate-800 shadow-sm border border-slate-700 rounded-lg overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center p-12">
            <Spinner size="lg" />
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="text-center py-12">
            <Wrench className="mx-auto h-12 w-12 text-slate-500" />
            <h3 className="mt-4 text-lg font-medium text-white">Nenhum serviço encontrado</h3>
            <p className="mt-2 text-sm text-slate-400">
              {search
                ? 'Tente ajustar a busca.'
                : 'Comece cadastrando seu primeiro serviço.'}
            </p>
            {!search && (
              <div className="mt-6">
                <Link to="/admin/servicos/novo">
                  <Button>
                    <Plus className="mr-2 h-5 w-5" />
                    Cadastrar Serviço
                  </Button>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Descrição
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Valor Unit.
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Unidade
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-slate-800 divide-y divide-slate-700">
                {filteredServices.map((service) => (
                  <tr key={service.id} className="hover:bg-slate-700/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">
                        {service.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-300 max-w-xs truncate">
                        {service.description || '-'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-teal-400">
                        R$ {Number(service.unit_price).toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-slate-300">{service.unit || '-'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/admin/servicos/${service.id}`}
                          className="text-teal-400 hover:text-teal-300 p-1"
                          title="Editar"
                        >
                          <Edit2 className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => setDeleteConfirm(service)}
                          className="text-red-400 hover:text-red-300 p-1"
                          title="Excluir"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Load More Button */}
        {!loading && hasMore && filteredServices.length > 0 && (
          <div className="flex justify-center p-4 border-t border-slate-700">
            <Button
              variant="secondary"
              onClick={handleLoadMore}
              loading={loadingMore}
              disabled={!hasMore || loadingMore}
            >
              {loadingMore ? 'Carregando...' : 'Carregar mais'}
            </Button>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <Modal
          isOpen={!!deleteConfirm}
          onClose={() => setDeleteConfirm(null)}
          title="Confirmar Exclusão"
          size="sm"
        >
          <div className="space-y-4">
            <p className="text-slate-300">
              Tem certeza que deseja excluir o serviço <strong className="text-white">{deleteConfirm.name}</strong>?<br />
              Esta ação não pode ser desfeita.
            </p>
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={() => setDeleteConfirm(null)}
                disabled={deleting}
              >
                Cancelar
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDelete(deleteConfirm.id, deleteConfirm.name)}
                loading={deleting}
                disabled={deleting}
              >
                Excluir
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
