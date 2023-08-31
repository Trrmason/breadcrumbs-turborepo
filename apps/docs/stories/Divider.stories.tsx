import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Divider, Flex} from "@breadcrumbs/ui/src";


const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DividerExample: Story = {
  render: (args) => (
    <Flex className="w-[500px]">
      <Divider {...args} />
    </Flex>
  ),
};
