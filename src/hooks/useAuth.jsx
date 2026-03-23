import { useState, useEffect, useContext, createContext } from 'react'
import { subscribeToAuthChanges, getSession, logout as logoutService } from '../lib/firebase/auth.js'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check initial session
    getSession().then(session => {
      setUser(session ?? null)
      setLoading(false)
    })

    // Subscribe to auth changes
    const unsubscribe = subscribeToAuthChanges((event, session) => {
      setUser(session ?? null)
    })

    return () => unsubscribe()
  }, [])

  const logout = async () => {
    const { error } = await logoutService()
    if (error) console.error('Logout error:', error)
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
