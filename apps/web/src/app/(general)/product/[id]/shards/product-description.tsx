'use client'

import { FC } from 'react'

import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '@sw-ec/ui'
import { motion } from 'framer-motion'

import { ChevronDown, Heart, Plus } from 'lucide-react'

interface ProductDescriptionProps {}

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

export const ProductDescription: FC<ProductDescriptionProps> = () => {
  return (
    <>
      <section
        title="details"
        className="flex flex-col max-w-[440px] flex-1 gap-9"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold tracking-[-0.6px]">
                IPhone Max Ultra XL 3000
              </h1>
              <Heart
                className="w-6 h-w-6 hover:text-error hover:fill-current transition-colors cursor-pointer rounded-full focus:ring ring-offset-2"
                strokeWidth={1}
              />
            </div>

            <div>
              <div className="flex gap-2 items-center italic">
                <span className="text-xl font-normal tracking-[0.4px]">
                  R$ 1490,99
                </span>
                <span className="text-sm font-normal tracking-[0.4px] line-through opacity-25">
                  R$ 1499,99
                </span>
              </div>

              <span className="text-sm opacity-50">Em até 10x sem juros</span>
            </div>
          </div>

          <div className="text-base font-normal leading-relaxed tracking-wide">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ad
            neque hic corporis quis ipsum ab possimus, quasi dolore, magnam
            pariatur beatae unde officiis rem quidem eius cupiditate perferendis
            exercitationem.
          </div>
        </div>

        <div className="flex gap-5">
          <div className="w-5 h-5 rounded-full bg-purple-300 ring ring-base-300 ring-offset-1 cursor-pointer hover:brightness-90 transition-[filter]" />
          <div className="w-5 h-5 rounded-full bg-red-300 ring ring-base-300 ring-offset-1 cursor-pointer hover:brightness-90 transition-[filter]" />
          <div className="w-5 h-5 rounded-full bg-green-300 ring ring-base-300 ring-offset-1 cursor-pointer hover:brightness-90 transition-[filter]" />
          <div className="w-5 h-5 rounded-full bg-zinc-300 ring ring-base-300 ring-offset-1 cursor-pointer hover:brightness-90 transition-[filter]" />
        </div>
        <div>
          <Button variant="primary" className="px-10" title="Comprar produto">
            Comprar <Plus className="w-5 h-5" />
          </Button>
        </div>

        {/* Description collapsible */}
        <Collapsible.Root className="flex flex-col gap-3">
          <Collapsible.Trigger className="flex flex-1 justify-between items-center hover:text-primary transition-colors group">
            <strong className="font-medium text-base-content/70">
              Detalhes do produto
            </strong>
            <ChevronDown
              className="transition-transform group-data-[state=open]:rotate-180"
              strokeWidth={1}
            />
          </Collapsible.Trigger>
          <Collapsible.Content asChild>
            <motion.p
              initial={collapsibleRootVariants.default}
              exit={collapsibleRootVariants.default}
              animate={collapsibleRootVariants.animate}
              transition={collapsibleRootVariants.transition}
              className="flex flex-col gap-2 px-1 py-2"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              natus magnam odit ullam ipsam ad ut vel dolores molestias
              provident perspiciatis ipsa velit cum, illo asperiores ab
              praesentium laudantium error.
            </motion.p>
          </Collapsible.Content>
        </Collapsible.Root>
      </section>
    </>
  )
}
