import { Meta } from '@storybook/react'
import { NavLink, NavLinkProps } from '@sw-ec/ui'

export default {
  title: 'components/nav-link',
  component: NavLink,
  args: {
    children: <a>Link Example</a>,
  },
} as Meta<NavLinkProps>

export const Default = {}
