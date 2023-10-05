'use client'

import { FC } from 'react'

import * as Collapsible from '@radix-ui/react-collapsible'
import { Button, IncrementButton } from '@sw-ec/ui'
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
        className="flex flex-col md:min-w-[27.5rem] max-h-[438px] flex-1 md:gap-9 gap-6"
      >
        <div className="flex flex-col gap-3 md:gap-8">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-lg lg:text-2xl font-bold tracking-[-0.6px]">
                IPhone Max Ultra XL 3000
              </h1>
              <Button
                variant="ghost"
                squared
                className="hover:text-error hover:bg-transparent group transition-colors"
                title="Adicionar a wishlist"
              >
                <Heart
                  className="w-5 md:w-6 h-5 md:h-6 group-hover:fill-current"
                  strokeWidth={1}
                />
              </Button>
            </div>

            <div>
              <div className="flex gap-2 items-center italic">
                <span className="text-base lg:text-xl font-normal tracking-[0.4px]">
                  R$ 1490,99
                </span>
                <span className="text-xs font-normal tracking-[0.4px] line-through opacity-40">
                  R$ 1499,99
                </span>
              </div>

              <span className="text-xs opacity-50">Em até 10x sem juros</span>
            </div>
          </div>

          <div className="text-sm lg:text-base font-normal leading-relaxed tracking-wide">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ad
            neque hic corporis quis ipsum ab possimus, quasi dolore, magnam
            pariatur beatae unde officiis rem quidem eius cupiditate perferendis
            exercitationem.
          </div>
        </div>

        {/* TODO - product options selection */}
        <div className="flex gap-5">
          <div className="w-4 lg:w-5 h-4 lg:h-5 rounded-full bg-purple-300 ring ring-base-300 ring-offset-1 cursor-pointer hover:brightness-90 transition-[filter]" />
          <div className="w-4 lg:w-5 h-4 lg:h-5 rounded-full bg-red-300 ring ring-base-300 ring-offset-1 cursor-pointer hover:brightness-90 transition-[filter]" />
          <div className="w-4 lg:w-5 h-4 lg:h-5 rounded-full bg-green-300 ring ring-base-300 ring-offset-1 cursor-pointer hover:brightness-90 transition-[filter]" />
          <div className="w-4 lg:w-5 h-4 lg:h-5 rounded-full bg-zinc-300 ring ring-base-300 ring-offset-1 cursor-pointer hover:brightness-90 transition-[filter]" />
        </div>

        <div className="flex gap-4 items-center">
          <IncrementButton
            border
            amount={1}
            onDecrease={() => {}}
            onIncrease={() => {}}
            className="max-w-[6.5rem] h-12 lg:h-auto lg:max-w-[8.75rem]"
          />
          <Button variant="primary" className="px-10" title="Comprar produto">
            Comprar <Plus className="w-4 lg:w-5 h-4 lg:h-5" />
          </Button>
        </div>

        {/* Description collapsible */}
        <Collapsible.Root className="flex flex-col gap-3">
          <Collapsible.Trigger className="flex flex-1 justify-between items-center hover:text-primary transition-colors group">
            <strong className="text-sm lg:text-base font-semibold text-base-content/70">
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
              className="flex flex-col gap-2 px-1 py-2 text-sm lg:text-base"
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
