import { api } from '@/api/api'
import { parseCookies } from 'nookies'

export const deleteCategory = async (id: string) => {
  const secret = process.env.NEXT_PUBLIC_SECRET as string
  const cookies = parseCookies()
  await api.delete(`/categories/${id}`, {
    headers: { Authorization: `Bearer ${cookies[secret]}` },
  })
}
