import './styles/globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Navbar } from '../components/shards/navbar'

const fontFamily = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'H4S | Store',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Hub4Stores',
    description:
      'Uma aplicação E-commerce para venda de produtos diversos como, por exemplo, comidas ou até serviços',
  },

  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={fontFamily.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
