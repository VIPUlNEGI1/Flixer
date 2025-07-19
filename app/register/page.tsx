// app/register/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function RegisterPage() {
  const [isOpen, setIsOpen] = useState(false)

  // Handle popup state with URL
  useEffect(() => {
    const handlePopstate = () => {
      setIsOpen(window.location.pathname === '/register')
    }

    handlePopstate() // Initial check
    window.addEventListener('popstate', handlePopstate)
    
    return () => window.removeEventListener('popstate', handlePopstate)
  }, [])

  const togglePopup = () => {
    if (isOpen) {
      window.history.back()
    } else {
      window.history.pushState(null, '', '/register')
    }
    setIsOpen(!isOpen)
  }

  if (typeof window === 'undefined') return null

  return (
    <>
      {/* Your existing register page content (hidden when popup is open) */}
      <div className={isOpen ? 'hidden' : ''}>
        {/* Your original register page content goes here */}
      </div>

      {/* Popup overlay and form */}
      {isOpen && createPortal(
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
            <button 
              onClick={togglePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Create Account</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Create a password"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </form>
              
              <div className="mt-4 text-center text-sm">
                Already have an account? <button className="text-blue-600">Sign in</button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}