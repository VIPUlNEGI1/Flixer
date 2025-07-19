import { useState, useEffect } from "react"

// Mock User type (replace with your actual User type from backend)
interface User {
  id: string
  name?: string
  email?: string
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Mock authentication functions (replace with your backend API calls)
  const login = async (credentials: { email: string; password: string }) => {
    try {
      // Simulate API call
      const mockUser = { id: "1", name: "John Doe", email: credentials.email }
      localStorage.setItem("user", JSON.stringify(mockUser))
      setUser(mockUser)
      setIsAuthenticated(true)
    } catch (error) {
      console.error("Login failed:", error)
      setIsAuthenticated(false)
      setUser(null)
    }
  }

  const register = async (data: { name: string; email: string; password: string }) => {
    try {
      // Simulate API call
      const mockUser = { id: "1", name: data.name, email: data.email }
      localStorage.setItem("user", JSON.stringify(mockUser))
      setUser(mockUser)
      setIsAuthenticated(true)
    } catch (error) {
      console.error("Registration failed:", error)
      setIsAuthenticated(false)
      setUser(null)
    }
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setIsAuthenticated(false)
  }

  // Simulate checking auth state from backend
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const mockUser = localStorage.getItem("user")
        if (mockUser) {
          setUser(JSON.parse(mockUser))
          setIsAuthenticated(true)
        }
      } catch (error) {
        setIsAuthenticated(false)
        setUser(null)
      }
    }
    checkAuth()
  }, [])

  return { user, isAuthenticated, login, register, logout }
}