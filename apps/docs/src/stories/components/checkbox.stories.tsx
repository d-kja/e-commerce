import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@sw-ec/ui'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    id: 'checkbox',
  },
  decorators: [
    (Story) => {
      return (
        <div className="w-full flex items-center gap-2">
          <label htmlFor="checkbox">Click here to select</label>
          <Story />
        </div>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
export const Primary: StoryObj<CheckboxProps> = {
  args: {
    variant: 'primary',
  },
}
export const Secondary: StoryObj<CheckboxProps> = {
  args: {
    variant: 'secondary',
  },
}
export const Error: StoryObj<CheckboxProps> = {
  args: {
    error: true,
  },
}
