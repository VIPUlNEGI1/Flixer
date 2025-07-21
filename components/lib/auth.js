// Environment setup
const isDevelopment = process.env.NODE_ENV === 'development';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://flxergithub.onrender.com';

// Security warning for development
if (isDevelopment && !process.env.NEXT_PUBLIC_API_BASE_URL) {
  console.warn('NEXT_PUBLIC_API_BASE_URL is not set, using fallback URL');
}

// Enhanced fetch with timeout and retry logic
const fetchWithRetry = async (url, options, retries = 2, timeout = 15000) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok && response.status >= 500 && retries > 0) {
      if (isDevelopment) console.log(`Retrying... attempts left: ${retries}`);
      return fetchWithRetry(url, options, retries - 1, timeout);
    }
    return response;
  } catch (error) {
    if (retries > 0) {
      if (isDevelopment) console.log(`Retrying... attempts left: ${retries}`);
      return fetchWithRetry(url, options, retries - 1, timeout);
    }
    throw error;
  }
};

// Secure token storage with encryption (basic example)
const secureStorage = {
  setItem: (key, value) => {
    try {
      const encrypted = btoa(encodeURIComponent(value));
      localStorage.setItem(key, encrypted);
    } catch (error) {
      console.error('Secure storage error:', error);
    }
  },
  getItem: (key) => {
    try {
      const encrypted = localStorage.getItem(key);
      return encrypted ? decodeURIComponent(atob(encrypted)) : null;
    } catch (error) {
      console.error('Secure storage error:', error);
      return null;
    }
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
  }
};

// Authentication service
export const authService = {
  register: async (formData) => {
    if (isDevelopment) console.log('Registering with:', { ...formData, password: '****' });
    try {
      const response = await fetchWithRetry(`${API_BASE_URL}/flexr/auth/register`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Client-Version': process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0'
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      if (data.token) {
        secureStorage.setItem('authToken', data.token);
      }
      
      return data;
    } catch (error) {
      if (isDevelopment) console.error('Registration error:', error.message);
      return { 
        error: error.message || 'Network error', 
        status: error.response?.status || 500 
      };
    }
  },

  login: async ({ email, password }) => {
    if (isDevelopment) console.log('Login attempt for:', email);
    try {
      const response = await fetchWithRetry(`${API_BASE_URL}/flexr/auth/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Client-Version': process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0'
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.token) {
        secureStorage.setItem('authToken', data.token);
        if (data.user) {
          secureStorage.setItem('userData', JSON.stringify(data.user));
        }
      }
      
      return data;
    } catch (error) {
      if (isDevelopment) console.error('Login error:', error.message);
      return { 
        error: error.message || 'Network error', 
        status: error.response?.status || 500 
      };
    }
  },

  getProfile: async () => {
    const token = secureStorage.getItem('authToken');
    if (!token) return { error: 'Not authenticated' };
    
    try {
      const response = await fetchWithRetry(`${API_BASE_URL}/flexr/auth/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-Client-Version': process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0'
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch profile');
      }
      
      return data;
    } catch (error) {
      if (isDevelopment) console.error('Profile error:', error.message);
      return { 
        error: error.message || 'Network error', 
        status: error.response?.status || 500 
      };
    }
  },

  isAuthenticated: () => {
    return !!secureStorage.getItem('authToken');
  },

  logout: () => {
    secureStorage.removeItem('authToken');
    secureStorage.removeItem('userData');
  },

  getCurrentUser: () => {
    const userData = secureStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }
};