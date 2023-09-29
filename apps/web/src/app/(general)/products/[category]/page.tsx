import { ProductCard } from '@/components/client/product-card'
import { ProductsHeader } from './shards/products-header'

export default function Products() {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <ProductsHeader />

      <div className="grid xs:grid-cols-[repeat(auto-fit,_minmax(200px,auto))] grid-cols-2 place-items-center items-start justify-center md:justify-between gap-6">
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
