import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Checkbox} from "breadcrumbs-ui";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Description: Story = {
  render: (args) => <Checkbox {...args} />,
};
