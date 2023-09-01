import { ComponentProps, FC } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const ElementVariants = tv({
  base: ['checkbox'],
  variants: {},
})

type ElementVariantsProps = VariantProps<typeof ElementVariants>
export interface CheckboxProps
  extends ComponentProps<'input'>,
    ElementVariantsProps {}

export const Checkbox: FC<CheckboxProps> = ({ className, ...props }) => {
  return (
    <input
      className={ElementVariants({
        className,
      })}
      {...props}
    />
  )
}
