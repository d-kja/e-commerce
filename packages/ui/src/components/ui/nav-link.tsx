import { FC } from 'react'

import { Slot, SlotProps } from '@radix-ui/react-slot'
import { VariantProps, tv } from 'tailwind-variants'

const ElementVariants = tv({
  base: [
    'link focus:outline-none focus-within:ring rounded-md ring-offset-4 ring-offset-base-100 ring-neutral-content !no-underline',
    'font-normal text-base',
  ],
})

type ElementVariantsType = VariantProps<typeof ElementVariants>
export interface NavLinkProps extends SlotProps, ElementVariantsType {}

export const NavLink: FC<NavLinkProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <Slot
      className={ElementVariants({
        className,
      })}
      {...props}
    >
      {children}
    </Slot>
  )
}
