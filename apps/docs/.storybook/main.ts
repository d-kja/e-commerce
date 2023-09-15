import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: (config, options) => {
    if (options.configType === 'PRODUCTION') {
      config.base = '/e-commerce/'
    }

    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          '@storybook/addon-styling',
          '@storybook/theming',
          '@storybook/blocks',
        ],
      },
    })

    return config
  },
}
export default config
