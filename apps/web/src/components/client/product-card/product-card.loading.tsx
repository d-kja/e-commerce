'use client'

import { LucideImage } from 'lucide-react'
import { FC } from 'react'

export const ProductCardLoading: FC = () => {
  return (
    <div>
      <div className="product-card flex flex-col gap-2 p-2 relative focus:outline-none focus-within:ring ring-base-300 rounded-xl">
        <div className="w-[208px] h-[184px] rounded-2xl bg-base-300 animate-pulse shadow border-4 border-base-200 grid place-items-center">
          <LucideImage className="w-28 h-28 text-base-200 drop-shadow" />
        </div>

        <div className="flex flex-col gap-1 py-3 px-4">
          <span className="h-5 w-[70px] bg-base-300 animate-pulse rounded" />
          <span className="h-5 w-[120px] bg-base-300 animate-pulse rounded" />
        </div>
      </div>
    </div>
  )
}
