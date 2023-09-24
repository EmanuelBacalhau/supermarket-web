'use client'

import { FormEvent, useContext, useState } from 'react'

import HeaderLogo from '@/components/HeaderLogo'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import { AuthContext } from '@/contexts/AuthContext'

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    await signIn({ email, password })
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-supermarket bg-cover bg-center">
      <div className="mx-2 flex w-[450px] flex-col space-y-3 rounded-md bg-white p-10 px-8 shadow-md">
        <HeaderLogo>Login</HeaderLogo>
        <div className="flex flex-col items-center justify-center space-y-5">
          <form
            onSubmit={handleForm}
            className="flex w-[90%] flex-col space-y-3"
          >
            <div className="flex flex-col space-y-2">
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
                placeholder="Type your password"
                onChange={(e) => setPassword(e.target.value)}
              >
                Password
              </Input>
            </div>
            <Button loading={loading} type="submit">
              Access
            </Button>
          </form>
          <div>
            <Link
              href={'/signUp'}
              className="text-gray-400 hover:text-gray-700"
            >
              Do not have an account? Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
