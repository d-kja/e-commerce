import { FC, ReactNode } from 'react'

import * as DesktopModal from '@radix-ui/react-dialog'
import { ArrowLeft } from 'lucide-react'

interface DesktopProps {
  children: ReactNode
}

export const Desktop: FC<DesktopProps> = ({ children }) => {
  return (
    <>
      <DesktopModal.Root>
        <DesktopModal.Trigger asChild>{children}</DesktopModal.Trigger>
        <DesktopModal.Portal>
          <DesktopModal.Overlay className="bg-base-300/50 fixed inset-0" />
          <DesktopModal.Content className="fixed inset-y-0 right-0 max-w-[28.125rem] w-full bg-base-100 p-6">
            <nav className="flex justify-center items-center">
              <DesktopModal.Close className="hover:text-primary transition-colors absolute top-6 left-6">
                <ArrowLeft className="w-[1.625rem] h-[1.625rem]" />
              </DesktopModal.Close>
              <DesktopModal.Title className="font-semibold text-lg">
                Seu carrinho
              </DesktopModal.Title>
              <span />
            </nav>
            <DesktopModal.Description />
          </DesktopModal.Content>
        </DesktopModal.Portal>
      </DesktopModal.Root>
    </>
  )
}
