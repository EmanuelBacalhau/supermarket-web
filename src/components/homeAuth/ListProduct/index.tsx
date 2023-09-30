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

  const responsive =
    'max-[1538px]:grid-cols-3 max-[630px]:grid-cols-2 max-[420px]:grid-cols-1'

  return (
    <div className={`container grid grid-cols-5 gap-5 py-8 ${responsive}`}>
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
