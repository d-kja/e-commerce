import { ProductCard } from '@/components/client/product-card'
import { Button } from '@sw-ec/ui'
import { ChevronDown } from 'lucide-react'

export default function Products() {
  return (
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

        <div className="dropdown">
          <Button
            tabIndex={0}
            className="min-h-8 h-auto flex-1 px-3 py-2 text-xs rounded-full border border-neutral-content/75"
            opt="outline"
          >
            Ordenar por <ChevronDown className="w-4 h-4" />
          </Button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,auto))] place-items-center items-start justify-center md:justify-between gap-6">
        {Array.from({
          length: 10,
        }).map((_, idx) => (
          <ProductCard
            key={idx}
            id={`product-${idx}`}
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
  )
}
