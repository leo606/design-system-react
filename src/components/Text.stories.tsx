import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/text",
  component: Text,
  args: {
    children: "test",
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>;

export const Default: StoryObj = {};

export const Small: StoryObj = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj = {
  args: {
    size: "lg",
  },
};

export const CustomElement: StoryObj = {
  args: {
    asChild: true,
    children: <p>Test</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
};
