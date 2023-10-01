'use client'

import { login } from '@/api/services/auth/login'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function FormSignIn() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()

    setLoading(true)

    const response = await login({ email, password })

    setLoading(false)

    if (response?.status === 200) {
      router.push('/dashboard')
    }
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <form onSubmit={handleForm} className="flex w-[90%] flex-col space-y-3">
        <Input
          after={false}
          type="email"
          required
          placeholder="Type your email"
          onChange={(e) => setEmail(e.target.value)}
        >
          Email
        </Input>
        <Input
          after={false}
          type="password"
          required
          min={8}
          placeholder="Type your password"
          onChange={(e) => setPassword(e.target.value)}
        >
          Password
        </Input>
        <Button loading={loading} type="submit">
          Access
        </Button>
      </form>
      <div>
        <Link href={'/signUp'} className="text-gray-400 hover:text-gray-700">
          Do not have an account? Register
        </Link>
      </div>
    </div>
  )
}
