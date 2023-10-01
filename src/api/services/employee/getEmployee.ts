import { api } from '@/api/api'
import { parseCookies } from 'nookies'

export const getEmployee = async () => {
  const cookies = parseCookies()
  const secret = process.env.NEXT_PUBLIC_SECRET as string
  return api.get('/employees/me', {
    headers: {
      Authorization: `Bearer ${cookies[secret]}`,
    },
  })
}
