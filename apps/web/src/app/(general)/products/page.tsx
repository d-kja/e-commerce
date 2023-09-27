import { Filters } from './shards/filters'
import { ProductsListing } from './shards/products-listing'

export default function Products() {
  return (
    <main className="flex gap-9 pt-16">
      <Filters />
      <ProductsListing />
    </main>
  )
}
