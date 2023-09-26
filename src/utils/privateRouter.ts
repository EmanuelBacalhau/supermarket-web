import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { parseCookies } from 'nookies'

export default function privateRouter(router: AppRouterInstance) {
  const { SECRET } = parseCookies()

  if (!SECRET) {
    router.push('/')
  }
}
