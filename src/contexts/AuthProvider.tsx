'use client'

import { ReactNode, useState, useEffect } from 'react'
import { AuthContext, SignInProps, SignUpProps, UserProps } from './AuthContext'
import { useSignOut } from './signOut'
import { api } from '@/api/api'

import { parseCookies, setCookie } from 'nookies'
import { useRouter } from 'next/navigation'

import { toast } from 'react-toastify'

import { AuthTokenError } from '@/api/errors/AuthTokenError'
import { AxiosError } from 'axios'
import { logOut } from '@/utils/logOut'

interface AuthProviderProps {
  children: ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter()

  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user

  const { SECRET } = parseCookies()

  useEffect(() => {
    if (SECRET) {
      api
        .get('/employees/me')
        .then((response) => {
          const { id, name } = response.data
          setUser({ id, name })
        })
        .catch(() => {
          logOut(router)
        })
    }
  }, [])

  const signIn = async ({ email, password }: SignInProps) => {
    try {
      const response = await api.post('/auth', { email, password })
      const { token } = response.data

      const SECRET = process.env.NEXT_PUBLIC_SECRET as string

      setCookie(undefined, SECRET, token, {
        maxAge: 60 * 60 * 24,
        path: '/',
      })

      setUser(response.data)

      api.defaults.headers.Authorization = `Bearer ${token}`

      router.push('/dashboard')
    } catch (error) {
      if (error instanceof AuthTokenError) {
        toast.error(error.message)
      }
    }
  }

  const signUp = async ({
    name,
    cpf,
    birthday,
    email,
    password,
  }: SignUpProps) => {
    try {
      await api.post('/employees/register', {
        name,
        cpf,
        birthday,
        email,
        password,
      })

      router.push('/')
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut: useSignOut,
        isAuthenticated,
        user: user as UserProps,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
