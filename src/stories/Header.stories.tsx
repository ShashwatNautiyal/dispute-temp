import Header from "@/components/Header";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <Header {...args} onActionPress={() => console.info("pressed on", args.actionName, "button")} />
) as StoryFn<
  ComponentProps<typeof Header>
>;

export const Default = Template.bind({});

export default {
  title: "Header",
  args: {
    title: "Stripe",
    description: "Add and manage your Stripe accounts",
    actionName: "Add new"
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    actionName: { control: "text" },
  },
} as Meta<ComponentProps<typeof Header>>;
