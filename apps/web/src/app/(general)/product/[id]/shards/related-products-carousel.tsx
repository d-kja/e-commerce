'use client'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface RelatedProductsCarouselProps {}

export const RelatedProductsCarousel: FC<RelatedProductsCarouselProps> = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: () => {
          if (window.innerWidth > 900) return 5
          if (window.innerWidth > 500) return 4
          return 2
        },
        spacing: 10,
      },
    },
    [
      (slider) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let timeout: any
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  const fakeSlides = Array.from({ length: 6 })

  return (
    <>
      <section title="Similar products" className="flex flex-col gap-4 px-2">
        <strong className="text-sm lg:text-base font-semibold text-base-content/60">
          Produtos similares
        </strong>
        <div className="overflow-hidden keen-slider fade-edges" ref={sliderRef}>
          {fakeSlides.map((_, idx) => (
            <Link
              href={`/product/product-${idx}`}
              key={idx}
              title={`Produto ${idx}`}
              scroll
            >
              <Image
                src={'https://i.imgur.com/8x4it95.png'}
                alt="Product"
                width={120}
                height={105}
                className="keen-slider__slide rounded-md aspect-video object-contain"
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
