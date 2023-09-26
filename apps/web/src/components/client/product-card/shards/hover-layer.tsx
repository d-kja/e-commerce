'use client'

import { FC } from 'react'

import { Button } from '@sw-ec/ui'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, ShoppingCart } from 'lucide-react'

interface HoverLayerProps {
  id: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const preventLinkRedirect = (event: any) => event.preventDefault()

const animationVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const childAnimationVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export const HoverLayer: FC<HoverLayerProps> = () => {
  const handleAddToWishlist = async (event: unknown) => {
    preventLinkRedirect(event)
  }

  const handleAddToCart = async (event: unknown) => {
    preventLinkRedirect(event)
  }

  return (
    <motion.div
      initial="hidden"
      whileHover="visible"
      variants={animationVariants}
      transition={{
        staggerChildren: 0.2,
      }}
      className="bg-base-300/40 border-2 border-base-300 absolute inset-0 rounded-xl flex justify-center items-center gap-3 focus:outline-none"
    >
      <motion.div
        variants={childAnimationVariants}
        transition={{
          bounce: true,
        }}
      >
        <Button squared className="rounded-full" onClick={handleAddToWishlist}>
          <Heart />
        </Button>
      </motion.div>

      <motion.div variants={childAnimationVariants}>
        <Button squared className="rounded-full" onClick={handleAddToCart}>
          <ShoppingCart />
        </Button>
      </motion.div>

      <motion.div variants={childAnimationVariants}>
        <Button squared className="rounded-full">
          <ArrowRight />
        </Button>
      </motion.div>
    </motion.div>
  )
}
