import { destroyCookie, parseCookies } from 'nookies'

export function signOut() {
  const SECRET = process.env.NEXT_PUBLIC_SECRET as string

  const cookies = parseCookies()

  if (cookies[SECRET]) {
    destroyCookie(undefined, SECRET as string)
    window.location.href = '/'
  }
}
