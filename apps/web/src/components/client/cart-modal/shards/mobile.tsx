import Link from 'next/link'
import { FC, ReactNode } from 'react'

import { Drawer } from 'vaul'

interface MobileProps {
  children: ReactNode
}

export const Mobile: FC<MobileProps> = ({ children }) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger>{children}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <span className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8 mt-4" />
          <Link href="/">go home</Link>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
