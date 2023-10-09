'use client'

import { FC, ReactNode } from 'react'

import { Toaster } from 'react-hot-toast'

interface BoundedContextProps {
  children: ReactNode
}

export const BoundedContext: FC<BoundedContextProps> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  )
}
