import { ComponentProps, FC } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const ElementVariants = tv({
  base: [
    'input input-outline bg-transparent h-10',
    'px-4 py-3 !rounded-md',
    'text-xs font-normal',
    'disabled:bg-transparent disabled:border-opacity-25',
  ],
  variants: {
    variant: {
      primary: 'input-primary',
      secondary: 'input-secondary',
      ghost: 'input-ghost',
    },
    error: {
      true: 'input-error',
    },
    warning: {
      true: 'input-warning',
    },
  },
})

type ElementVariantsProps = VariantProps<typeof ElementVariants>
export interface InputProps
  extends ComponentProps<'input'>,
    ElementVariantsProps {}

export const Input: FC<InputProps> = ({
  className,
  variant,
  error,
  warning,
  ...props
}) => {
  return (
    <input
      className={ElementVariants({
        className,
        variant,
        error,
        warning,
      })}
      {...props}
    />
  )
}
