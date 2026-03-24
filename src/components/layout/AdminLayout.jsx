import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  FileText,
  Users,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Plus,
  Calendar,
  ClipboardList,
  Wrench,
  Package,
  UserCircle,
  CreditCard
} from 'lucide-react'
import { useAuth } from '../../hooks/useAuth.jsx'

export const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Orçamentos', href: '/admin/orcamentos', icon: FileText },
    { name: 'Clientes', href: '/admin/clientes', icon: Users },
  ]

  const userMenuSections = [
    {
      title: 'Orçamentos',
      items: [
        { name: 'Add new quote', href: '/admin/orcamentos/novo', icon: Plus },
        { name: 'Quotes list', href: '/admin/orcamentos', icon: FileText },
      ]
    },
    {
      title: 'Agenda',
      items: [
        { name: 'Add new appointment', href: '#', icon: Plus },
        { name: 'Appointments', href: '#', icon: Calendar },
      ]
    },
    {
      title: 'Clientes',
      items: [
        { name: 'Add new client', href: '/admin/clientes/novo', icon: Plus },
        { name: 'Clients list', href: '/admin/clientes', icon: Users },
      ]
    },
    {
      title: 'Serviços',
      items: [
        { name: 'Add new service', href: '/admin/servicos/novo', icon: Plus },
        { name: 'Services list', href: '/admin/servicos', icon: Wrench },
      ]
    },
    {
      title: 'Materiais',
      items: [
        { name: 'Add new material', href: '/admin/materiais/novo', icon: Plus },
        { name: 'Materials list', href: '/admin/materiais', icon: Package },
      ]
    },
    {
      title: 'Minha conta',
      items: [
        { name: 'Profile', href: '#', icon: UserCircle },
      ]
    },
    {
      title: 'Planos',
      items: [
        { name: 'View plans', href: '#', icon: CreditCard },
      ]
    },
  ]

  const isActive = (href) => {
    if (href === '/admin/dashboard') {
      return location.pathname === href
    }
    return location.pathname.startsWith(href)
  }

  const handleLogout = async () => {
    await logout()
    navigate('/admin/login')
  }

  const userEmail = user?.email || 'usuário@email.com'
  const userName = userEmail.split('@')[0]

  return (
    <div className="h-screen flex bg-slate-900">
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
                const active = isActive(item.href)
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
              const active = isActive(item.href)
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

            {/* User menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 text-sm text-slate-300 hover:text-white focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="hidden md:block">{userName}</span>
                <ChevronDown size={16} />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 py-2 bg-slate-700 rounded-md shadow-lg border border-slate-600 z-50 max-h-[80vh] overflow-y-auto">
                  <div className="px-4 py-3 border-b border-slate-600">
                    <p className="text-sm font-medium text-white">{userName}</p>
                    <p className="text-xs text-slate-400 truncate">{userEmail}</p>
                  </div>

                  {userMenuSections.map((section, idx) => (
                    <div key={idx}>
                      <p className="px-4 py-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
                        {section.title}
                      </p>
                      {section.items.map((item, itemIdx) => {
                        const Icon = item.icon
                        const active = isActive(item.href)
                        return (
                          <Link
                            key={itemIdx}
                            to={item.href}
                            onClick={() => {
                              setUserMenuOpen(false)
                              if (item.href !== '#') {
                                // Navigate normally
                              } else {
                                // Placeholder - could show alert
                                alert('Página em desenvolvimento')
                              }
                            }}
                            className={`flex items-center px-4 py-2 text-sm ${
                              active
                                ? 'bg-teal-600/20 text-teal-400'
                                : 'text-slate-300 hover:bg-slate-600'
                            }`}
                          >
                            <Icon className="mr-3 h-4 w-4" />
                            {item.name}
                          </Link>
                        )
                      })}
                    </div>
                  ))}

                  <div className="border-t border-slate-600 mt-2 pt-2">
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-slate-300 hover:bg-slate-600"
                    >
                      <LogOut className="mr-3 h-4 w-4" />
                      Sair
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-900">
          {children}
        </main>
      </div>
    </div>
  )
}
