// context/AuthContext.tsx
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  isLoggedIn: boolean
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check for existing token on mount
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const login = (token: string) => {
    localStorage.setItem('token', token)
    setIsLoggedIn(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}