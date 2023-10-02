import { FC } from 'react'

import { Button } from '@sw-ec/ui'
import { Menu, Search, ShoppingCart, User2 } from 'lucide-react'
import Image from 'next/image'
import { NavLink } from './shards/nav-link'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="flex justify-between items-center border-b border-base-300">
      <div className="flex items-center justify-center px-2 py-1 join border border-neutral-content/25 rounded-2xl">
        <Button
          squared
          variant="ghost"
          className="p-2 btn-square rounded-tl-xl rounded-bl-xl w-10 h-10 min-h-0 sm:hidden flex"
          title="Menu"
        >
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        </Button>

        <Button
          squared
          variant="ghost"
          className="btn-square rounded-2xl p-2 w-10 h-10 min-h-0 join-item sm:!rounded-xl rounded-tr-xl rounded-br-xl"
          title="Pesquisa"
        >
          <Search className="w-6 h-6" strokeWidth={1.5} />
        </Button>
      </div>

      <div className="px-4 py-3 flex flex-col items-center gap-6">
        <Image
          src={'https://github.com/d-kja.png'}
          width={125}
          height={125}
          alt="Logo da loja"
          className="rounded-lg"
        />
        <div className="sm:flex hidden justify-center items-baseline flex-wrap gap-6">
          <NavLink href="/">Destaque</NavLink>
          <NavLink href="/products/-1">Produtos</NavLink>
          <NavLink href="/wishlist">Wishlist</NavLink>
          <NavLink href="/about">Sobre a loja</NavLink>
        </div>
      </div>

      <div className="flex items-center justify-center px-2 py-1 join border border-neutral-content/25 rounded-2xl">
        <Button
          squared
          variant="ghost"
          className="btn-square rounded-2xl p-2 w-10 h-10 min-h-0 join-item rounded-tl-xl rounded-bl-xl"
          title="Carrinho"
        >
          <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
        </Button>

        <Button
          squared
          variant="ghost"
          className="btn-square rounded-2xl p-2 w-10 h-10 min-h-0 join-item rounded-tr-xl rounded-br-xl"
          title="Perfil de usuário"
        >
          <User2 className="w-6 h-6" strokeWidth={1.5} />
        </Button>
      </div>
    </nav>
  )
}
