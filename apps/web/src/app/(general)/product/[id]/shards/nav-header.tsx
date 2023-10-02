import Link from 'next/link'
import { FC } from 'react'

import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'

interface NavHeaderProps {
  category: string
  productName: string
  activeImageIndex: number
  maxImagesAvailable: number
}

export const NavHeader: FC<NavHeaderProps> = ({
  productName,
  category,
  activeImageIndex,
  maxImagesAvailable,
}) => {
  const activeImage = activeImageIndex?.toString().padStart(2, '0')
  const totalImages = maxImagesAvailable?.toString().padStart(2, '0')

  return (
    <header className="flex flex-col gap-5">
      <div className="flex justify-between">
        <Link href={'/products/-1'}>
          <ArrowLeft className="w-[1.625rem] h-[1.625rem]" strokeWidth={1} />
        </Link>

        <div className="flex gap-2 items-end">
          <strong className="text-2xl font-normal">{activeImage}</strong>
          <span className="text-lg font-normal opacity-40">
            / {totalImages}
          </span>
        </div>
      </div>

      <div className="flex justify-between  items-center">
        <div className="flex gap-1 italic">
          <span className="text-xs font-normal opacity-25 capitalize">
            {category}
          </span>
          <span className="text-xs font-normal opacity-60">/</span>
          <strong className="text-xs font-normal capitalize">
            {productName}
          </strong>
        </div>

        <div className="flex gap-7">
          <ChevronLeft className="h-6 w-6" strokeWidth={1} />
          <ChevronRight className="h-6 w-6" strokeWidth={1} />
        </div>
      </div>
    </header>
  )
}
