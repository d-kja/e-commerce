import { ProductCard } from '@/components/client/product-card'
import { Button } from '@sw-ec/ui'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'

export default function Products() {
  return (
    <main className="flex gap-9 pt-16">
      <div className="max-w-[15rem] w-full flex flex-col gap-4">
        <strong className="flex gap-1 items-center">
          <SlidersHorizontal className="w-4 h-4" /> Filtros
        </strong>
      </div>

      <div className="flex flex-col flex-1 gap-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <strong className="text-xl font-semibold">
              Listagem de produtos
            </strong>
            <span className="text-sm font-normal">
              Mostrando 1-50 de 300 produtos
            </span>
          </div>

          <Button opt="outline">
            Ordernar <ChevronDown />
          </Button>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,auto))] place-items-center items-start justify-center md:justify-between gap-6">
          {Array.from({
            length: 10,
          }).map((_, idx) => (
            <ProductCard
              key={idx}
              id={`dkja-${idx}`}
              image="https://github.com/d-kja.png"
              name={`Product ${idx}`}
              prices={{
                default: 99.99,
                discounted: 79.99,
                discountRequirement: '...',
                installment: {
                  price: 9.99,
                  period: 10,
                },
              }}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
