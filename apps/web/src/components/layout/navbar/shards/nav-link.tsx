'use client'

import { FC, ReactNode } from 'react'

import { NavLink as LinkUi } from '@sw-ec/ui'
import Link, { type LinkProps } from 'next/link'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface NavLinkProps extends LinkProps {
  children: ReactNode
}

export const NavLink: FC<NavLinkProps> = ({ children, ...props }) => {
  const path = usePathname()
  const isActivePath = props.href === path
  return (
    <>
      <LinkUi className="relative">
        <Link {...props}>
          {children}

          {isActivePath && (
            <motion.div
              layoutId="navigation-underline"
              className="absolute w-full h-[1.5px] bg-neutral-content rounded-full mt-1"
            />
          )}
        </Link>
      </LinkUi>
    </>
  )
}
