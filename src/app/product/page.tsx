import { categoryService } from '@/api/services/category/categoryService'
import HeaderHome from '@/components/homeAuth/HeaderHome'
import { FormProduct } from '@/components/homeAuth/FormProduct'
import { cookies } from 'next/headers'

export const revalidate = 60

export default async function Product() {
  const token = cookies().get('SECRET')?.value as string
  const data = await categoryService.getCategories(token)

  return (
    <div>
      <HeaderHome />
      <FormProduct categoryList={data} />
    </div>
  )
}
