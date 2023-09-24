import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import AuthProvider from '@/contexts/AuthProvider'
import { ToastContainer } from 'react-toastify'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

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
        <body className={inter.className}>
          {children}
          <ToastContainer autoClose={1500} theme="light" />
        </body>
      </AuthProvider>
    </html>
  )
}
