import { api } from '@/api/api'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const createProduct = async (data: FormData, token: string) => {
  try {
    const response = await api.post('/products/register', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        toast.error(error.response.data.message)
      }
      if (error.response?.status === 409) {
        toast.error(error.response.data.message)
      }
      if (error.response?.status === 422) {
        toast.error(error.response.data.message)
      }
      if (error.response?.status === 500) {
        toast.error('Internal server error')
      }
    }
  }
}
