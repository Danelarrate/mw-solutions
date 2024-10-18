import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Wp } from '@/components/Wp'

export const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '400', // Peso normal
      style: 'normal'
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '700', // Peso negrita
      style: 'normal'
    },
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '500', // Peso medio
      style: 'normal'
    },
    {
      path: './fonts/Poppins-SemiBold.ttf',
      weight: '600', // Peso semi-negrita
      style: 'normal'
    },
    {
      path: './fonts/Poppins-Light.ttf',
      weight: '300', // Peso ligero
      style: 'normal'
    }
  ],
  variable: '--font-poppins' // Esta variable se aplicará globalmente
})
export const metadata: Metadata = {
  title: 'MW Soluciones',
  description: 'Distruidor de maquinas de pintura'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable}  antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Wp />
      </body>
    </html>
  )
}
