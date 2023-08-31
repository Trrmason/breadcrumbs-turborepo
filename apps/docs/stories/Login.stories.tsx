import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Login} from "@breadcrumbs/widgets";
import {Flex} from "@breadcrumbs/ui";

const meta = {
  title: "Widgets/Login",
  component: Login,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    widgetTitle: "Welcome back",
    socialLogin: true,
  },
  render: (args) => (
    <Flex
      className="w-screen h-screen bg-background"
      align="center"
      justify="center"
    >
      <Login {...args} onPasswordInput={(e) => console.log(e)} />
    </Flex>
  ),
};

export const Mobile: Story = {
  args: {
    socialLogin: true,
  },
  render: (args) => <Login {...args} />,
};
