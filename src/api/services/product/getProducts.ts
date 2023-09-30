import { api } from '@/api/api'
import { parseCookies } from 'nookies'

export interface GetProducts {
  id: string
  imageUrl: string
  name: string
  price: number
  amount: number
  manufacturingDate: string
  expirationDate: string
}

export const getProducts = async () => {
  try {
    const secret = process.env.NEXT_PUBLIC_SECRET as string
    const cookies = parseCookies()

    const response = await api.get<GetProducts[]>('/products', {
      headers: {
        Authorization: `Bearer ${cookies[secret]}`,
      },
    })

    return response.data
  } catch (error) {}
}
