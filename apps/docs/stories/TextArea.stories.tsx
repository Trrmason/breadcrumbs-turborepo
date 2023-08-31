import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {TextArea} from "@breadcrumbs/ui";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Description: Story = {
  args: {
    icon: "message",
    placeholder: "This is a placeholder",
    borderColor: "primary",
    className: "h-[200px]",
  },
  render: (args) => <TextArea {...args} />,
};

export const ErrorExample: Story = {
  args: {
    placeholder: "Error Example",
    borderColor: "error",
    textColor: "error",
  },
  render: (args) => {
    return <TextArea {...args} />;
  },
};
