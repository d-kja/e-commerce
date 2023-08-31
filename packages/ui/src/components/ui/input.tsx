import { ComponentProps, FC } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const ElementVariants = tv({
  base: [
    'input input-outline bg-transparent',
    'px-4 py-3 rounded-md',
    'text-xs font-normal',
  ],
  variants: {
    variant: {
      primary: 'input-primary',
      secondary: 'input-secondary',
      ghost: 'input-ghost',
    },
  },
})

type ElementVariantsProps = VariantProps<typeof ElementVariants>
export interface InputProps
  extends ComponentProps<'input'>,
    ElementVariantsProps {}

export const Input: FC<InputProps> = ({ className, variant, ...props }) => {
  return (
    <input
      className={ElementVariants({
        className,
        variant,
      })}
      {...props}
    />
  )
}
