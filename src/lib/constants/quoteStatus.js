export const QUOTE_STATUS = [
  { value: 'negociação', label: 'Negociação', color: 'bg-amber-500/20 text-amber-400 border border-amber-500/50' },
  { value: 'aprovado', label: 'Aprovado', color: 'bg-teal-500/20 text-teal-400 border border-teal-500/50' },
  { value: 'execução', label: 'Em Execução', color: 'bg-blue-500/20 text-blue-400 border border-blue-500/50' },
  { value: 'finalizado', label: 'Finalizado', color: 'bg-slate-500/20 text-slate-300 border border-slate-500/50' },
  { value: 'perdido', label: 'Perdido', color: 'bg-red-500/20 text-red-400 border border-red-500/50' },
]

export const getStatusConfig = (status) => {
  return QUOTE_STATUS.find(s => s.value === status) || QUOTE_STATUS[0]
}

export const STATUS_OPTIONS = QUOTE_STATUS.map(s => ({ value: s.value, label: s.label }))
