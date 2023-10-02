import { NavHeader } from './shards/nav-header'
import { ProductDescription } from './shards/product-description'

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
        <ProductDescription />
        <section title="preview"></section>
      </main>
    </div>
  )
}
