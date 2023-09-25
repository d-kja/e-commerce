import { Button, NavLink } from '@sw-ec/ui'
import { HeartIcon, Search, ShoppingCart, User2 } from 'lucide-react'
import { FC } from 'react'

interface FloatingNavProps {}

export const FloatingNav: FC<FloatingNavProps> = () => {
  return (
    <>
      <nav className="sticky top-5 flex items-center justify-between px-6 py-2 max-w-[980px] mx-3 lg:mx-auto bg-base-100 border rounded-lg h-[3.75rem]">
        <div className="flex gap-6 items-center">
          <strong className="text-xl font-bold">H4S.</strong>

          <div className="px-4 py-3 flex items-center gap-4">
            <NavLink className="text-sm">
              <a>Destaque</a>
            </NavLink>
            <NavLink className="text-sm">
              <a>Produtos</a>
            </NavLink>

            <NavLink className="text-sm">
              <a>Sobre a loja</a>
            </NavLink>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <label
            className="flex items-center gap-3 rounded-full border border-neutral-content/50 focus-within:ring ring-base-300"
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              height: '36px',
              borderRadius: '6px',
            }}
          >
            <Search className="h-4 w-4 text-neutral-content/50" />
            <input
              style={{
                outline: 'none',
                background: 'transparent',
              }}
              placeholder="Pesquisar"
            />
          </label>

          <Button
            squared
            variant="ghost"
            className="btn-square rounded-xl p-1 w-8 h-8 min-h-0 join-item"
          >
            <HeartIcon className="w-5 h-5" strokeWidth={1.5} />
          </Button>

          <Button
            squared
            variant="ghost"
            className="btn-square rounded-xl p-1 w-8 h-8 min-h-0 join-item "
          >
            <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
          </Button>

          <Button
            squared
            variant="ghost"
            className="btn-square rounded-xl p-1 w-8 h-8 min-h-0 join-item "
          >
            <User2 className="w-5 h-5" strokeWidth={1.5} />
          </Button>
        </div>
      </nav>
    </>
  )
}
