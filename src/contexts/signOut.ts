import { destroyCookie } from 'nookies'
import { useRouter } from 'next/navigation'

export function useSignOut(context = undefined) {
  const router = useRouter()
  const SECRET = process.env.NEXT_PUBLIC_SECRET
  destroyCookie(context, SECRET as string)
  router.push('/')
}
