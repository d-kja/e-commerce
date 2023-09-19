import { Meta, StoryObj } from '@storybook/react'
import { LanguageBar, LanguageBarProps } from '@sw-ec/ui'

export default {
  title: 'Shards/Language-bar',
  component: LanguageBar,
  args: {
    languages: ['PT/BR', 'EN/US'],
    selectedLanguage: 'PT/BR',
    onLanguageChange() {},
  },
} as Meta<LanguageBarProps>

export const Default: StoryObj<LanguageBarProps> = {}
