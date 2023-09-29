'use client'

import { Button } from '@sw-ec/ui'
import { motion, useScroll } from 'framer-motion'
import { HeartIcon, Menu, Search, ShoppingCart, User2 } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import { NavLink } from './shards/nav-link'

interface FloatingNavbarProps {}

const variants = {
  visible: { opacity: 1, y: 0, visibility: 'visible' } as const,
  hidden: { opacity: 0, y: -25, visibility: 'hidden' } as const,
}

export const FloatingNavbar: FC<FloatingNavbarProps> = () => {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    scrollY.on('change', (scrollValue) => {
      const visible = scrollValue > 240
      setIsVisible(visible)
    })

    return () => {
      scrollY.destroy()
    }
  }, [])

  return (
    <motion.nav
      className={`sticky top-5 z-20`}
      initial="hidden"
      variants={variants}
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <div className="absolute inset-x-0 flex items-center justify-between px-6 py-2 max-w-[980px] mx-3 lg:mx-auto bg-base-100 border rounded-lg h-[3.75rem]">
        <div className="flex gap-6 items-center">
          <strong className="text-xl font-bold">H4S.</strong>

          {/* Menu links */}
          <div className="hidden px-4 py-3 lg:flex items-center gap-4">
            <NavLink
              layoutId="floating-link-underline"
              href="/"
              className="text-sm"
            >
              Destaque
            </NavLink>
            <NavLink
              layoutId="floating-link-underline"
              href="/products/-1"
              className="text-sm"
            >
              Produtos
            </NavLink>

            <NavLink
              layoutId="floating-link-underline"
              href="/about"
              className="text-sm"
            >
              Sobre a loja
            </NavLink>
          </div>

          {/* Menu links (small screen) */}
          <Button
            squared
            variant="ghost"
            className="lg:hidden flex btn-square rounded-xl p-1 w-8 h-8 min-h-0 join-item"
          >
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2">
          <label className="sm:flex hidden items-center gap-3 px-3 h-9 rounded-full border border-neutral-content/50 focus-within:ring ring-base-300">
            <Search className="h-4 w-4 text-neutral-content/50" />
            <input
              className="outline-none bg-transparent"
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
      </div>
    </motion.nav>
  )
}
