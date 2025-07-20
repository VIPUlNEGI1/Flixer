// app/login/login.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authService } from '@/components/lib/auth'
import { Button } from '@/components/ui/button'
import { input } from 'framer-motion/client'
 
export function LoginForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
   
	input

    try {
      const response = await authService.login(formData)
      // Store token and update auth state
      localStorage.setItem('token', response.data.token)
      // Close modal and refresh to update UI
      onClose()
      router.refresh()
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: 'Login failed. Please try again.' })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields same as before */}
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Signing in...' : 'Sign In'}
      </Button>
    </form>
  )
}