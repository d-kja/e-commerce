import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const RootElementVariants = tv({
  base: 'flex flex-col p-2 gap-2 w-full max-w-[14rem] rounded-xl',
})
const ImageElementVariants = tv({
  base: 'w-full h-[11.5rem] rounded-2xl object-cover',
})
const BodyElementVariants = tv({
  base: 'flex flex-col px-4 py-3 gap-1',
})

export interface RootProps
  extends ComponentProps<'div'>,
    VariantProps<typeof RootElementVariants> {}
export interface ImageProps extends VariantProps<typeof ImageElementVariants> {}
export interface BodyProps
  extends ComponentProps<'div'>,
    VariantProps<typeof BodyElementVariants> {}

export const Root = () => {}
export const Image = () => {}
export const Body = () => {}
