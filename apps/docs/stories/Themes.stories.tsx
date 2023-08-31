import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Text, Flex} from "breadcrumbs-ui";
import { allThemes } from "breadcrumbs-theme";

const meta = {
  title: "Theme/Themes",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Themes: Story = {
  args: {
    direction: "row",
    justify: "center",
    className: "flex-wrap w-[800px]",
    wrap: true,
  },
  render: (args) => (
    <Flex {...args}>
      {Object.entries(allThemes).map(([name, theme]) => (
        <Flex className="m-10" direction="column" align="center">
          <Text size="x-large" className="m-2">
            {" "}
            {name}{" "}
          </Text>
          <Flex wrap align="center" justify="center">
            {Object.entries(theme).map(([key, color]) => {
              return (
                <Flex align="center" justify="start" className="w-[220px]">
                  <Flex className={`bg-[${color}] h-[30px] w-[30px] m-1`} />
                  <Text className="mx-5">{key}</Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      ))}
    </Flex>
  ),
};
