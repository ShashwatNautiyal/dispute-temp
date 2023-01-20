import AppIndicatorBar from "@/components/AppIndicatorBar";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <div class="bg-white rounded p-6 group">
    <AppIndicatorBar {...args} />
  </div>
) as StoryFn<
  ComponentProps<typeof AppIndicatorBar>
>;

export const Default = Template.bind({});

export default {
  title: "AppIndicatorBar",
  args: {
    active: false
  },
  argTypes: {
    active: { control: "boolean" }
  },
} as Meta<ComponentProps<typeof AppIndicatorBar>>;