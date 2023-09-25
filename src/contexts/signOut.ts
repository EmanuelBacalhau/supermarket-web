import { destroyCookie } from 'nookies'
import { useRouter } from 'next/navigation'

export function useSignOut() {
  const router = useRouter()
  const SECRET = process.env.NEXT_PUBLIC_SECRET
  destroyCookie(undefined, SECRET as string)
  router.push('/')
}
