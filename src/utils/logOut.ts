import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { destroyCookie } from 'nookies'

export function logOut(router: AppRouterInstance) {
  const SECRET = process.env.NEXT_PUBLIC_SECRET
  destroyCookie(undefined, SECRET as string)
  router.push('/')
}
