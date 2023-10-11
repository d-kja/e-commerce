// 'use client'

import { formatPrice } from '@/utils/formatters'
import { Button } from '@sw-ec/ui'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, ReactNode } from 'react'

import { Drawer } from 'vaul'

interface MobileProps {
  children: ReactNode
}

export const Mobile: FC<MobileProps> = ({ children }) => {
  const navigate = useRouter()
  const totalPriceFormatted = formatPrice(400)

  const handleNavigate = (url = '/') => {
    navigate.push(url)
  }

  return (
    <Drawer.Root>
      <Drawer.Trigger>{children}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col gap-9 rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0 p-6">
          <span className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-2" />

          <header className="flex justify-start items-center gap-2">
            <ShoppingBag className="w-5 h-5 opacity-70" />
            <strong className="font-semibold text-lg">Seu Carrinho</strong>
          </header>

          <section title="Lista de produtos">...</section>

          <section title="Resumo" className="mt-auto flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <strong className="text-base font-medium uppercase">
                  Subtotal
                </strong>
                <span className="text-xs font-normal opacity-60">
                  O frete é calculado no checkout
                </span>
              </div>
              <span className="font-normal text-base">
                {totalPriceFormatted} BRL
              </span>
            </div>
            <Drawer.Close className="flex w-full">
              <Button
                variant="primary"
                className="font-semibold flex-1"
                onClick={() => handleNavigate('/checkout')}
              >
                Checkout
              </Button>
            </Drawer.Close>
          </section>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
