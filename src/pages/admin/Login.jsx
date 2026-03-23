import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import { login } from '../../lib/supabase/auth.js'
import { useAuth } from '../../hooks/useAuth.js'
import { Button } from '../../components/common/Button.jsx'
import { Input } from '../../components/common/Input.jsx'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { user } = useAuth()

  // Se já autenticado, redireciona para dashboard
  if (user) {
    return <Navigate to="/admin/dashboard" replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { error } = await login(email, password)

      if (error) {
        setError(error.message)
      } else {
        navigate('/admin/dashboard')
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center">
            <LogIn className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Sistema de Orçamentos</h2>
          <p className="mt-2 text-sm text-gray-600">Faça login para acessar o painel admin</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{error}</div>
            </div>
          )}

          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="seu@email.com"
              autoComplete="email"
            />

            <Input
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <Button
            type="submit"
            loading={loading}
            disabled={loading}
            className="w-full"
            size="lg"
          >
            Entrar
          </Button>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              Use as credenciais do Supabase Auth para acessar o sistema.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
