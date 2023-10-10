'use client'

import { NavHeader } from './shards/nav-header'
import { ProductCarousel } from './shards/product-carousel'
import { ProductDescription } from './shards/product-description'
import { ProductExtraInformation } from './shards/product-extra-information'
import { RelatedProductsCarousel } from './shards/related-products-carousel'

export default function Product() {
  return (
    <div
      className="mt-3 lg:px-20 py-8 lg:py-16 flex flex-col gap-9"
      title="product"
    >
      <NavHeader category="telefone" productName="iphone" />

      <main className="flex flex-col gap-9">
        <section
          title="preview"
          className="flex flex-col-reverse lg:flex-row lg:justify-between gap-4 lg:gap-10"
        >
          <ProductDescription />
          <ProductCarousel />
        </section>

        <ProductExtraInformation />

        <div className="fade-edges">
          <hr />
        </div>

        <RelatedProductsCarousel />
      </main>
    </div>
  )
}
