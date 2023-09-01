import { Info } from 'lucide-react'
import { FC, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const ElementVariants = tv({
  base: 'flex items-center gap-1 font-normal text-xs',
  variants: {
    type: {
      error: 'text-error',
      warning: 'text-warning',
    },
  },
})
type ElementVariantsProps = VariantProps<typeof ElementVariants>

interface ErrorLabelProps extends ElementVariantsProps {
  children: ReactNode
  className?: string
  errorIcon?: ReactNode
}

export const ErrorLabel: FC<ErrorLabelProps> = ({
  children,
  errorIcon,
  className = '',
  type = 'error',
}) => {
  const Icon = errorIcon

  if (!Icon) {
    return (
      <label
        role="alert"
        className={ElementVariants({
          className,
          type,
        })}
      >
        <Info className="h-4 w-4" strokeWidth={1.75} /> <span>{children}</span>
      </label>
    )
  }

  return (
    <label
      role="alert"
      className={ElementVariants({
        className,
        type,
      })}
    >
      {Icon} <span>{children}</span>
    </label>
  )
}
