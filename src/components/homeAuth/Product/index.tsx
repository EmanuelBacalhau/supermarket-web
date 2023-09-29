import Button from '@/components/ui/Button'
import Image from 'next/image'

interface ProductProps {
  imageUrl: string
  name: string
  price: number
  amount: number
}

export function Product(data: ProductProps) {
  return (
    <div className="flex w-[307px] flex-col gap-3 rounded-md border border-gray-400/20 px-2 py-3 shadow-xl">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/products/${data.imageUrl}`}
        alt="teste"
        width={307}
        height={200}
        className="rounded-md bg-cover bg-center"
      />
      <div className="flex flex-col">
        <span className="text-xl">{data.name}</span>
        <div className="flex justify-between">
          <span className="text-lg font-bold">R$ {data.price.toFixed(2)}</span>
          <span className="text-gray-500/70">Q.: {data.amount}</span>
        </div>
        <Button loading={false}>Comprar</Button>
      </div>
    </div>
  )
}
