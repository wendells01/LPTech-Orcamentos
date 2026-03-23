import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Users, TrendingUp, Clock, CheckCircle, AlertCircle, XCircle, Play } from 'lucide-react'
import { getQuotes, getClients } from '../../lib/firebase/queries.js'
import { QUOTE_STATUS } from '../../lib/constants/quoteStatus.js'
import { formatCurrency } from '../../lib/utils/formatters.js'
import { Spinner } from '../../components/common/Spinner.jsx'

export const Dashboard = () => {
  const [stats, setStats] = useState({
    totalQuotes: 0,
    totalClients: 0,
    quotesByStatus: {},
    recentQuotes: [],
    totalValue: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      // Buscar todos os quotes (para contar e analisar)
      const allQuotes = await getQuotes()
      const allClients = await getClients()

      // Total de orçamentos e clientes
      const totalQuotes = allQuotes.length
      const totalClients = allClients.length

      // Contagem por status
      const statusCounts = {}
      QUOTE_STATUS.forEach(s => {
        statusCounts[s.value] = 0
      })
      allQuotes.forEach(q => {
        if (statusCounts[q.status] !== undefined) {
          statusCounts[q.status]++
        }
      })

      // Valor total de orçamentos aprovados/em execução/finalizados
      const approvedQuotes = allQuotes.filter(q =>
        ['aprovado', 'execução', 'finalizado'].includes(q.status)
      )
      const totalValue = approvedQuotes.reduce((sum, q) => sum + Number(q.total), 0)

      // Últimos 5 orçamentos (já estão ordenados por createdAt desc)
      const recentQuotes = allQuotes.slice(0, 5).map(q => {
        // Buscar cliente (simplificado - idealmente já viria aninhado)
        const client = allClients.find(c => c.id === q.client_id)
        return {
          ...q,
          client: client ? { name: client.name, company_name: client.company_name } : null
        }
      })

      setStats({
        totalQuotes,
        totalClients,
        quotesByStatus: statusCounts,
        recentQuotes,
        totalValue,
      })
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'negociação': return Clock
      case 'aprovado': return CheckCircle
      case 'execução': return Play
      case 'finalizado': return CheckCircle
      case 'perdido': return XCircle
      default: return FileText
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'negociação': return 'text-yellow-600 bg-yellow-50'
      case 'aprovado': return 'text-green-600 bg-green-50'
      case 'execução': return 'text-blue-600 bg-blue-50'
      case 'finalizado': return 'text-gray-600 bg-gray-50'
      case 'perdido': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Visão geral do seu negócio</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-primary-100 rounded-lg">
              <FileText className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total de Orçamentos</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalQuotes}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Clientes Cadastrados</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalClients}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Valor Total Aprovado</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(stats.totalValue)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <AlertCircle className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Em Negociação</p>
              <p className="text-2xl font-bold text-gray-900">{stats.quotesByStatus['negociação'] || 0}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Status dos Orçamentos</h2>
          <div className="space-y-3">
            {QUOTE_STATUS.map((status) => {
              const Icon = getStatusIcon(status.value)
              return (
                <div key={status.value} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon className="h-5 w-5 mr-3" style={{ color: status.color.split(' ')[1].replace('bg-', '').replace('-100', '') }} />
                    <span className="text-sm font-medium text-gray-700">{status.label}</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{stats.quotesByStatus[status.value] || 0}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recent Quotes */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Últimos Orçamentos</h2>
            <Link to="/admin/orcamentos" className="text-sm text-primary-600 hover:text-primary-700">
              Ver todos
            </Link>
          </div>
          <div className="space-y-3">
            {stats.recentQuotes.length === 0 ? (
              <p className="text-sm text-gray-500">Nenhum orçamento cadastrado</p>
            ) : (
              stats.recentQuotes.map((quote) => {
                const statusConfig = QUOTE_STATUS.find(s => s.value === quote.status)
                const clientName = quote.client?.company_name || quote.client?.name || 'Cliente não informado'

                return (
                  <Link
                    key={quote.id}
                    to={`/admin/orcamentos/${quote.id}`}
                    className="flex items-center justify-between p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">{quote.quote_number}</p>
                      <p className="text-xs text-gray-500 truncate max-w-xs">{clientName}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">{formatCurrency(quote.total)}</p>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusConfig.color}`}>
                        {statusConfig.label}
                      </span>
                    </div>
                  </Link>
                )
              })
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            to="/admin/orcamentos"
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FileText className="h-8 w-8 text-primary-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Novo Orçamento</span>
          </Link>
          <Link
            to="/admin/clientes"
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Users className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Cadastrar Cliente</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
