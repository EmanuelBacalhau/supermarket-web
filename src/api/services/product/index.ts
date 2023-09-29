import { api } from '@/api/api'
import { AxiosError } from 'axios'

import { cookies } from 'next/headers'

import { toast } from 'react-toastify'

interface GetProducts {
  id: string
  image?: string
  name: string
  price: number
  amount: number
}

export const productService = {
  getProducts: async () => {
    const secret = process.env.NEXT_PUBLIC_SECRET as string
    const token = cookies().get(secret)?.value

    try {
      const response = await api.get<GetProducts[]>('/products', {
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

        if (error.response?.status === 500) {
          toast.error('Internal server error')
        }
      }
    }
  },
}
