'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from 'components/ui/button';

const inputVariants = {
  focus: {
    scale: 1.02,
    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)',
  },
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export function RegisterForm({
  onSuccess,
  onSwitchToLogin,
}: {
  onSuccess: () => void;
  onSwitchToLogin: () => void;
}) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic frontend validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }
    if (!/^\+?\d{10,12}$/.test(formData.phone)) {
      setError('Phone number must be 10-12 digits');
      setIsLoading(false);
      return;
    }
    if (formData.password.length < 8 || !/[A-Z]/.test(formData.password) || !/[!@#$%^&*]/.test(formData.password)) {
      setError('Password must be at least 8 characters with an uppercase letter and a special character');
      setIsLoading(false);
      return;
    }
    if (formData.name.length < 2) {
      setError('Name must be at least 2 characters');
      setIsLoading(false);
      return;
    }

    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://flxergithub.onrender.com/flexr/auth';
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Response data:', data); // Log response for debugging
      if (!response.ok) {
        const errorMap: { [key: string]: string } = {
          'Email already exists': 'This email is already registered. Try another.',
          'Invalid phone format': 'Please enter a valid phone number (e.g., +1234567890).',
          'Password too weak': 'Password must be at least 8 characters with an uppercase letter and a special character.',
        };
        setError(errorMap[data.message] || data.message || 'Registration failed');
      } else {
        onSuccess();
      }
    } catch (err) {
      console.error('Network error:', err);
      setError('Network error or server timeout');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-center text-gray-800"
      >
        Create Account
      </motion.h2>

      {error && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="p-3 bg-red-100 text-red-700 rounded-lg text-sm"
        >
          {error}
        </motion.div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <motion.input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          required
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <motion.input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          required
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number (e.g., +1234567890)
        </label>
        <motion.input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          required
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <motion.input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          required
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>

      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md transition-all"
        >
          {isLoading ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="inline-block"
            >
              🔄
            </motion.span>
          ) : (
            'Create Account'
          )}
        </Button>
      </motion.div>

      <div className="text-center text-sm text-gray-700">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="font-medium text-blue-600 hover:underline"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}