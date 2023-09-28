import { Button } from '@sw-ec/ui'
import { Heart, Plus } from 'lucide-react'
import { NavHeader } from './shards/nav-header'

export default function Product() {
  return (
    <div className="mt-3 lg:px-20 py-16 flex flex-col gap-9" title="product">
      <NavHeader
        category="celulares"
        productName="iphone"
        activeImageIndex={1}
        maxImagesAvailable={5}
      />

      <main className="flex gap-32">
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
                <Heart className="w-6 h-w-6" strokeWidth={1} />
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
              pariatur beatae unde officiis rem quidem eius cupiditate
              perferendis exercitationem.
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-5 h-5 rounded-full bg-purple-300 ring ring-base-300 ring-offset-1" />
            <div className="w-5 h-5 rounded-full bg-red-300 ring ring-base-300 ring-offset-1" />
            <div className="w-5 h-5 rounded-full bg-green-300 ring ring-base-300 ring-offset-1" />
            <div className="w-5 h-5 rounded-full bg-zinc-300 ring ring-base-300 ring-offset-1" />
          </div>
          <div>
            <Button variant="primary" className="px-10">
              Comprar <Plus className="w-5 h-5" />
            </Button>
          </div>

          <div>Detalhes do produto</div>
        </section>
        <section title="preview"></section>
      </main>
    </div>
  )
}
