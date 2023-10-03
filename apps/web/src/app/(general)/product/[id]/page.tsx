import { NavHeader } from './shards/nav-header'
import { ProductCarousel } from './shards/product-carousel'
import { ProductDescription } from './shards/product-description'

export default function Product() {
  return (
    <div
      className="mt-3 lg:px-20 py-8 lg:py-16 flex flex-col gap-9"
      title="product"
    >
      <NavHeader
        category="telefone"
        productName="iphone"
        activeImageIndex={1}
        maxImagesAvailable={5}
      />

      <main className="flex flex-col-reverse lg:flex-row lg:justify-between gap-10">
        <ProductDescription />
        <ProductCarousel />
      </main>
    </div>
  )
}
