import AppBar from "@/components/AppBar";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <AppBar {...args} />
) as StoryFn<
  ComponentProps<typeof AppBar>
>;

export const Default = Template.bind({});

export default {
  title: "AppBar",
  args: {
  },
  argTypes: {
  },
} as Meta<ComponentProps<typeof AppBar>>;
