import { ComponentProps, FC } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const ElementVariants = tv({
  base: ['checkbox rounded-[0.25rem] w-6 h-6 border-2'],
})

type ElementVariantsProps = VariantProps<typeof ElementVariants>
export interface CheckboxProps
  extends ComponentProps<'input'>,
    ElementVariantsProps {}

export const Checkbox: FC<CheckboxProps> = ({
  className,

  ...props
}) => {
  return (
    <input
      type="checkbox"
      className={ElementVariants({
        className,
      })}
      {...props}
    />
  )
}
