import React, { useEffect, useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus, Eye, Trash2, FileText } from 'lucide-react'
import { getQuotes, deleteQuote, getClients } from '../../lib/firebase/queries.js'
import { QUOTE_STATUS } from '../../lib/constants/quoteStatus.js'
import { formatCurrency, formatDate, truncateText } from '../../lib/utils/formatters.js'
import { Button } from '../../components/common/Button.jsx'
import { Spinner } from '../../components/common/Spinner.jsx'
import { QuoteFilters } from '../../components/quotes/QuoteFilters.jsx'

export const Quotes = () => {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedStatuses, setSelectedStatuses] = useState([])
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [deleting, setDeleting] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    fetchQuotes()
  }, [search, selectedStatuses])

  const fetchQuotes = async () => {
    setLoading(true)
    try {
      // Fetch quotes and clients separately
      const [quotesData, clientsData] = await Promise.all([
        getQuotes({
          status: selectedStatuses.length > 0 ? selectedStatuses : undefined,
        }),
        getClients()
      ])

      // Create a map of clients for quick lookup
      const clientsMap = {}
      clientsData.forEach(client => {
        clientsMap[client.id] = client
      })

      // Attach client data to each quote
      const quotesWithClients = quotesData.map(quote => ({
        ...quote,
        client: clientsMap[quote.client_id] || null
      }))

      // Apply search filter client-side if provided
      let filteredQuotes = quotesWithClients
      if (search) {
        const searchLower = search.toLowerCase()
        filteredQuotes = quotesWithClients.filter(q =>
          (q.description?.toLowerCase() || '').includes(searchLower) ||
          ((q.client?.name || '').toLowerCase().includes(searchLower)) ||
          ((q.client?.company_name || '').toLowerCase().includes(searchLower))
        )
      }

      setQuotes(filteredQuotes)
    } catch (error) {
      console.error('Error fetching quotes:', error)
      setQuotes([])
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (quoteId, quoteNumber) => {
    setDeleting(true)
    try {
      await deleteQuote(quoteId)
      setQuotes(quotes.filter(q => q.id !== quoteId))
      alert(`Orçamento ${quoteNumber} excluído com sucesso!`)
    } catch (error) {
      console.error('Delete error:', error)
      alert('Erro ao excluir orçamento')
    } finally {
      setDeleting(false)
      setDeleteConfirm(null)
    }
  }

  const getStatusConfig = (status) => {
    return QUOTE_STATUS.find(s => s.value === status) || QUOTE_STATUS[0]
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Orçamentos</h1>
          <p className="text-slate-400 mt-1">Gerencie todos os orçamentos da empresa</p>
        </div>
        <Link to="/admin/orcamentos/novo">
          <Button size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Novo Orçamento
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <QuoteFilters
        search={search}
        onSearchChange={setSearch}
        selectedStatuses={selectedStatuses}
        onStatusChange={setSelectedStatuses}
      />

      {/* Table */}
      <div className="bg-slate-800 shadow-sm border border-slate-700 rounded-lg overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center p-12">
            <Spinner size="lg" />
          </div>
        ) : quotes.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-slate-500" />
            <h3 className="mt-4 text-lg font-medium text-white">Nenhum orçamento encontrado</h3>
            <p className="mt-2 text-sm text-slate-400">
              {search || selectedStatuses.length > 0
                ? 'Tente ajustar os filtros de busca.'
                : 'Comece criando seu primeiro orçamento.'}
            </p>
            {!search && selectedStatuses.length === 0 && (
              <div className="mt-6">
                <Link to="/admin/orcamentos/novo">
                  <Button>
                    <Plus className="mr-2 h-5 w-5" />
                    Criar Orçamento
                  </Button>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Número
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Cliente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Descrição
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-slate-800 divide-y divide-slate-700">
                {quotes.map((quote) => {
                  const statusConfig = getStatusConfig(quote.status)
                  const clientName = quote.client?.company_name || quote.client?.name || 'Cliente não informado'

                  return (
                    <tr key={quote.id} className="hover:bg-slate-700/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">
                          {quote.quote_number}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-200">{clientName}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-200 max-w-xs truncate">
                          {truncateText(quote.description, 60)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-teal-400">
                          {formatCurrency(quote.total)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig.color}`}>
                          {statusConfig.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                        {formatDate(quote.issue_date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            to={`/admin/orcamentos/${quote.id}`}
                            className="text-teal-400 hover:text-teal-300 p-1"
                            title="Ver detalhes"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => setDeleteConfirm(quote)}
                            className="text-red-400 hover:text-red-300 p-1"
                            title="Excluir"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-slate-900 bg-opacity-75" onClick={() => setDeleteConfirm(null)}></div>
            <div className="relative bg-slate-800 rounded-lg shadow-xl max-w-md w-full z-10 p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Confirmar Exclusão
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Tem certeza que deseja excluir o orçamento <strong className="text-white">{deleteConfirm.quote_number}</strong>?<br />
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
                  onClick={() => handleDelete(deleteConfirm.id, deleteConfirm.quote_number)}
                  loading={deleting}
                  disabled={deleting}
                >
                  Excluir
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
