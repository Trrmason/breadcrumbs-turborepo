import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Text, Flex} from "@breadcrumbs/ui/src";
import { allThemes } from "@breadcrumbs/theme/src/colors";

const meta = {
  title: "Theme/Colors",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  args: {
    direction: "row",
    justify: "center",
    className: "bg-background",
    wrap: true,
  },
  render: (args) => (
    <Flex {...args}>
      {Object.entries(allThemes)
        .slice(0, 1)
        .map(([, theme]) =>
          Object.entries(theme).map(([key]) => {
            return (
              <Flex align="center" justify="start" className="m-5 w-[220px]">
                <Flex className={`bg-${key} h-[50px] w-[50px]`} />
                <Text className="ml-5">{key}</Text>
              </Flex>
            );
          })
        )}
    </Flex>
  ),
};
