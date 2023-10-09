import { StateCreator } from 'zustand'

export interface ProductCarouselSliceProps {
  currentSlide: number
  next: () => void
  previous: () => void
}

export const productCarouselSlice: StateCreator<
  ProductCarouselSliceProps
> = () => ({
  currentSlide: 0,
  next: () => {},
  previous: () => {},
})
