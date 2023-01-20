import AppIcon from "@/components/AppIcon";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <AppIcon {...args} />
) as StoryFn<
  ComponentProps<typeof AppIcon>
>;

export const Default = Template.bind({});

export default {
  title: "AppIcon",
  args: {
    active: false,
    letter: "A",
    showNotifications: false,
    notifications: "1.5K"
  },
  argTypes: {
    active: { control: "boolean" },
    letter: { control: "text" },
    showNotifications: { control: "boolean" },
    notifications: { control: "text" },
  },
} as Meta<ComponentProps<typeof AppIcon>>;