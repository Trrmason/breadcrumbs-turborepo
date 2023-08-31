import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Link} from "@breadcrumbs/ui";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkStyle: Story = {
  args: {
    href: "",
    weight: "normal",
    size: "medium",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "left",
    cursor: "pointer",
    responsive: true,
  },

  render: (args) => (
    <Link {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Link>
  ),
};

export const External: Story = {
  args: {
    href: "https://www.google.com/",
    external: true,
  },
  render: (args) => <Link {...args}> Link to google </Link>,
};

export const LinkToText: Story = {
  args: {
    title: "Link to text",
    weight: "bold",
    size: "x-large",
    href: "/?path=/docs/components-text--docs",
  },
  render: (args) => <Link {...args}> This is a link to text docs </Link>,
};
