import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { destroyCookie, parseCookies } from 'nookies'

export const logOut = (router: AppRouterInstance) => {
  const secret = process.env.NEXT_PUBLIC_SECRET as string

  const token = parseCookies()

  if (token[secret]) {
    destroyCookie(undefined, secret)
    router.push('/')
  }

  router.push('/')
}
