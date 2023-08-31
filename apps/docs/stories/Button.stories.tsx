import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Button, Flex} from "breadcrumbs-ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    size: "sm",
  },
  render: (args) => <Button {...args}> button </Button>,
};

export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => <Button {...args}> This is a button </Button>,
};

export const Medium: Story = {
  args: {
    className: "bg-primary",
    size: "md",
  },
  render: (args) => <Button {...args}> This is a button </Button>,
};

export const Large: Story = {
  args: {
    className: "bg-primary",
    size: "lg",
  },
  render: (args) => <Button {...args}> This is a button </Button>,
};

export const Full: Story = {
  args: {
    className: "bg-primary",
    size: "full",
  },
  render: (args) => (
    <Flex className="w-[200px] border border-secondary">
      <Button {...args}> This is a button </Button>
    </Flex>
  ),
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
