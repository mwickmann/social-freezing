'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface AuthFormProps {
  mode: 'signup' | 'login'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setError('') 

  const body =
    mode === 'signup'
      ? { email, password, name }
      : { email, password }

  const endpoint = mode === 'signup' ? '/api/users' : '/api/login'

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json()

  if (!res.ok) {
    setError(data.error || 'Noe gikk galt')
    return
  }

  localStorage.setItem('userId', data.id)
  router.push(`/users/${data.id}`) 
}

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl text-center">
        {mode === 'signup' ? 'Opprett konto' : 'Logg inn'}
      </h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {mode === 'signup' && (
        <input
          type="text"
          placeholder="Navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
      )}

      <input
        type="email"
        placeholder="E-post"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded"
      />

      <input
        type="password"
        placeholder="Passord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-400 text-white py-2 rounded-full hover:bg-blue-600 transition"
      >
        {mode === 'signup' ? 'Registrer deg' : 'Logg inn'}
      </button>

      <div className="mt-4 text-center text-sm text-gray-600">
        {mode === 'signup' ? (
          <>
            Allerede bruker?{' '}
            <a href="/login" className="text-blue-400 hover:underline">
              Logg inn
            </a>
          </>
        ) : (
          <>
            Har du ikke en konto?{' '}
            <a href="/signup" className="text-blue-400 hover:underline">
              Registrer deg
            </a>
          </>
        )}
      </div>
    </form>
  )
}
