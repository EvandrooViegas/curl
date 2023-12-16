import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Providers from './providers';
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'FITNESS\CURL YOUR FAVOURITE GYM',
    icons: {
      icon: '/icon.png'
    }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  flex flex-col justify-between`}>
        <Navbar />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
