import { api } from '@/api/api'

export interface CategoryProps {
  id: string
  name: string
}

export const getCategories = async (
  token: string,
): Promise<CategoryProps[] | []> => {
  const response = await api.get<CategoryProps[]>('/categories', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return response.data ? response.data : []
}
