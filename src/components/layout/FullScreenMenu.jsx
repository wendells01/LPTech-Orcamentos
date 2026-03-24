import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  X,
  LayoutDashboard,
  FileText,
  Users,
  Plus,
  Calendar,
  Wrench,
  Package,
  UserCircle,
  CreditCard,
  LogOut
} from 'lucide-react'
import { useAuth } from '../../hooks/useAuth.jsx'

export const FullScreenMenu = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth()
  const location = useLocation()
  const userEmail = user?.email || 'usuário@email.com'
  const userName = userEmail.split('@')[0]

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const menuSections = [
    {
      title: 'Orçamentos',
      icon: FileText,
      items: [
        { name: 'Novo orçamento', href: '/admin/orcamentos/novo', icon: Plus },
        { name: 'Lista de orçamentos', href: '/admin/orcamentos', icon: FileText },
      ]
    },
    {
      title: 'Agenda',
      icon: Calendar,
      items: [
        { name: 'Novo compromisso', href: '#', icon: Plus },
        { name: 'Compromissos', href: '#', icon: Calendar },
      ]
    },
    {
      title: 'Clientes',
      icon: Users,
      items: [
        { name: 'Novo cliente', href: '/admin/clientes/novo', icon: Plus },
        { name: 'Lista de clientes', href: '/admin/clientes', icon: Users },
      ]
    },
    {
      title: 'Serviços',
      icon: Wrench,
      items: [
        { name: 'Novo serviço', href: '/admin/servicos/novo', icon: Plus },
        { name: 'Lista de serviços', href: '/admin/servicos', icon: Wrench },
      ]
    },
    {
      title: 'Materiais',
      icon: Package,
      items: [
        { name: 'Novo material', href: '/admin/materiais/novo', icon: Plus },
        { name: 'Lista de materiais', href: '/admin/materiais', icon: Package },
      ]
    },
    {
      title: 'Minha conta',
      icon: UserCircle,
      items: [
        { name: 'Meu perfil', href: '#', icon: UserCircle },
      ]
    },
    {
      title: 'Planos',
      icon: CreditCard,
      items: [
        { name: 'Ver planos', href: '#', icon: CreditCard },
      ]
    },
  ]

  const isActive = (href) => {
    if (href.startsWith('#') || href === '#') return false
    if (href === '/admin/dashboard') {
      return location.pathname === href
    }
    return location.pathname.startsWith(href)
  }

  const handleLogout = async () => {
    await logout()
    onClose()
    // Navigation is handled by ProtectedRoute redirect
  }

  const handleItemClick = (href) => {
    onClose()
    if (href === '#') {
      alert('Página em desenvolvimento')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Full screen menu */}
      <div className="absolute inset-0 flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
              <span className="text-white font-bold text-lg">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{userName}</p>
              <p className="text-xs text-slate-400 truncate max-w-[200px]">{userEmail}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-full transition-all"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu content */}
        <div className="flex-1 p-4 sm:p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {menuSections.map((section, idx) => {
              const Icon = section.icon
              return (
                <div
                  key={idx}
                  className="bg-slate-800/50 rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-xl"
                >
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-500/20 rounded-lg border border-teal-500/30">
                      <Icon className="h-5 w-5 text-teal-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{section.title}</h3>
                  </div>

                  {/* Section Items Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.items.map((item, itemIdx) => {
                      const ItemIcon = item.icon
                      const active = isActive(item.href)
                      return (
                        <Link
                          key={itemIdx}
                          to={item.href}
                          onClick={() => handleItemClick(item.href)}
                          className={`group flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 ${
                            active
                              ? 'bg-teal-500/20 border-teal-500/50 shadow-lg shadow-teal-500/20'
                              : 'bg-slate-700/30 border-slate-600/50 hover:border-teal-500/50 hover:bg-slate-700/60'
                          }`}
                        >
                          <div className={`p-2 rounded-lg transition-all ${
                            active
                              ? 'bg-teal-500/30 text-teal-300'
                              : 'bg-slate-600/50 text-slate-300 group-hover:text-teal-300 group-hover:bg-teal-500/20'
                          }`}>
                            <ItemIcon className="h-5 w-5" />
                          </div>
                          <span className={`font-medium ${
                            active ? 'text-white' : 'text-slate-200'
                          }`}>
                            {item.name}
                          </span>
                          {active && (
                            <div className="ml-auto w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                          )}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer with Logout */}
        <div className="p-4 sm:p-6 border-t border-slate-700 bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-700/30 border border-slate-600/50 hover:bg-red-500/20 hover:border-red-500/50 transition-all group"
            >
              <div className="p-2 rounded-lg bg-slate-600/50 group-hover:bg-red-500/30 transition-all">
                <LogOut className="h-5 w-5 text-slate-300 group-hover:text-red-400" />
              </div>
              <span className="font-medium text-slate-200 group-hover:text-red-400">
                Sair
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
