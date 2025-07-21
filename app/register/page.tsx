// travel/app/register/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import { RegisterForm } from './register';

export default function RegisterPage() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/login'); // Client-side navigation
  };

  const handleSwitchToLogin = () => {
    router.push('/login'); // Client-side navigation
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RegisterForm onSuccess={handleSuccess} onSwitchToLogin={handleSwitchToLogin} />
    </div>
  );
}