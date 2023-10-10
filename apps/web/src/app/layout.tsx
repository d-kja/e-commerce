import './styles/globals.css'

import '@sw-ec/ui/dist/index.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { BoundedContext } from '@/components/client/bounded-context'
import { LanguageBar } from '../components/client/language-bar'
import { Navbar } from '../components/layout/navbar'
import { FloatingNavbar } from '../components/layout/navbar/floating-navbar'

import { twMerge } from 'tailwind-merge'

const fontFamily = Montserrat({ subsets: ['latin'], fallback: ['sans-serif'] })

const metaDescription =
  'Uma aplicação E-commerce para venda de produtos diversos como, por exemplo, comidas ou até serviços'

export const metadata: Metadata = {
  title: 'H4S | Store',
  description: metaDescription,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Hub4Stores',
    description: metaDescription,
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
    <html lang="pt-br" data-theme="light">
      <body className={twMerge(fontFamily.className, 'relative')}>
        <BoundedContext>
          <LanguageBar />
          <div className="max-w-default mx-6 xl:mx-auto">
            <Navbar />
            <FloatingNavbar />
            {children}
          </div>
        </BoundedContext>
      </body>
    </html>
  )
}
