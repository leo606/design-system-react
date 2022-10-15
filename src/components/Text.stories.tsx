import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/text",
  component: Text,
  args: {
    size: "md",
    children: "test",
  },
} as Meta<TextProps>;

export const Default: StoryObj = {};
