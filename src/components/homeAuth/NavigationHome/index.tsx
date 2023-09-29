'use client'

import { authService } from '@/api/services/auth'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function NavigationHome() {
  const router = useRouter()

  return (
    <div className="flex items-center space-x-8 text-center">
      <Link href={'/category'}>Category</Link>
      <Link href={'/product'}>Product</Link>
      <button onClick={() => authService.logOut(router)}>
        <LogOut />
      </button>
    </div>
  )
}
