import type { Preview } from '@storybook/react'

import { withThemeByClassName } from '@storybook/addon-styling'
import { themes } from '@storybook/theming'

import '@sw-ec/ui/dist/index.css'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
}

export default preview
