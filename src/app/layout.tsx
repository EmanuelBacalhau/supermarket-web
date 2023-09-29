import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <body className={inter.className}>
        <div className="container">{children}</div>
        <ToastContainer autoClose={1500} theme="light" />
      </body>
    </html>
  )
}
