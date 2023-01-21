import FromName from "@/components/FromName";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <FromName {...args} />
) as StoryFn<
  ComponentProps<typeof FromName>
>;

export const Default = Template.bind({});

export default {
  title: "FromName",
  args: {
    name: "Leslie Alexander",
    time: "10h"
  },
  argTypes: {
    name: { control: "text" },
    time: { control: "text" },
  },
} as Meta<ComponentProps<typeof FromName>>;
