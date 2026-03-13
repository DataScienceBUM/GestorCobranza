import { createContext, useContext, useState, useCallback } from 'react'
import { authService } from '@services/authService'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [token, setToken]     = useState(() => localStorage.getItem('access_token'))
  const [loading, setLoading] = useState(false)

  const login = useCallback(async (credentials) => {
    setLoading(true)
    try {
      const { data } = await authService.login(credentials)
      localStorage.setItem('access_token', data.token)
      setToken(data.token)
      setUser(data.user)
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    await authService.logout().catch(() => {})
    localStorage.removeItem('access_token')
    setToken(null)
    setUser(null)
  }, [])

  const value = { user, token, loading, login, logout, isAuthenticated: !!token }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return ctx
}
