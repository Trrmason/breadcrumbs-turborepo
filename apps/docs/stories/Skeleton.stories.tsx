import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Skeleton} from "@breadcrumbs/ui";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonExample: Story = {
  render: (args) => <Skeleton {...args} className="h-2 w-40" />,
};

export const ImageLoading: Story = {
  render: (args) => <Skeleton {...args} className="h-40 w-40" />,
};

export const WithIcon: Story = {
  render: (args) => (
    <Skeleton {...args} className="h-40 w-40" icon="mail" iconSize={60} />
  ),
};
