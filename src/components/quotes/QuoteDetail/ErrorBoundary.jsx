import React from 'react'

export class QuoteDetailErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo })
    console.error('🚨 QuoteDetail ERROR BOUNDARY caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-slate-900 p-4">
          <div className="bg-red-900/30 border-2 border-red-700 rounded-lg p-6 max-w-2xl w-full">
            <div className="flex items-center gap-3 mb-4">
              <svg className="h-8 w-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h2 className="text-xl font-bold text-red-400">Erro crítico no Orçamento</h2>
            </div>

            <p className="text-sm text-red-300 mb-4">
              Ocorreu um erro inesperado ao renderizar a página de orçamento. This is likely a programming error that needs to be fixed.
            </p>

            <div className="space-y-2 mb-4">
              <div className="bg-slate-800/50 p-3 rounded">
                <p className="text-xs text-slate-400 mb-1">Erro:</p>
                <p className="text-sm text-red-400 font-mono break-all">
                  {this.state.error?.toString() || 'Unknown error'}
                </p>
              </div>

              {this.state.errorInfo && (
                <div className="bg-slate-800/50 p-3 rounded">
                  <p className="text-xs text-slate-400 mb-1">Stack trace:</p>
                  <pre className="text-xs text-red-300 overflow-auto max-h-48 whitespace-pre-wrap font-mono">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => window.location.href = '/admin/orcamentos'}
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded text-sm font-medium"
              >
                Voltar para Orçamentos
              </button>
              <button
                onClick={() => window.location.reload()}
                className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium"
              >
                Recarregar Página
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
