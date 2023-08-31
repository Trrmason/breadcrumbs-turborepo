import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Icon from "@breadcrumbs/icons";
import {Button, Badge} from "@breadcrumbs/ui/src";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconBadge: Story = {
  render: (args) => (
    <Badge {...args}>
      <Icon icon="mail" />
    </Badge>
  ),
};

export const ButtonBadge: Story = {
  render: (args) => (
    <Badge {...args}>
      <Button icon="apple"> This is a button</Button>
    </Badge>
  ),
};
