import type { ComponentProps, FC } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

const ElementVariants = tv({
  base: [
    'btn px-4 py-3 rounded-md',
    'font-normal text-base',
    'flex gap-2 justify-center items-center',
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
    ratio: {
      squared: 'btn-square p-0',
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
  ratio,
  className,
  ...props
}) => {
  return (
    <button
      className={ElementVariants({
        className,
        opt,
        ratio,
        variant,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
