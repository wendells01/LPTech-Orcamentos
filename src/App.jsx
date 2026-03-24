import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth.jsx'
import { ProtectedRoute } from './components/layout/ProtectedRoute.jsx'
import { AdminLayout } from './components/layout/AdminLayout.jsx'
import { Spinner } from './components/common/Spinner.jsx'

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-64">
    <Spinner size="lg" />
  </div>
)

// Lazy loaded pages
const Login = lazy(() =>
  import('./pages/admin/Login.jsx').then(module => ({ default: module.Login }))
)

const Dashboard = lazy(() =>
  import('./pages/admin/Dashboard.jsx').then(module => ({ default: module.Dashboard }))
)

// Clientes chunk
const Clients = lazy(() =>
  import('./pages/admin/Clients.jsx').then(module => ({ default: module.Clients }))
)
const ClientForm = lazy(() =>
  import('./pages/admin/ClientForm.jsx').then(module => ({ default: module.ClientForm }))
)

// Serviços chunk
const Services = lazy(() =>
  import('./pages/admin/Services.jsx').then(module => ({ default: module.Services }))
)
const ServiceForm = lazy(() =>
  import('./pages/admin/ServiceForm.jsx').then(module => ({ default: module.ServiceForm }))
)

// Materiais chunk
const Materials = lazy(() =>
  import('./pages/admin/Materials.jsx').then(module => ({ default: module.Materials }))
)
const MaterialForm = lazy(() =>
  import('./pages/admin/MaterialForm.jsx').then(module => ({ default: module.MaterialForm }))
)

// Orçamentos - Lista chunk (separado do detalhe)
const Quotes = lazy(() =>
  import('./pages/admin/Quotes.jsx').then(module => ({ default: module.Quotes }))
)

// Orçamentos - Detalhe chunk (pesado, separado)
const QuoteDetail = lazy(() =>
  import('./components/quotes/QuoteDetail/index.jsx').then(module => ({ default: module.QuoteDetail }))
)

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/admin/login" element={
          <Suspense fallback={<LoadingFallback />}>
            <Login />
          </Suspense>
        } />

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
                <Suspense fallback={<LoadingFallback />}>
                  <Dashboard />
                </Suspense>
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/orcamentos"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Suspense fallback={<LoadingFallback />}>
                  <Quotes />
                </Suspense>
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/orcamentos/novo"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Suspense fallback={<LoadingFallback />}>
                  <QuoteDetail />
                </Suspense>
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/orcamentos/:id"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Suspense fallback={<LoadingFallback />}>
                  <QuoteDetail />
                </Suspense>
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route path="/admin/clientes" element={
          <ProtectedRoute>
            <AdminLayout>
              <Suspense fallback={<LoadingFallback />}>
                <Clients />
              </Suspense>
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/clientes/novo" element={
          <ProtectedRoute>
            <AdminLayout>
              <Suspense fallback={<LoadingFallback />}>
                <ClientForm />
              </Suspense>
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/clientes/:id" element={
          <ProtectedRoute>
            <AdminLayout>
              <Suspense fallback={<LoadingFallback />}>
                <ClientForm />
              </Suspense>
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/servicos" element={
          <ProtectedRoute>
            <AdminLayout>
              <Suspense fallback={<LoadingFallback />}>
                <Services />
              </Suspense>
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/servicos/novo" element={
          <ProtectedRoute>
            <AdminLayout>
              <Suspense fallback={<LoadingFallback />}>
                <ServiceForm />
              </Suspense>
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/servicos/:id" element={
          <ProtectedRoute>
            <AdminLayout>
              <Suspense fallback={<LoadingFallback />}>
                <ServiceForm />
              </Suspense>
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/materiais" element={
          <ProtectedRoute>
            <AdminLayout>
              <Suspense fallback={<LoadingFallback />}>
                <Materials />
              </Suspense>
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/materiais/novo" element={
          <ProtectedRoute>
            <AdminLayout>
              <Suspense fallback={<LoadingFallback />}>
                <MaterialForm />
              </Suspense>
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/materiais/:id" element={
          <ProtectedRoute>
            <AdminLayout>
              <Suspense fallback={<LoadingFallback />}>
                <MaterialForm />
              </Suspense>
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
