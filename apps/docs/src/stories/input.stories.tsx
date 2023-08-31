import { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps, Wrapper } from '@sw-ec/ui'

export default {
  title: 'components/input',
  component: Input,
  args: {
    placeholder: 'Example',
  },
  decorators: [
    (Story) => {
      return (
        <Wrapper>
          <Story />
        </Wrapper>
      )
    },
  ],
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {}
export const Primary: StoryObj<InputProps> = {
  args: {
    variant: 'primary',
  },
}
export const Secondary: StoryObj<InputProps> = {
  args: {
    variant: 'secondary',
  },
}
export const Outline: StoryObj<InputProps> = {
  args: {
    variant: 'primary',
  },
}
export const Ghost: StoryObj<InputProps> = {
  args: {
    variant: 'ghost',
    className: 'text-zinc-900',
  },
}
export const WithIcon: StoryObj<InputProps> = {
  args: {
    variant: 'primary',
    placeholder: 'Example@mail.com',
  },
}

export const Disabled: StoryObj<InputProps> = {
  args: {
    variant: 'primary',
    disabled: true,
    placeholder: 'Example@mail.com',
  },
}
