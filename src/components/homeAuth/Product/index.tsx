import { Trash2 } from 'lucide-react'
import Image from 'next/image'

interface ProductProps {
  id: string
  imageUrl: string
  name: string
  price: number
  amount: number
  manufacturingDate: string
  expirationDate: string
  handleClick: (id: string) => Promise<void>
}

export function Product(data: ProductProps) {
  const image = `${process.env.NEXT_PUBLIC_BASE_URL}/products/${data.imageUrl}`

  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-md border border-gray-400/20 px-4 py-4 shadow-lg">
      <div className="flex justify-end">
        <button onClick={() => data.handleClick(data.id)}>
          <Trash2 className="hover:text-red-600" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt="teste"
          width={200}
          height={200}
          className="h-[200px] w-[200px] rounded-md bg-cover bg-center"
        />
      </div>
      <div className="mt-1 flex flex-col gap-2">
        <span className="text-xl">{data.name}</span>
        <div className="flex justify-between max-[768px]:flex-col">
          <span className="text-lg font-bold">R$ {data.price.toFixed(2)}</span>
          <span className="text-black/60">Q.: {data.amount}</span>
        </div>
        <div className="flex justify-between max-[768px]:flex-col">
          <span className="text-gray-500/70">
            F.: {new Date(data.manufacturingDate).toLocaleDateString('pt-BR')}
          </span>
          <span className="text-gray-500/70">
            V.: {new Date(data.expirationDate).toLocaleDateString('pt-BR')}
          </span>
        </div>
      </div>
    </div>
  )
}
