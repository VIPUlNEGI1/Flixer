"use client"
 
import { useState, useEffect } from "react"
import { User } from "next-auth"
import { useAuth } from "../services/useAuth"

interface UserProfileProps {}

export default function UserProfile({}: UserProfileProps) {
  const { user, isAuthenticated, logout } = useAuth()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isAuthenticated && user) {
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [isAuthenticated, user])

  if (loading) {
    return <div className="p-4 text-gray-600">Loading...</div>
  }

  if (!isAuthenticated || !user) {
    return null
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">User Profile</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {user.name || "N/A"}</p>
        <p><strong>Email:</strong> {user.email || "N/A"}</p>
        <button
          onClick={logout}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  )
}