import { create } from 'zustand'

import { CartSliceProps, cartSlice } from './slices/cart-store'
import {
  ProductCarouselSliceProps,
  productCarouselSlice,
} from './slices/product-carousel-slice'

export type StoreProps = CartSliceProps & ProductCarouselSliceProps

export const useStore = create<StoreProps>((...options) => ({
  ...cartSlice(...options),
  ...productCarouselSlice(...options),
}))
