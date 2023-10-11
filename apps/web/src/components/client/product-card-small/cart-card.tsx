import { formatPrice } from '@/utils/formatters'
import { Button, IncrementButton } from '@sw-ec/ui'
import { X } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

interface CartCardProps {}

export const CartCard: FC<CartCardProps> = () => {
  const priceFormatted = formatPrice(79.99)

  return (
    <div title="Product" className="flex gap-3 w-full">
      <Image
        loading="lazy"
        width={100}
        height={80}
        className="w-full max-w-[100px] max-h-[80px] object-cover  rounded-lg"
        src={'https://github.com/d-kja.png'}
        alt="product image"
      />

      <div title="Product details" className="flex flex-col gap-2 flex-1">
        <div className="flex flex-col gap-1 relative">
          <strong className="text-sm font-medium">Smart phone</strong>
          <span className="text-xs font-normal">White</span>

          <Button
            squared
            variant="ghost"
            className="hover:bg-transparent hover:text-error absolute right-0 top-0 w-min min-h-0 h-min"
            title="Remover produto"
          >
            <X className="w-4 h-4" strokeWidth={2.5} />
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <IncrementButton
            amount={1}
            onDecrease={() => {}}
            onIncrease={() => {}}
            variant="sm"
            className="max-w-[4rem]"
          />
          <span className="text-xs font-normal">{priceFormatted}</span>
        </div>
      </div>
    </div>
  )
}
