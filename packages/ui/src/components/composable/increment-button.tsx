import { FC } from 'react'

import { Minus, Plus } from 'lucide-react'
import { Button } from '../ui/button'

interface IncrementButtonProps {
  amount: number
  onIncrease: () => void
  onDecrease: () => void
}

export const IncrementButton: FC<IncrementButtonProps> = ({ amount = 1 }) => {
  const formattedAmount = amount.toString().padStart(2, '0')

  return (
    <div className="flex items-center justify-between rounded-md border border-base-content/50 px-4 py-3 max-w-[8rem]">
      <Button
        variant="ghost"
        squared
        className="!w-auto !min-h-[auto] !max-h-[auto] h-[10px] flex"
      >
        <Minus />
      </Button>
      {formattedAmount}
      <Button
        variant="ghost"
        squared
        className="!w-auto !min-h-[auto] h-[10px] flex"
      >
        <Plus />
      </Button>
    </div>
  )
}
