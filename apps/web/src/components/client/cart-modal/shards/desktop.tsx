import { useRouter } from 'next/navigation'
import { FC, ReactNode } from 'react'

import * as DesktopModal from '@radix-ui/react-dialog'
import { Button } from '@sw-ec/ui'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

import { formatPrice } from '@/utils/formatters'
import { CartCard } from '../../product-card-small/cart-card'

const animation = {
  default: {
    x: 25,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
}

interface DesktopProps {
  children: ReactNode
}

export const Desktop: FC<DesktopProps> = ({ children }) => {
  const router = useRouter()

  const totalPriceFormatted = formatPrice(249.97)

  const handleNavigate = (url = '/') => router.push(url)

  return (
    <>
      <DesktopModal.Root>
        <DesktopModal.Trigger asChild>{children}</DesktopModal.Trigger>
        <DesktopModal.Portal>
          <DesktopModal.Overlay className="bg-base-300/50 fixed inset-0" />
          <DesktopModal.Content asChild>
            <motion.div
              className="fixed inset-y-0 right-0 max-w-[28.125rem] w-full bg-base-100 p-6 flex flex-col gap-9"
              transition={{
                type: 'just',
              }}
              initial={animation.default}
              animate={animation.animate}
              exit={animation.default}
            >
              <header className="flex justify-center items-center">
                <DesktopModal.Close className="hover:text-primary transition-colors absolute top-6 left-6">
                  <ArrowLeft className="w-[1.625rem] h-[1.625rem]" />
                </DesktopModal.Close>
                <DesktopModal.Title className="font-semibold text-lg">
                  Seu carrinho
                </DesktopModal.Title>
                <span />
              </header>

              <section
                title="Lista de produtos"
                className="grid grid-cols-1 gap-6"
              >
                <CartCard />
                <hr className="border-base-200" />
                <CartCard />
              </section>

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

                <DesktopModal.Close className="flex w-full">
                  <Button
                    variant="primary"
                    className="font-semibold flex-1"
                    onClick={() => handleNavigate('/checkout')}
                  >
                    Checkout
                  </Button>
                </DesktopModal.Close>
              </section>
            </motion.div>
          </DesktopModal.Content>
        </DesktopModal.Portal>
      </DesktopModal.Root>
    </>
  )
}
