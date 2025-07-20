// app/register/page.tsx
'use client'
import { useRouter } from 'next/navigation'
import { RegisterForm } from './register'
// import { LoginForm } from '../login/login' // You'll need to create this
import { useState } from 'react'
import { LoginForm } from '../login/page'

export default function RegisterModal() {
  const router = useRouter()
  const [showLogin, setShowLogin] = useState(false)

  const closeModal = () => router.back()
  const switchToLogin = () => setShowLogin(true)

  return (
    <div 
      onClick={closeModal}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 animate-in zoom-in-95"
      >
        {showLogin ? (
          <LoginForm onClose={closeModal} onSwitchToRegister={() => setShowLogin(false)} />
        ) : (
          <RegisterForm onSwitchToLogin={switchToLogin} />
        )}
      </div>
    </div>
  )
}