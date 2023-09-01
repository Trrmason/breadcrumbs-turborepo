// Switch.stories.tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from 'breadcrumbs-ui'

const meta: Meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Switch Me',
    isChecked: false,
    onChange: () => null,
  },
  render: (args) => <Switch {...args} />,
}
