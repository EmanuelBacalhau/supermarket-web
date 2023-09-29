import { productService } from '@/api/services/product'
import { Product } from '../Product'

export async function ListProduct() {
  const response = await productService.getProducts()
  const products = response?.data

  const size = products?.length

  return (
    <div>
      {size === 0 ? (
        <span className="mt-6 flex justify-center text-center text-black/60">
          Empty product list
        </span>
      ) : (
        <div className="grid grid-cols-4 gap-4 px-12 py-5">
          {products?.map((product) => (
            <Product
              key={product.id}
              amount={product.amount}
              name={product.name}
              price={product.price}
              id={product.id}
              image={product.image}
            />
          ))}
        </div>
      )}
    </div>
  )
}
