import { ComponentProps, FC } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const ElementVariants = tv({
  base: ['checkbox rounded-[0.25rem] w-6 h-6 border-2'],
  variants: {
    variant: {
      primary: 'checkbox-primary',
      secondary: 'checkbox-secondary',
    },
    error: {
      true: 'checkbox-error',
    },
  },
})

type ElementVariantsProps = VariantProps<typeof ElementVariants>
export interface CheckboxProps
  extends ComponentProps<'input'>,
    ElementVariantsProps {}

export const Checkbox: FC<CheckboxProps> = ({
  className,
  variant,
  error = false,
  ...props
}) => {
  return (
    <input
      type="checkbox"
      className={ElementVariants({
        className,
        variant,
        error,
      })}
      {...props}
    />
  )
}
