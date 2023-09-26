'use client'

import getData from '@/utils/privateRouter'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    getData(router)
  })

  return (
    <div>
      <h1>Oi dev trouxa</h1>
    </div>
  )
}
