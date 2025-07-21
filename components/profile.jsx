// src/components/ProfilePage.js
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { authService } from '@/components/lib/auth';
import { useNavigate } from 'react-router-dom';

export function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('No token found. Please log in.');
        setIsLoading(false);
        navigate('/login');
        return;
      }

      try {
        const result = await authService.getProfile(token);
        if (result.error) {
          setError(result.error);
          navigate('/login');
        } else {
          setUserData(result.user);
        }
      } catch (err) {
        setError('An unexpected error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="inline-block text-2xl"
        >
          🔄
        </motion.span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="p-3 bg-red-100 text-red-700 rounded-lg text-sm"
        >
          {error}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">User Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="text-gray-900">{userData?.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="text-gray-900">{userData?.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <p className="text-gray-900">{userData?.phone}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <p className="text-gray-900">{userData?.role}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Custom ID</label>
            <p className="text-gray-900">{userData?.customID}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Referral Link</label>
            <p className="text-blue-600 hover:underline">
              <a href={userData?.referralLink} target="_blank" rel="noopener noreferrer">
                {userData?.referralLink}
              </a>
            </p>
          </div>
          {userData?.profileImage && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Image</label>
              <img
                src={`https://your-api-endpoint/images/${userData.profileImage}`}
                alt="Profile"
                className="w-24 h-24 rounded-full mt-2"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Created At</label>
            <p className="text-gray-900">{new Date(userData?.createdAt).toLocaleDateString()}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Updated At</label>
            <p className="text-gray-900">{new Date(userData?.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem('authToken');
            navigate('/login');
          }}
          className="mt-6 w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
        >
          Logout
        </button>
      </motion.div>
    </div>
  );
}