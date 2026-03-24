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
import { Clients } from './pages/admin/Clients.jsx'
import { ClientForm } from './pages/admin/ClientForm.jsx'
import { Services } from './pages/admin/Services.jsx'
import { ServiceForm } from './pages/admin/ServiceForm.jsx'
import { Materials } from './pages/admin/Materials.jsx'
import { MaterialForm } from './pages/admin/MaterialForm.jsx'

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
              <Clients />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/clientes/novo" element={
          <ProtectedRoute>
            <AdminLayout>
              <ClientForm />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/clientes/:id" element={
          <ProtectedRoute>
            <AdminLayout>
              <ClientForm />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/servicos" element={
          <ProtectedRoute>
            <AdminLayout>
              <Services />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/servicos/novo" element={
          <ProtectedRoute>
            <AdminLayout>
              <ServiceForm />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/servicos/:id" element={
          <ProtectedRoute>
            <AdminLayout>
              <ServiceForm />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/materiais" element={
          <ProtectedRoute>
            <AdminLayout>
              <Materials />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/materiais/novo" element={
          <ProtectedRoute>
            <AdminLayout>
              <MaterialForm />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/materiais/:id" element={
          <ProtectedRoute>
            <AdminLayout>
              <MaterialForm />
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
