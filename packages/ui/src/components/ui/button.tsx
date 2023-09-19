import type { ComponentProps, FC } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

const ElementVariants = tv({
  base: [
    'btn px-4 py-3 rounded-md min-h-auto',
    'font-normal text-base',
    'flex gap-2 justify-center items-center',
    'disabled:ring-1 ring-current disabled:bg-transparent',
  ],
  variants: {
    variant: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      ghost: 'btn-ghost',
    },
    opt: {
      outline: 'btn-outline',
    },
    squared: {
      true: 'btn-square p-0',
    },
  },
})

type ButtonVariantProps = VariantProps<typeof ElementVariants>

export interface ButtonProps
  extends ButtonVariantProps,
    ComponentProps<'button'> {}

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  opt,
  squared,
  className,
  ...props
}) => {
  return (
    <button
      className={ElementVariants({
        className,
        opt,
        squared,
        variant,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
