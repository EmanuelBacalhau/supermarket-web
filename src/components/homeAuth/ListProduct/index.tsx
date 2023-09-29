import { productService } from '@/api/services/product'
import { Product } from '../Product'

export async function ListProduct() {
  const products = await productService.getProducts()

  const size = products?.length

  if (!size) {
    return (
      <div className="mt-10 text-center">
        <p className="text-gray-500/70">Empty product list...</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-4 px-12 py-5">
      {products?.map((product) => (
        <Product
          key={product.id}
          amount={product.amount}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  )
}
