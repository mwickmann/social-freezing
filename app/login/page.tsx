import AuthForm from '@/components/AuthForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f0f4ff] px-4 py-12">
      <AuthForm mode="login" />
    </main>
  );
}
