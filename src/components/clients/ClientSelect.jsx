import React, { useEffect, useState } from 'react'
import { getClients } from '../../lib/supabase/queries.js'

export const ClientSelect = ({ value, onChange, error }) => {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadClients()
  }, [])

  const loadClients = async () => {
    try {
      const { data } = await getClients()
      setClients(data || [])
    } catch (error) {
      console.error('Error loading clients:', error)
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
          {client.company_name || client.name} {client.email && `(${client.email})`}
        </option>
      ))}
    </select>
  )
}
