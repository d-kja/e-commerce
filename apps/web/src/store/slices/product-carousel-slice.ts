import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider/react'
import { StateCreator } from 'zustand'

type AnyObject = Record<string, any> // eslint-disable-line
type SliderRefType = KeenSliderInstance<AnyObject, AnyObject, KeenSliderHooks>

export interface ProductCarouselSliceProps {
  sliderRef: SliderRefType | null
  activeSlide: number
  isSliderLoading: boolean
  next: (slideToChange: number) => void
  previous: (slideToChange: number) => void
  updateSliderRef: (ref: SliderRefType) => void
  updateActiveSlide: (activeSlide: number) => void
}

export const productCarouselSlice: StateCreator<ProductCarouselSliceProps> = (
  set,
  get,
) => ({
  sliderRef: null,
  activeSlide: 0,
  isSliderLoading: true,
  next: (slideToChange: number) => {
    const { sliderRef } = get()

    if (!sliderRef) return

    const totalSlides = sliderRef.track.details.slides.length
    if (totalSlides === slideToChange) return

    sliderRef.next()
  },
  previous: (slideToChange: number) => {
    const { sliderRef } = get()

    if (!sliderRef) return
    if (slideToChange < 0) return

    sliderRef.prev()
  },

  updateSliderRef: (ref: SliderRefType) => {
    if (!ref) return

    set({ sliderRef: ref, isSliderLoading: false })
  },
  updateActiveSlide: (activeSlide: number) => {
    set({ activeSlide })
  },
})
