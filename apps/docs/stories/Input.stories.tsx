import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Input} from "@breadcrumbs/ui";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Description: Story = {
  args: {
    placeholder: "This is a placeholder",
  },
  render: (args) => <Input {...args} />,
};

export const Password: Story = {
  args: {
    placeholder: "Password",
    label: "Password",
  },
  render: (args) => <Input {...args} type="password" />,
};

export const ErrorExample: Story = {
  args: {
    placeholder: "Error Example",
    borderColor: "error",
    textColor: "error",
  },
  render: (args) => {
    return <Input {...args} />;
  },
};
