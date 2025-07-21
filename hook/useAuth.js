// src/lib/auth.js
const isDevelopment = process.env.NODE_ENV === 'development';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://flxergithub.onrender.com';

export const authService = {
  register: async (formData) => {
    if (isDevelopment) console.log('Registering with:', formData);
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        timeout: 30000,
      });
      const data = await response.json();
      if (!response.ok) {
        if (isDevelopment) console.error('Register error:', data.message, 'Status:', response.status);
        return { error: data.message || 'Registration failed' };
      }
      if (isDevelopment) console.log('Register success:', data);
      return data;
    } catch (error) {
      if (isDevelopment) console.error('Network error:', error.message);
      return { error: 'Network error or server timeout' };
    }
  },

  login: async ({ email, password }) => {
    if (isDevelopment) console.log('Logging in with email:', email);
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        timeout: 30000,
      });
      const data = await response.json();
      if (!response.ok) {
        if (isDevelopment) console.error('Login error:', data.message, 'Status:', response.status);
        return { error: data.message || 'Login failed' };
      }
      if (data.token) {
        localStorage.setItem('authToken', data.token); // Store token on success
      }
      if (isDevelopment) console.log('Login success:', data);
      return data;
    } catch (error) {
      if (isDevelopment) console.error('Network error:', error.message);
      return { error: 'Network error or server timeout' };
    }
  },

  getProfile: async (token) => {
    if (isDevelopment) console.log('Fetching profile with token:', token);
    try {
      const response = await fetch(`${API_BASE_URL}/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        timeout: 30000,
      });
      const data = await response.json();
      if (!response.ok) {
        if (isDevelopment) console.error('Profile error:', data.message, 'Status:', response.status);
        return { error: data.message || 'Failed to fetch profile' };
      }
      if (isDevelopment) console.log('Profile success:', data);
      return data;
    } catch (error) {
      if (isDevelopment) console.error('Network error:', error.message);
      return { error: 'Network error or server timeout' };
    }
  },

  isAuthenticated: () => {
    // Check if a token exists in localStorage
    return !!localStorage.getItem('authToken');
  },

  logout: () => {
    // Remove token from localStorage
    localStorage.removeItem('authToken');
  },
};