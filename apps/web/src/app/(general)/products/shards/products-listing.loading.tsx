import { FC } from 'react'

import { ProductCardLoading } from '@/components/client/product-card/product-card.loading'

interface ProductsListingProps {}

export const ProductsListing: FC<ProductsListingProps> = () => {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="h-5 w-[220px] bg-base-300 rounded-md animate-pulse" />
          <span className="h-5 w-[220px] bg-base-300 rounded-md animate-pulse" />
        </div>

        <span className="h-8 w-[180px] bg-base-300 rounded-md animate-pulse" />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,auto))] place-items-center items-start justify-center md:justify-between gap-6">
        {Array.from({
          length: 10,
        }).map((_, idx) => (
          <ProductCardLoading key={idx} />
        ))}
      </div>
    </div>
  )
}
