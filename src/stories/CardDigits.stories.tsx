import CardDigits from "@/components/CardDigits";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <CardDigits {...args} />
) as StoryFn<
  ComponentProps<typeof CardDigits>
>;

export const Default = Template.bind({});

export default {
  title: "CardDigits",
  args: {
    digits: "5567",
  },
  argTypes: {
    digits: { control: "text" },
  },
} as Meta<ComponentProps<typeof CardDigits>>;