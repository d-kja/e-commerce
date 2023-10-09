import {
  forwardRef,
  ForwardRefRenderFunction,
  type ComponentProps,
} from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

const ElementVariants = tv({
  base: [
    'btn rounded-md md:px-4 md:py-3 py-2 px-3 min-h-auto',
    'font-normal text-sm',
    'flex gap-1 md:gap-2 justify-center items-center',
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
      true: 'btn-square !p-0',
    },
  },
})

type ButtonVariantProps = VariantProps<typeof ElementVariants>

export interface ButtonProps
  extends ButtonVariantProps,
    ComponentProps<'button'> {}

const _Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, variant, opt, squared, className, ...props },
  ref,
) => {
  return (
    <button
      className={ElementVariants({
        className,
        opt,
        squared,
        variant,
      })}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(_Button)
