export const QUOTE_STATUS = [
  { value: 'negociação', label: 'Negociação', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'aprovado', label: 'Aprovado', color: 'bg-green-100 text-green-800' },
  { value: 'execução', label: 'Em Execução', color: 'bg-blue-100 text-blue-800' },
  { value: 'finalizado', label: 'Finalizado', color: 'bg-gray-100 text-gray-800' },
  { value: 'perdido', label: 'Perdido', color: 'bg-red-100 text-red-800' },
]

export const getStatusConfig = (status) => {
  return QUOTE_STATUS.find(s => s.value === status) || QUOTE_STATUS[0]
}

export const STATUS_OPTIONS = QUOTE_STATUS.map(s => ({ value: s.value, label: s.label }))
