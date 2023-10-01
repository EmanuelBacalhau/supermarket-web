import { api } from '@/api/api'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

interface SignUpProps {
  name: string
  cpf: string
  birthday: string
  email: string
  password: string
}

export const signUp = async (data: SignUpProps) => {
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
}
