import { ComponentProps, FC } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const ElementVariants = tv({
  base: 'px-12 py-10 rounded',
  variants: {
    theme: {
      light: 'bg-zinc-200',
      dark: 'bg-zinc-800',
    },
  },
  defaultVariants: {
    theme: 'light',
  },
})

type ElementVariantsProps = VariantProps<typeof ElementVariants>

export interface WrapperProps
  extends ElementVariantsProps,
    ComponentProps<'div'> {}

export const Wrapper: FC<WrapperProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={ElementVariants({ className })} {...props}>
      {children}
    </div>
  )
}
