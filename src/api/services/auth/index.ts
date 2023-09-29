import { api } from '@/api/api'
import { AxiosError } from 'axios'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { toast } from 'react-toastify'

interface LoginProps {
  email: string
  password: string
}

interface SignUpProps {
  name: string
  cpf: string
  birthday: string
  email: string
  password: string
}

export const authService = {
  login: async (data: LoginProps) => {
    try {
      const response = await api.post('/auth', data)

      const secret = process.env.NEXT_PUBLIC_SECRET as string
      const { token } = response.data

      sessionStorage.setItem(secret, token)

      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast.error(error.response.data.message)
        }
        if (error.response?.status === 500) {
          toast.error('Internal server error')
        }
      }
    }
  },
  signUp: async (data: SignUpProps) => {
    try {
      const response = await api.post('/employees/register', data)
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          toast.error(error.response.data.message)
        }

        if (error.response?.status === 500) {
          toast.error('Internal server error')
        }
      }
    }
  },
  logOut: (router: AppRouterInstance) => {
    const secret = process.env.NEXT_PUBLIC_SECRET as string

    const token = sessionStorage.getItem(secret)

    if (token) {
      sessionStorage.removeItem(secret)
      router.push('/')
    }

    router.push('/')
  },
}
