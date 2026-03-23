import React from 'react'
import { getStatusConfig } from '../../lib/constants/quoteStatus.js'

export const StatusBadge = ({ status, size = 'md' }) => {
  const config = getStatusConfig(status)

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  }

  return (
    <span className={`inline-flex items-center font-medium rounded-full ${config.color} ${sizeStyles[size]}`}>
      {config.label}
    </span>
  )
}
