// travel/app/login/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import { LoginForm } from './login-form';

export default function LoginPage() {
  const router = useRouter();

  const handleSuccess = (token: string) => {
    localStorage.setItem('authToken', token);
    router.push('/profile');
  };

  const handleSwitchToRegister = () => {
    router.push('/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm onSuccess={handleSuccess} onSwitchToRegister={handleSwitchToRegister} />
    </div>
  );
}