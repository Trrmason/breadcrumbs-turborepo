// Dropdown.stories.tsx
import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from 'breadcrumbs-widgets'
import { Flex } from 'breadcrumbs-ui'

const meta: Meta = {
  title: 'Widgets/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

const CustomOption = () => (
  <div className="p-2 bg-red-500 text-white">Custom Option</div>
)

export const Default: Story = {
  args: {
    options: [
      'Option 1',
      'Option 2',
      'Option 3',
      <CustomOption key="custom" />,
    ],
    placeholder: 'Choose an option',
  },
  render: (args) => (
    <Flex className="w-[400px] h-[400px]" align="center" justify="center">
      <Dropdown
        {...args}
        onSelect={(option) => console.log(`Selected: ${option}`)}
      />
    </Flex>
  ),
}
