'use client'

import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { destroyCookie, parseCookies } from 'nookies'
import { ReactNode, useState, useEffect } from 'react'
import { AuthContext, UserProps } from './AuthContext'
import { getEmployee } from '@/api/services/employee/getEmployee'

interface AuthProvider {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProvider) {
  const router = useRouter()
  const [user, setUser] = useState<UserProps>()

  const cookies = parseCookies()
  const secret = process.env.NEXT_PUBLIC_SECRET as string

  useEffect(() => {
    if (cookies[secret]) {
      getEmployee()
        .then((response) => setUser(response?.data))
        .catch((error) => {
          if (error instanceof AxiosError) {
            if (error.response?.status === 401) {
              destroyCookie(undefined, secret)
              router.push('/')
            }
          }
        })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user: user as UserProps }}>
      {children}
    </AuthContext.Provider>
  )
}
