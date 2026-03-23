import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth.jsx'
import { ProtectedRoute } from './components/layout/ProtectedRoute.jsx'
import { AdminLayout } from './components/layout/AdminLayout.jsx'

// Pages
import { Login } from './pages/admin/Login.jsx'
import { Dashboard } from './pages/admin/Dashboard.jsx'
import { Quotes } from './pages/admin/Quotes.jsx'
import { QuoteDetail } from './pages/admin/QuoteDetail.jsx'

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/admin/login" element={<Login />} />

        {/* Protected admin routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Navigate to="/admin/dashboard" replace />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/orcamentos"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Quotes />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/orcamentos/:id"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <QuoteDetail />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route path="/admin/clientes" element={
          <ProtectedRoute>
            <AdminLayout>
              <div className="p-8">
                <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
                <p className="text-gray-600 mt-2">Página de clientes - em desenvolvimento</p>
              </div>
            </AdminLayout>
          </ProtectedRoute>
        } />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
