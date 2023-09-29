import { NextRequest, NextResponse } from 'next/server'
import { authService } from './api/services/auth'

export function middleware(request: NextRequest) {
  const secret = process.env.NEXT_PUBLIC_SECRET as string
  const token = request.cookies.get(secret)

  if (!token) {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/', request.url))
  }

  const publicRoutes = ['/', '/signUp']

  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  const privateRoutes = ['/dashboard', '/product', '/category']

  if (privateRoutes.includes(request.nextUrl.pathname)) {
    return authService.getEmployee(request, token)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/signUp', '/dashboard'],
}
