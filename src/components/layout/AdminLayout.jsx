import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  FileText,
  Users,
  Menu,
  X
} from 'lucide-react'
import { useAuth } from '../../hooks/useAuth.jsx'
import { FullScreenMenu } from './FullScreenMenu.jsx'

export const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { user } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Orçamentos', href: '/admin/orcamentos', icon: FileText },
    { name: 'Clientes', href: '/admin/clientes', icon: Users },
  ]

  const userEmail = user?.email || 'usuário@email.com'
  const userName = userEmail.split('@')[0]

  return (
    <div className="h-screen flex bg-slate-900 min-h-screen">
      {/* Sidebar mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-slate-800 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 flex flex-col w-64 bg-slate-800">
            <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
              <span className="text-xl font-bold text-teal-400">LP Tecnologia</span>
              <button onClick={() => setSidebarOpen(false)} className="text-slate-300 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 px-4 py-4 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                const active = location.pathname === item.href || location.pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      active
                        ? 'bg-teal-600/20 text-teal-400 border-r-2 border-teal-400'
                        : 'text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Sidebar desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 bg-slate-800 border-r border-slate-700">
          <div className="flex items-center h-16 px-4 border-b border-slate-700">
            <span className="text-xl font-bold text-teal-400">LP Tecnologia</span>
          </div>
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const active = location.pathname === item.href || location.pathname.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    active
                      ? 'bg-teal-600/20 text-teal-400 border-r-2 border-teal-400'
                      : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-slate-800 shadow-sm border-b border-slate-700">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-slate-300 hover:text-white"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* User menu trigger */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 text-sm text-slate-300 hover:text-white focus:outline-none"
                aria-label="Menu do usuário"
              >
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <span className="text-white font-medium text-sm">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="hidden md:block">{userName}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-900">
          {children}
        </main>
      </div>

      {/* Full Screen Menu Overlay */}
      <FullScreenMenu isOpen={userMenuOpen} onClose={() => setUserMenuOpen(false)} />
    </div>
  )
}
