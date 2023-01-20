import AppNotifications from "@/components/AppNotifications";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <AppNotifications {...args} />
) as StoryFn<
  ComponentProps<typeof AppNotifications>
>;

export const Default = Template.bind({});

export default {
  title: "AppNotifications",
  args: {
    text: "1.5K"
  },
  argTypes: {
    text: { control: "text" }
  },
} as Meta<ComponentProps<typeof AppNotifications>>;