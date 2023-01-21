import Avatar from "@/components/Avatar";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <Avatar {...args} />
) as StoryFn<
  ComponentProps<typeof Avatar>
>;

export const Default = Template.bind({});

export default {
  title: "Avatar",
  args: {
    letter: "A",
  },
  argTypes: {
    letter: { control: "text" },
  },
} as Meta<ComponentProps<typeof Avatar>>;