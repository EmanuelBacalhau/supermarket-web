import { api } from '@/api/api'
import { AxiosError } from 'axios'
import { setCookie } from 'nookies'
import { toast } from 'react-toastify'

interface LoginProps {
  email: string
  password: string
}

export const login = async (data: LoginProps) => {
  try {
    const response = await api.post('/auth', data)

    const secret = process.env.NEXT_PUBLIC_SECRET as string
    const { token } = response.data

    setCookie(undefined, secret, token, {
      maxAge: 60 * 60 * 24,
      path: '/',
    })

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
    return toast.error('Internal server error')
  }
}
