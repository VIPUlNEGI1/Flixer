// lib/api/auth.ts
import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const authService = {
  register: async (data: { name: string; email: string; password: string }) => {
    return api.post('/register', data)
  },
  login: async (data: { email: string; password: string }) => {
    return api.post('/login', data)
  },
  // Add other auth-related API calls as needed
}