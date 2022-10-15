import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/heading",
  component: Heading,
  args: {
    children: "Title",
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>;

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
    children: <h1>Test H1</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
};
