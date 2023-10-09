import { create } from 'zustand'
import { CartSliceProps, cartSlice } from './slices/cart-store'

export type StoreProps = CartSliceProps

export const useStore = create<StoreProps>((...options) => ({
  ...cartSlice(...options),
}))
