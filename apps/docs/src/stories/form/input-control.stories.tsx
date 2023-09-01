import { Meta, StoryObj } from '@storybook/react'
import { Control, Input, InputLabel, InputProps } from '@sw-ec/ui'
import { AlertTriangleIcon } from 'lucide-react'

export default {
  title: 'form/input-control',
  component: Input,
  args: {
    placeholder: 'Johndoe@example.com',
    variant: 'primary',
  },
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {
  decorators: [
    (Story) => {
      return (
        <Control>
          <InputLabel>Insert your E-mail</InputLabel>
          <Story />
        </Control>
      )
    },
  ],
}

export const WithError: StoryObj<InputProps> = {
  args: {
    error: true,
  },
  decorators: [
    (Story) => {
      return (
        <Control error={{ message: 'Invalid E-mail' }}>
          <InputLabel>Insert your E-mail</InputLabel>
          <Story />
        </Control>
      )
    },
  ],
}

export const WithWarning: StoryObj<InputProps> = {
  args: {
    warning: true,
    placeholder: '*************',
  },
  decorators: [
    (Story) => {
      return (
        <Control
          error={{
            message: 'Weak password',
            type: 'warning',
          }}
        >
          <InputLabel>Create a password</InputLabel>
          <Story />
        </Control>
      )
    },
  ],
}

export const ErrorWithCustomIcon: StoryObj<InputProps> = {
  args: {
    error: true,
  },
  decorators: [
    (Story) => {
      return (
        <Control
          error={{
            message: 'Invalid E-mail',
            icon: <AlertTriangleIcon className="h-4 w-4" strokeWidth={1.75} />,
          }}
        >
          <InputLabel>Insert your E-mail</InputLabel>
          <Story />
        </Control>
      )
    },
  ],
}
