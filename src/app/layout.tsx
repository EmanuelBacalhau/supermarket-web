import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import AuthProvider from '@/contexts/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Supermarket - UniFacisa',
  description: 'System supermarket',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://jsuites.net/v4/jsuites.js"></script>
      </head>
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  )
}
