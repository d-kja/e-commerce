'use client'

import { FC, useEffect, useState } from 'react'

import { Desktop } from './shards/desktop'
import { Mobile } from './shards/mobile'

import { Button } from '@sw-ec/ui'
import { ShoppingCart } from 'lucide-react'

export const CartModal: FC = () => {
  const [isDesktopSize, setIsDesktopSize] = useState(true)

  useEffect(() => {
    if (window) {
      setIsDesktopSize(window?.innerWidth > 900)
    }
  }, [])

  if (isDesktopSize) {
    return (
      <Desktop>
        <Button
          squared
          variant="ghost"
          className="btn-square rounded-2xl p-1 md:p-2 w-8 h-8 md:w-10 md:h-10 min-h-0 join-item rounded-tl-xl rounded-bl-xl"
          title="Carrinho"
        >
          <ShoppingCart className="md:w-6 md:h-6 w-4 h-4" strokeWidth={1.5} />
        </Button>
      </Desktop>
    )
  }

  return (
    <Mobile>
      <Button
        squared
        variant="ghost"
        className="btn-square rounded-2xl p-1 md:p-2 w-8 h-8 md:w-10 md:h-10 min-h-0 join-item rounded-tl-xl rounded-bl-xl"
        title="Carrinho"
      >
        <ShoppingCart className="md:w-6 md:h-6 w-4 h-4" strokeWidth={1.5} />
      </Button>
    </Mobile>
  )
}
