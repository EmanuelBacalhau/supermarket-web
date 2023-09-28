'use client'

import Image from 'next/image'
import logoSupermarket from '../../../../public/supermarket.svg'
import Link from 'next/link'

import { LogOut } from 'lucide-react'
import { signOut } from '@/contexts/signOut'

export default function HeaderHome() {
  return (
    <div className="flex h-20 items-center justify-between bg-yellow-400 px-12">
      <Link href={'/dashboard'}>
        <Image
          src={logoSupermarket}
          alt="logo-supermarket"
          className="w-[250px]"
        />
      </Link>
      <div className="flex items-center space-x-8 text-center">
        <Link href={'/category'}>Category</Link>
        <Link href={'/product'}>Product</Link>
        <button onClick={signOut}>
          <LogOut />
        </button>
      </div>
    </div>
  )
}
