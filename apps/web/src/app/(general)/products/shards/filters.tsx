'use client'

import { FC } from 'react'

import * as Collapsible from '@radix-ui/react-collapsible'

import { Button, Checkbox, Input } from '@sw-ec/ui'
import { motion } from 'framer-motion'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'

import { formatPrice } from '@/utils/formatters'

interface FiltersProps {}

const collapsibleRootVariants = {
  default: {
    y: -5,
    opacity: 0,
    display: 'none',
  },
  animate: {
    y: 0,
    opacity: 1,
    display: 'flex',
  },
  transition: {
    staggerChildren: 1,
  },
}

const collapsibleItemVariants = {
  default: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

export const Filters: FC<FiltersProps> = () => {
  return (
    <div className="max-w-[15rem] w-full flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <strong className="flex items-center gap-1 text-base font-bold">
          <SlidersHorizontal className="w-4 h-4" /> Filtros
        </strong>

        <button className="link link-secondary text-sm">limpar filtros</button>
      </div>

      <hr />

      {/* Category collapsible */}
      <Collapsible.Root className="flex flex-col gap-3" defaultOpen>
        <Collapsible.Trigger className="flex flex-1 justify-between items-center hover:text-primary transition-colors group">
          <strong>Todas as categorias</strong>{' '}
          <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" />
        </Collapsible.Trigger>
        <Collapsible.Content asChild>
          <motion.div
            initial={collapsibleRootVariants.default}
            exit={collapsibleRootVariants.default}
            animate={collapsibleRootVariants.animate}
            transition={collapsibleRootVariants.transition}
            className="flex flex-col gap-2 px-1 py-2"
          >
            <motion.label
              initial={collapsibleItemVariants.default}
              exit={collapsibleItemVariants.default}
              animate={collapsibleItemVariants.animate}
              className="flex justify-between items-center text-sm cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <Checkbox className="!checkbox-sm" /> Sapatos
              </span>
              <span className="text-xs opacity-50">12</span>
            </motion.label>

            <motion.label
              initial={collapsibleItemVariants.default}
              exit={collapsibleItemVariants.default}
              animate={collapsibleItemVariants.animate}
              className="flex justify-between items-center text-sm cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <Checkbox className="!checkbox-sm" /> Peixe
              </span>
              <span className="text-xs opacity-50">2</span>
            </motion.label>

            <motion.label
              initial={collapsibleItemVariants.default}
              exit={collapsibleItemVariants.default}
              animate={collapsibleItemVariants.animate}
              className="flex justify-between items-center text-sm cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <Checkbox className="!checkbox-sm" /> Feijão
              </span>
              <span className="text-xs opacity-50">32</span>
            </motion.label>

            <motion.label
              initial={collapsibleItemVariants.default}
              exit={collapsibleItemVariants.default}
              animate={collapsibleItemVariants.animate}
              className="flex justify-between items-center text-sm cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <Checkbox className="!checkbox-sm" /> Carro
              </span>
              <span className="text-xs opacity-50">4</span>
            </motion.label>

            <motion.label
              initial={collapsibleItemVariants.default}
              exit={collapsibleItemVariants.default}
              animate={collapsibleItemVariants.animate}
              className="flex justify-between items-center text-sm cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <Checkbox className="!checkbox-sm" /> Ventilador
              </span>
              <span className="text-xs opacity-50">14</span>
            </motion.label>
          </motion.div>
        </Collapsible.Content>
      </Collapsible.Root>

      <hr />

      {/* Price collapsible */}
      <Collapsible.Root className="flex flex-col gap-3" defaultOpen>
        <Collapsible.Trigger className="flex flex-1 justify-between items-center hover:text-primary transition-colors group">
          <strong>Por preço</strong>{' '}
          <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" />
        </Collapsible.Trigger>
        <Collapsible.Content asChild>
          <motion.div
            initial={collapsibleRootVariants.default}
            exit={collapsibleRootVariants.default}
            animate={collapsibleRootVariants.animate}
            transition={collapsibleRootVariants.transition}
            className="flex flex-col gap-6 px-1 py-2"
          >
            <div className="flex flex-col gap-2">
              <motion.label
                initial={collapsibleItemVariants.default}
                exit={collapsibleItemVariants.default}
                animate={collapsibleItemVariants.animate}
                className="flex gap-3 items-center text-sm cursor-pointer"
              >
                <Checkbox className="!checkbox-sm" /> Até {formatPrice(160)}
              </motion.label>

              <motion.label
                initial={collapsibleItemVariants.default}
                exit={collapsibleItemVariants.default}
                animate={collapsibleItemVariants.animate}
                className="flex gap-3 items-center text-sm cursor-pointer"
              >
                <Checkbox className="!checkbox-sm" /> De {formatPrice(160)} até{' '}
                {formatPrice(240)}
              </motion.label>
            </div>

            <motion.div
              initial={collapsibleItemVariants.default}
              exit={collapsibleItemVariants.default}
              animate={collapsibleItemVariants.animate}
              className="flex flex-col gap-3"
            >
              <div className="flex justify-between gap-2">
                <Input
                  placeholder="Valor min."
                  className="input-bordered min-w-0 h-8 px-4 py-3"
                />

                <div className="w-[3px] h-3/4 my-auto bg-base-300/50 rounded-full" />

                <Input
                  placeholder="Max."
                  className="input-bordered min-w-0 h-8 px-4 py-3"
                />
              </div>
              <Button
                opt="outline"
                className="min-h-8 h-auto flex-1 px-4 py-3 text-xs"
              >
                Salvar preço
              </Button>
            </motion.div>
          </motion.div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  )
}
