import Image from 'next/image'
import supermarket from '../../../../public/supermarket.svg'
import { ReactNode } from 'react'

interface HeaderLogoProps {
  children: ReactNode
}

export default function HeaderSignIn({ children }: HeaderLogoProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Image
        src={supermarket}
        alt="logo-supermarket"
        priority={true}
        className="w-[320px]"
      />
      <h2 className="text-xl font-bold">{children}</h2>
    </div>
  )
}
