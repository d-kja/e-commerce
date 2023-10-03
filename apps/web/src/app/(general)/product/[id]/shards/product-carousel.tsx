/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { FC, MutableRefObject } from 'react'

import 'keen-slider/keen-slider.min.css'
import {
  KeenSliderHooks,
  KeenSliderInstance,
  useKeenSlider,
} from 'keen-slider/react'
import Image from 'next/image'

type CarouselRef = MutableRefObject<KeenSliderInstance<
  unknown,
  unknown,
  KeenSliderHooks
> | null>

function ThumbnailPlugin(mainRef: CarouselRef) {
  return (slider: any) => {
    function removeActive() {
      slider.slides.forEach((slide: any) => {
        slide.classList.remove('active')
      })
    }
    function addActive(idx: any) {
      slider.slides[idx].classList.add('active')
    }

    function addClickEvents() {
      slider.slides.forEach((slide: any, idx: any) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on('created', () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on('animationStarted', (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

interface ProductCarouselProps {
  perView?: number
}

export const ProductCarousel: FC<ProductCarouselProps> = ({ perView = 4 }) => {
  const [mainSliderRef, mainInstanceRef] = useKeenSlider({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(mainInstanceRef)],
  )

  const fakeSlides = Array.from({ length: 2 })

  return (
    <section
      title="Product preview"
      className="flex-1 flex flex-col gap-6 overflow-hidden"
    >
      <div ref={mainSliderRef} className="keen-slider h-full">
        {fakeSlides.map((_, idx) => (
          <Image
            src={'https://i.imgur.com/8x4it95.png'}
            alt="Product"
            width={710}
            height={450}
            className="keen-slider__slide rounded-md aspect-video object-contain"
            key={idx}
          />
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail h-24">
        {fakeSlides.map((_, idx) => (
          <Image
            src={'https://i.imgur.com/8x4it95.png'}
            alt="Product"
            width={120}
            height={105}
            className="keen-slider__slide border border-opacity-50 rounded-md object-contain cursor-pointer hover:border-primary transition-colors"
            key={idx}
          />
        ))}
      </div>
    </section>
  )
}
