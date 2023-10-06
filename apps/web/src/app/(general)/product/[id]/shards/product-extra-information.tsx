'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FC } from 'react'

interface ProductExtraInformationProps {}

const collapsibleRootVariants = {
  default: {
    opacity: 0,
    display: 'none',
  },
  animate: {
    opacity: 1,
    display: 'flex',
  },
  transition: {
    staggerChild: 0.2,
  },
}

export const ProductExtraInformation: FC<ProductExtraInformationProps> = () => {
  return (
    <section title="additional information">
      {/* Description collapsible */}
      <Collapsible.Root className="flex flex-col gap-3">
        <Collapsible.Trigger className="flex flex-1 gap-2 items-center hover:text-primary transition-colors group border border-transparent hover:border-base-300 px-2 py-1 rounded-lg">
          <ChevronDown
            className="transition-transform group-data-[state=open]:rotate-180"
            strokeWidth={1.5}
          />
          <strong className="text-sm lg:text-base font-semibold text-base-content/60">
            Detalhes do produto
          </strong>
        </Collapsible.Trigger>
        <Collapsible.Content asChild>
          <motion.p
            initial={collapsibleRootVariants.default}
            exit={collapsibleRootVariants.default}
            animate={collapsibleRootVariants.animate}
            transition={collapsibleRootVariants.transition}
            className="flex flex-col gap-2 px-1 py-2 text-sm lg:text-base"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            natus magnam odit ullam ipsam ad ut vel dolores molestias provident
            perspiciatis ipsa velit cum, illo asperiores ab praesentium
            laudantium error.
          </motion.p>
        </Collapsible.Content>
      </Collapsible.Root>
    </section>
  )
}
