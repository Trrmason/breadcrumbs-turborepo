import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Text} from "breadcrumbs-ui";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Description: Story = {
  args: {
    weight: "normal",
    size: "medium",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "left",
    responsive: true,
  },
  render: (args) => (
    <Text {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
  ),
};

export const Title: Story = {
  args: {
    weight: "bold",
    size: "xx-large",
  },
  render: (args) => <Text {...args}> My Storybook </Text>,
};
