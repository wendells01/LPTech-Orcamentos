import { supabase } from './client.js'

// Clients
export const getClients = async () => {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .order('name')
  return { data, error }
}

export const getClient = async (id) => {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .eq('id', id)
    .single()
  return { data, error }
}

export const createClient = async (client) => {
  const { data, error } = await supabase
    .from('clients')
    .insert(client)
    .select()
    .single()
  return { data, error }
}

export const updateClient = async (id, client) => {
  const { data, error } = await supabase
    .from('clients')
    .update(client)
    .eq('id', id)
    .select()
    .single()
  return { data, error }
}

export const deleteClient = async (id) => {
  const { error } = await supabase
    .from('clients')
    .delete()
    .eq('id', id)
  return { error }
}

// Quotes
export const getQuotes = async (filters = {}) => {
  let query = supabase
    .from('quotes')
    .select(`
      *,
      client:clients(*)
    `)
    .order('created_at', { ascending: false })

  if (filters.status && filters.status.length > 0) {
    query = query.in('status', filters.status)
  }

  if (filters.search) {
    query = query.or(`description.ilike.%${filters.search}%,client.name.ilike.%${filters.search}%`)
  }

  const { data, error } = await query
  return { data, error }
}

export const getQuote = async (id) => {
  const { data, error } = await supabase
    .from('quotes')
    .select(`
      *,
      client:clients(*),
      items:quote_items(*)
    `)
    .eq('id', id)
    .single()
  return { data, error }
}

export const createQuote = async (quote) => {
  const { data, error } = await supabase
    .from('quotes')
    .insert([quote])
    .select()
    .single()
  return { data, error }
}

export const updateQuote = async (id, quote) => {
  const { data, error } = await supabase
    .from('quotes')
    .update(quote)
    .eq('id', id)
    .select()
    .single()
  return { data, error }
}

export const deleteQuote = async (id) => {
  const { error } = await supabase
    .from('quotes')
    .delete()
    .eq('id', id)
  return { error }
}

// Quote Items
export const getQuoteItems = async (quoteId) => {
  const { data, error } = await supabase
    .from('quote_items')
    .select('*')
    .eq('quote_id', quoteId)
    .order('display_order')
    .order('created_at')
  return { data, error }
}

export const createQuoteItem = async (item) => {
  const { data, error } = await supabase
    .from('quote_items')
    .insert([item])
    .select()
    .single()
  return { data, error }
}

export const updateQuoteItem = async (id, item) => {
  const { data, error } = await supabase
    .from('quote_items')
    .update(item)
    .eq('id', id)
    .select()
    .single()
  return { data, error }
}

export const deleteQuoteItem = async (id) => {
  const { error } = await supabase
    .from('quote_items')
    .delete()
    .eq('id', id)
  return { error }
}

export const reorderQuoteItems = async (quoteId, items) => {
  // Atualiza display_order de múltiplos itens
  const updates = items.map(item =>
    supabase
      .from('quote_items')
      .update({ display_order: item.display_order })
      .eq('id', item.id)
  )
  const results = await Promise.all(updates)
  return results
}
