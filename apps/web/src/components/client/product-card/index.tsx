'use client'

import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { formatPrice } from '@/utils/formatters'
import { motion } from 'framer-motion'
import { HoverLayer } from './shards/hover-layer'

interface ProductCardProps {
  id: string
  name: string
  image: string
  prices: {
    default: number
    discounted?: number
    discountRequirement?: string
    installment?: {
      price: number
      period: number
    }
  }
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  image,
  prices,
}) => {
  const hasDiscount = !!prices.discounted
  const hasInstallments = !!prices.installment?.price

  const defaultPrice = formatPrice(prices.default)
  const discountedPrice = formatPrice(prices.discounted ?? 0)

  const installmentPrice = formatPrice(prices.installment?.price ?? 0)
  const installmentText = `Em até ${prices.installment?.period}x de ${installmentPrice}`

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      animate={{
        opacity: 1,
      }}
    >
      <Link
        href={`/product/${id}`}
        title={`Produto ${name}`}
        className="product-card flex flex-col xs:gap-2 gap-1 p-2 relative focus:outline-none focus-within:ring ring-base-300 rounded-xl xs:w-auto w-min"
      >
        <span className="absolute top-2 right-4">
          {hasDiscount && (
            <span className="badge badge-sm badge-primary">Promoção</span>
          )}
        </span>
        <Image
          src={image}
          alt={`Produto ${name}`}
          placeholder="empty"
          className="rounded-2xl shadow max-h-[11.5rem] object-cover"
          width={208}
          height={184}
        />

        <div className="flex flex-col gap-1 py-3 px-4">
          <span className="text-sm">{name}</span>
          <div className="flex gap-[0.625rem] items-center">
            {hasDiscount ? (
              <>
                <strong className="text-base font-medium">
                  {discountedPrice}
                </strong>
                <span className="text-xs font-normal line-through opacity-30">
                  {defaultPrice}
                </span>
              </>
            ) : (
              <strong className="text-base font-medium">{defaultPrice}</strong>
            )}
          </div>
          {hasInstallments && (
            <span className="text-xs font-normal text-success">
              {installmentText}
            </span>
          )}
        </div>

        <HoverLayer id={id} />
      </Link>
    </motion.div>
  )
}
