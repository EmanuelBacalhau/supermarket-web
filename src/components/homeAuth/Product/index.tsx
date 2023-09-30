import Image from 'next/image'

interface ProductProps {
  imageUrl: string
  name: string
  price: number
  amount: number
}

export function Product(data: ProductProps) {
  const image = `${process.env.NEXT_PUBLIC_BASE_URL}/products/${data.imageUrl}`

  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-md border border-gray-400/20 px-4 py-4 shadow-lg">
      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt="teste"
          width={200}
          height={200}
          className="rounded-md bg-cover bg-center"
        />
      </div>
      <div className="mt-1 flex flex-col gap-2">
        <span className="text-xl">{data.name}</span>
        <div className="flex justify-between max-[768px]:flex-col">
          <span className="text-lg font-bold">R$ {data.price.toFixed(2)}</span>
          <span className="text-gray-500/70">Q.: {data.amount}</span>
        </div>
      </div>
    </div>
  )
}
