import Image from 'next/image'
import supermarket from '../../../public/Supermarket UniFacisa.svg'
import { ReactNode } from 'react'

interface HeaderLogoProps {
  children: ReactNode
}

export default function HeaderLogo({ children }: HeaderLogoProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Image src={supermarket} alt="logo-supermarket" className="w-[320px]" />
      <h2 className="text-xl font-bold">{children}</h2>
    </div>
  )
}
