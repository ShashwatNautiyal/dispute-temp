import CardAmount from "@/components/CardAmount";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <CardAmount {...args} />
) as StoryFn<
  ComponentProps<typeof CardAmount>
>;

export const Default = Template.bind({});

export default {
  title: "CardAmount",
  args: {
    amount: 420.69,
    cardDigits: "5567",
  },
  argTypes: {
    amount: { control: "number" },
    cardDigits: { control: "text" },
  },
} as Meta<ComponentProps<typeof CardAmount>>;