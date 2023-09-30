import { api } from '@/api/api'

import { cookies } from 'next/headers'

interface GetProducts {
  id: string
  imageUrl: string
  name: string
  price: number
  amount: number
}

export const productService = {
  getProducts: async () => {
    try {
      const secret = process.env.NEXT_PUBLIC_SECRET as string
      const token = cookies().get(secret)?.value

      const response = await api.get<GetProducts[]>('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data ? response.data : []
    } catch (error) {}
  },
}
