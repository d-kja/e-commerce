'use client'

import { LanguageBar as LanguageBarUI } from '@sw-ec/ui'
import { FC } from 'react'

interface LanguageBarProps {}

export const LanguageBar: FC<LanguageBarProps> = () => {
  return (
    <LanguageBarUI
      languages={['PT', 'EN']}
      selectedLanguage="PT-BR"
      onLanguageChange={() => {}}
    />
  )
}
