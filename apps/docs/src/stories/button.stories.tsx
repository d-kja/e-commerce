import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps, Wrapper } from '@sw-ec/ui'
import { Loader2, TrashIcon } from 'lucide-react'

export default {
  title: 'components/button',
  component: Button,
  args: {
    children: 'BUTTON',
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
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
  },
}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}
export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    opt: 'outline',
  },
}
export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
    className: 'text-zinc-900',
  },
}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    opt: 'outline',
    children: (
      <>
        {'Remove'} <TrashIcon strokeWidth={1.5} className="w-5 h-5" />
      </>
    ),
  },
}

export const OnlyIcon: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    opt: 'outline',
    ratio: 'squared',
    children: <Loader2 strokeWidth={1.5} className="w-5 h-5 animate-spin" />,
  },
}
