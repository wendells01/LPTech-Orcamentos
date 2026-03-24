import React, { useEffect, useState } from 'react'
import { getClients } from '../../lib/firebase/queries'

export const ClientSelect = ({ value, onChange, error }) => {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadClients()
  }, [])

  const loadClients = async () => {
    try {
      console.log('🔍 ClientSelect: Carregando clientes...')
      const { data: clientsData } = await getClients()
      console.log('🔍 ClientSelect: Dados recebidos:', clientsData)
      setClients(clientsData || [])
    } catch (error) {
      console.error('❌ Error loading clients:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={loading}
      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
        error ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500' : ''
      } ${loading ? 'bg-gray-100' : ''}`}
    >
      <option value="">
        {loading ? 'Carregando clientes...' : 'Selecione um cliente'}
      </option>
      {clients.map(client => (
        <option key={client.id} value={client.id}>
          {client.company_name || client.name || 'Sem nome'} {client.email && `(${client.email})`}
        </option>
      ))}
    </select>
  )
}
