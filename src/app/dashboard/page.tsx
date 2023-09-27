'use client'

import HeaderHome from '@/components/Dashboard/HeaderHome'
import privateRouter from '@/utils/privateRouter'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    privateRouter(router)
  }, [])

  return (
    <div>
      <HeaderHome />
    </div>
  )
}
