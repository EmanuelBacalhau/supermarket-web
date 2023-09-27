import Image from 'next/image'
import logoSupermarket from '../../../../public/Supermarket-UniFacisa.svg'
import Link from 'next/link'

import { LogOut } from 'lucide-react'
import { logOut } from '@/utils/logOut'
import { useRouter } from 'next/navigation'

export default function HeaderHome() {
  const router = useRouter()
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
        <button onClick={() => logOut(router)}>
          <LogOut />
        </button>
      </div>
    </div>
  )
}