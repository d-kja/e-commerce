import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@sw-ec/ui'
import { Search, ShoppingCart, User2 } from 'lucide-react'
import Link from 'next/link'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="flex justify-between items-center">
      <Button
        squared
        opt="outline"
        className="p-2 btn-square rounded-2xl w-11 h-11 min-h-0"
      >
        <Search className="w-6 h-6" strokeWidth={1.5} />
      </Button>

      <div className="px-4 py-3 flex flex-col items-center gap-6">
        <Image
          src={'https://github.com/d-kja.png'}
          width={125}
          height={125}
          alt="Store logo"
          className="rounded-lg shadow"
        />
        <div className="flex gap-6">
          <Link href="/" className="link link-hover">
            Destaque
          </Link>
          <Link href="/" className="link link-hover">
            Produtos
          </Link>
          <Link href="/" className="link link-hover">
            Wishlist
          </Link>
          <Link href="/" className="link link-hover">
            Sobre a loja
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center px-2 py-1 join border border-neutral-content rounded-2xl gap-2">
        <Button
          squared
          variant="ghost"
          className="btn-square rounded-2xl p-2 w-10 h-10 min-h-0 join-item"
        >
          <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
        </Button>
        <Button
          squared
          variant="ghost"
          className="btn-square rounded-2xl p-2 w-10 h-10 min-h-0 join-item"
        >
          <User2 className="w-6 h-6" strokeWidth={1.5} />
        </Button>
      </div>
    </nav>
  )
}
