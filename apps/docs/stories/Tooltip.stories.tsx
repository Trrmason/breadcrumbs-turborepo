import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
  import {Button, Flex, Link, Text, Tooltip} from 'breadcrumbs-ui';
import { Icon } from "breadcrumbs-icons";


  const meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
  } satisfies Meta<typeof Tooltip>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultTooltip: Story = {
    args: {
      text: "This is a tooltip",
      position: "top",
    },
    render: (args) => (
        <Flex className='h-[200px]' align='center'>
      <Tooltip {...args}>
        <Button className="px-4 py-2 bg-blue-500 text-white rounded">Hover over me</Button>
      </Tooltip>
      </Flex>
    ),
  };

  export const BottomTooltip: Story = {
    args: {
      text: "Tooltip at the bottom",
      position: "bottom",
    },
    render: (args) => (
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-red-500 text-white rounded">Hover over me</button>
      </Tooltip>
    ),
  };

  export const IconTooltip: Story = {
    args: {
      text: "Tooltip for icon",
      position: "top",
    },
    render: (args) => (
        <Flex className='h-[200px]' align='center'>

      <Tooltip {...args}>
        <Icon icon='apple'/>
      </Tooltip>
      </Flex>
    ),
  };

  export const ContentTooltip: Story = {
    args: {
      position: "top",
      content: <Flex className="w-[300px] p-3" direction='column' wrap><Text color='white'> This is a content tooltip. We can add extra things like links and icons </Text> <Flex className="mt-5"><Icon icon='google' className="mr-2"/><Link href="https://www.google.com/" external> Link too google </Link></Flex></Flex>
    },
    render: (args) => (
        <Flex align='center' justify="center" className='h-[400px] w-[400px] bg-background'>

      <Tooltip {...args}>
        <Icon icon='google'/>
      </Tooltip>
      </Flex>
    ),
  };