'use client'

import { FormEvent } from 'react'

import HeaderLogo from '@/components/HeaderLogo'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Link from 'next/link'

export default function Home() {
  const handleForm = (event: FormEvent) => {
    event.preventDefault()
    console.log('Oi dev')
  }

  return (
    <div className="bg-supermarket flex min-h-screen items-center justify-center bg-cover bg-center">
      <div className="flex w-[450px] flex-col space-y-3 rounded-md bg-white p-10 px-8 shadow-md">
        <HeaderLogo>Login</HeaderLogo>
        <div className="flex flex-col items-center justify-center space-y-5">
          <form
            onSubmit={handleForm}
            className="flex w-[90%] flex-col space-y-3"
          >
            <div className="flex flex-col space-y-2">
              <Input after={false} type="email" required>
                Email
              </Input>
              <Input after={false} type="password" required>
                Password
              </Input>
            </div>
            <Button loading={false} type="submit">
              Access
            </Button>
          </form>
          <div>
            <Link href={'#'} className="text-gray-400 hover:text-gray-700">
              Do not have an account? Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
