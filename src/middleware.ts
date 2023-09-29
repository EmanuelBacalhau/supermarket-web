import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const secret = process.env.NEXT_PUBLIC_SECRET as string
  const configCookies = request.cookies.get(secret)

  if (!configCookies) {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/', request.url))
  }

  const publicRoutes = ['/', '/signUp']

  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/signUp', '/dashboard'],
}
