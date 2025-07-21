// travel/app/login/login-form.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { authService } from '@/components/lib/auth';
 

const inputVariants = {
  focus: {
    scale: 1.02,
    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)',
  },
};

export function LoginForm({
  onSuccess,
  onSwitchToRegister,
}: {
  onSuccess: (token: string) => void;
  onSwitchToRegister: () => void;
}) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await authService.login({ email, password });
      if (result.error) {
        setError(result.message);
      } else {
        onSuccess(result.token!); // Assert token exists
      }
    } catch (err) {
      setError('An unexpected error occurred');
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
        Welcome Back
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <motion.input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
            'Sign In'
          )}
        </Button>
      </motion.div>

      <div className="text-center text-sm text-gray-700">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="font-medium text-blue-600 hover:underline"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}