import './styles/globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { LanguageBar } from '../components/client/language-bar'
import { Navbar } from '../components/layout/navbar'
import { FloatingNavbar } from '../components/layout/navbar/floating-navbar'

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
    <html lang="pt-br" data-theme="cupcake">
      <body className={fontFamily.className}>
        <LanguageBar />
        <div className="max-w-default mx-6 xl:mx-auto h-[2000px]">
          <Navbar />
          <FloatingNavbar />
          {children}
        </div>
      </body>
    </html>
  )
}
