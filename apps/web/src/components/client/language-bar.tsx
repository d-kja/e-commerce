'use client'

import { LanguageBar as LanguageBarUi } from '@sw-ec/ui'
import { FC } from 'react'

interface LanguageBarProps {}

export const LanguageBar: FC<LanguageBarProps> = () => {
  return (
    <LanguageBarUi
      languages={['PT', 'EN']}
      selectedLanguage="PT-BR"
      onLanguageChange={() => {}}
    />
  )
}
