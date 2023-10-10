import { LucideImage } from 'lucide-react'
import { FC } from 'react'

interface ProductCarouselLoadingProps {}

export const ProductCarouselLoading: FC<ProductCarouselLoadingProps> = () => {
  return (
    <section
      title="Product preview"
      className="flex-1 flex rounded-lg absolute inset-0 z-10 bg-base-100"
    >
      <div className="w-full product-card flex flex-col gap-2 p-2 relative focus:outline-none focus-within:ring ring-base-300 rounded-xl">
        <div className="flex-1 rounded-2xl bg-base-300 animate-pulse shadow border-4 border-base-200 grid place-items-center">
          <LucideImage className="w-28 h-28 text-base-200 drop-shadow" />
        </div>

        <div className="grid grid-cols-2 gap-3 h-20 max-w-[60%]">
          <div className="h-full rounded-2xl bg-base-300 animate-pulse shadow border-4 border-base-200 grid place-items-center">
            <LucideImage className="w-12 h-12 text-base-200 drop-shadow" />
          </div>
          <div className="h-full rounded-2xl bg-base-300 animate-pulse shadow border-4 border-base-200 grid place-items-center">
            <LucideImage className="w-12 h-12 text-base-200 drop-shadow" />
          </div>
        </div>
      </div>
    </section>
  )
}
