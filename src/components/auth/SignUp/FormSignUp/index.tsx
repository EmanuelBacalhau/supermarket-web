'use client'

import { authService } from '@/api/services/auth'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

import { toast } from 'react-toastify'

export function FormSignUp() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [birthday, setBirthday] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

    if (confirmPassword !== password) {
      setLoading(false)
      return toast.error('Passwords are not the same.')
    }

    const response = await authService.signUp({
      name,
      cpf,
      birthday,
      email,
      password,
    })

    setLoading(false)

    if (response?.status === 201) {
      router.push('/')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <form onSubmit={handleForm} className="flex w-[90%] flex-col space-y-3">
        <div className="flex flex-col space-y-2">
          <Input
            after={true}
            type="text"
            required
            placeholder="Type your name"
            onChange={(e) => setName(e.target.value)}
          >
            Name
          </Input>
          <div className="flex space-x-2 max-lg:flex-col max-lg:space-x-0">
            <Input
              after={true}
              type="text"
              required
              placeholder="000.000.000-00"
              data-mask="000.000.000-00"
              minLength={14}
              maxLength={14}
              onChange={(e) => setCpf(e.target.value)}
            >
              CPF
            </Input>
            <Input
              after={true}
              type="text"
              required
              placeholder="00/00/0000"
              data-mask="dd/mm/yyyy"
              onChange={(e) => setBirthday(e.target.value)}
            >
              Birthday
            </Input>
          </div>
          <Input
            after={true}
            type="email"
            required
            placeholder="Type your email"
            onChange={(e) => setEmail(e.target.value)}
          >
            Email
          </Input>

          <Input
            after={true}
            type="password"
            required
            placeholder="Type your password"
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          >
            Password
          </Input>
          <Input
            after={true}
            type="password"
            required
            placeholder="Confirm password"
            minLength={8}
            onChange={(e) => setConfirmPassword(e.target.value)}
          >
            Confirm password
          </Input>
        </div>
        <Button loading={loading} type="submit">
          Register
        </Button>
      </form>
      <div>
        <Link
          href={'/'}
          className="text-gray-400 hover:text-gray-700 max-sm:text-sm"
        >
          Already have an account? Access
        </Link>
      </div>
    </div>
  )
}
