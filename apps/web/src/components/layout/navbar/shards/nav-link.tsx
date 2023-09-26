'use client'

import { FC, ReactNode } from 'react'

import { NavLink as LinkUi } from '@sw-ec/ui'
import Link, { type LinkProps } from 'next/link'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface NavLinkProps extends LinkProps {
  children: ReactNode
  className?: string
  layoutId?: string
}

export const NavLink: FC<NavLinkProps> = ({
  children,
  layoutId = 'navigation-underline',
  ...props
}) => {
  const path = usePathname()
  const isRoot = props.href.toString() === '/'
  const isActivePath = isRoot
    ? props.href.toString() === path
    : path.includes(props.href.toString())

  return (
    <>
      <LinkUi className="relative">
        <Link {...props} className="inline-block ">
          {children}

          {isActivePath && (
            <motion.div
              layoutId={layoutId}
              className="absolute w-full h-[1.5px] bg-neutral-content rounded-full pointer-events-none"
            />
          )}
        </Link>
      </LinkUi>
    </>
  )
}
