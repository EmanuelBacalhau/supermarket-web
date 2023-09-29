interface ProductProps {
  id: string
  image?: string
  name: string
  price: number
  amount: number
}

export function Product(data: ProductProps) {
  return (
    <div
      key={data.id}
      className="flex w-[307px] flex-col gap-1 border border-black"
    >
      <span>{!data.image ? 'image' : data.image}</span>
      <span>Name: {data.name}</span>
      <span>Price: R$ {data.price}</span>
      <span>Amount: {data.amount}</span>
    </div>
  )
}
