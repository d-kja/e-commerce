import type { Preview } from '@storybook/react'

import { withThemeByClassName } from '@storybook/addon-styling'
import { themes } from '@storybook/theming'

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
// import '../src/index.css'

import '@sw-ec/ui/src/styles/index.css'

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
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
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
