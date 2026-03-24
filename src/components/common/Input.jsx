import React from 'react'

export const Input = ({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s/g, '-')

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-300 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`block w-full rounded-md border-slate-600 bg-slate-700 text-slate-100 shadow-sm focus:border-teal-400 focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-0 sm:text-sm transition-all ${
          error ? 'border-red-500 text-red-400 focus:border-red-400 focus:ring-red-500/50' : ''
        }`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-slate-400">{helperText}</p>
      )}
    </div>
  )
}

export const Textarea = ({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s/g, '-')

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-300 mb-1"
        >
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={`block w-full rounded-md border-slate-600 bg-slate-700 text-slate-100 shadow-sm focus:border-teal-400 focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-0 sm:text-sm transition-all ${
          error ? 'border-red-500 text-red-400 focus:border-red-400 focus:ring-red-500/50' : ''
        }`}
        rows={3}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-slate-400">{helperText}</p>
      )}
    </div>
  )
}

export const Select = ({
  label,
  error,
  helperText,
  children,
  className = '',
  id,
  ...props
}) => {
  const selectId = id || label?.toLowerCase().replace(/\s/g, '-')

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-slate-300 mb-1"
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`block w-full rounded-md border-slate-600 bg-slate-700 text-slate-100 shadow-sm focus:border-teal-400 focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-0 sm:text-sm transition-all ${
          error ? 'border-red-500 text-red-400 focus:border-red-400 focus:ring-red-500/50' : ''
        }`}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-slate-400">{helperText}</p>
      )}
    </div>
  )
}
