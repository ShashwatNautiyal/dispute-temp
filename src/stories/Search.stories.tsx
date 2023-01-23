import Search from "@/components/Search";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <Search {...args} />
) as StoryFn<
  ComponentProps<typeof Search>
>;

export const Default = Template.bind({});

export default {
  title: "Search",
  args: {
    placeholder: "Search Providers",
    showSearchActions: false
  },
  argTypes: {
    placeholder: { control: "text" },
    showSearchActions: { control: "boolean" },
  },
} as Meta<ComponentProps<typeof Search>>;
