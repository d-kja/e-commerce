import { FC } from 'react'

import { Minus, Plus } from 'lucide-react'
import { VariantProps, tv } from 'tailwind-variants'
import { Button } from '../ui/button'

const ElementVariants = tv({
  base: [
    'flex flex-1 items-center justify-between',
    'border border-transparent rounded-md',
    'italic',
  ],
  variants: {
    variant: {
      base: ['px-4 py-3', 'font-normal text-base'],
      sm: ['px-2 py-1', 'font-normal text-xs'],
    },
    border: {
      true: 'border-base-content/50',
    },
  },

  defaultVariants: {
    variant: 'base',
    border: false,
  },
})

const ButtonVariant = tv({
  variants: {
    variant: {
      base: 'w-4 h-4',
      sm: 'w-3 h-3',
    },
  },

  defaultVariants: {
    variant: 'base',
  },
})

type IncrementButtonVariantProps = VariantProps<typeof ElementVariants>

export interface IncrementButtonProps extends IncrementButtonVariantProps {
  className?: string
  amount: number
  onIncrease: () => void
  onDecrease: () => void
}

/**
 * @issues
 *
 * Unfortunately setting the width and height of both buttons without the important
 * tag is just not working with the daisyUI pre-styled components
 */
export const IncrementButton: FC<IncrementButtonProps> = ({
  amount = 1,
  variant = 'base',
  border = false,
  className = '',
}) => {
  return (
    <div className={ElementVariants({ variant, border, className })}>
      <Button
        variant="ghost"
        squared
        className="!w-auto !h-auto min-h-[auto] flex hover:bg-transparent hover:text-primary"
      >
        <Minus
          className={ButtonVariant({
            variant,
          })}
        />
      </Button>
      <span>{amount}</span>
      <Button
        variant="ghost"
        squared
        className="!w-auto !h-auto min-h-[auto] flex hover:bg-transparent hover:text-primary"
      >
        <Plus
          className={ButtonVariant({
            variant,
          })}
        />
      </Button>
    </div>
  )
}
