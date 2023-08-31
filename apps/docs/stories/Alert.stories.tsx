import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Alert, Flex} from "@breadcrumbs/ui";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    alertType: "success",
    message: "This is a success message",
    onDismiss: () => null,
  },
  render: (args) => (
    <Flex className="bg-background w-fit h-fit p-10">
      <Alert {...args} />
    </Flex>
  ),
};

export const Error: Story = {
  args: {
    alertType: "error",
    message: "This is a error message",
  },
  render: (args) => (
    <Flex className="bg-background w-fit h-fit p-10">
      <Alert {...args} />
    </Flex>
  ),
};

export const Warning: Story = {
  args: {
    alertType: "warning",
    message: "This is a warning message",
  },
  render: (args) => (
    <Flex className="bg-background w-fit h-fit p-10">
      <Alert {...args} />
    </Flex>
  ),
};

export const Info: Story = {
  args: {
    alertType: "info",
    message: "This is a info message",
    onDismiss: () => null,
  },
  render: (args) => (
    <Flex className="bg-background w-fit h-fit p-10">
      <Alert {...args} />
    </Flex>
  ),
};

export const Children: Story = {
  args: {
    alertType: "info",
    message: "This is a info message",
  },
  render: (args) => (
    <Flex className="bg-background w-fit h-fit p-10">
      <Alert {...args} />
    </Flex>
  ),
};
