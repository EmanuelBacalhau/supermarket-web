'use client'

import { GetProducts, getProducts } from '@/api/services/product/getProducts'
import { Product } from '../Product'
import { useEffect, useState } from 'react'
import { deleteProduct } from '@/api/services/product/deleteProduct'

export function ListProduct() {
  const [products, setProducts] = useState<GetProducts[]>()

  const size = products?.length

  useEffect(() => {
    async function getData() {
      const response = await getProducts()
      setProducts(response)
    }

    getData()
  }, [])

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id)
    const newProducts = products?.filter((product) => product.id !== id)
    setProducts(newProducts)
  }

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
          id={product.id}
          amount={product.amount}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          manufacturingDate={product.manufacturingDate}
          expirationDate={product.expirationDate}
          handleClick={handleDeleteProduct}
        />
      ))}
    </div>
  )
}
