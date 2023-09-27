import { destroyCookie } from 'nookies'
import Router from 'next/router'

export function useSignOut() {
  const SECRET = process.env.NEXT_PUBLIC_SECRET
  destroyCookie(undefined, SECRET as string)
  Router.push('/')
}
