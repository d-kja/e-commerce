'use client'

import { FC } from 'react'

import { Button, IncrementButton } from '@sw-ec/ui'
import { Heart, Plus } from 'lucide-react'
import toast from 'react-hot-toast'

interface ProductDescriptionProps {}

export const ProductDescription: FC<ProductDescriptionProps> = () => {
  const handleAddToCart = async () => {
    toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
      loading: 'Adicionando ao carrinho',
      error: 'Ocorreu um erro',
      success: 'Produto adicionado',
    })
  }

  return (
    <>
      <section
        title="details"
        className="flex flex-col md:min-w-[27.5rem] flex-1 md:gap-9 gap-6"
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
        <div className="flex gap-5 mt-auto">
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
          <Button
            variant="primary"
            className="px-10"
            title="Comprar produto"
            onClick={handleAddToCart}
          >
            Comprar <Plus className="w-4 lg:w-5 h-4 lg:h-5" />
          </Button>
        </div>
      </section>
    </>
  )
}
