import FromWrapper from "@/components/FromWrapper";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <FromWrapper
    name={args.name}
    description={args.description}

    // Storybook sends date in timestamp format. 
    date={new Date(args.date)}
  />
) as StoryFn<
  ComponentProps<typeof FromWrapper>
>;

export const Default = Template.bind({});

export default {
  title: "FromWrapper",
  args: {
    name: "Leslie Alexander",
    description: "Merchandise / Services not received",
    date: new Date(),
  },
  argTypes: {
    name: { control: "text" },
    description: { control: "text" },
    date: { control: "date" },
  },
} as Meta<ComponentProps<typeof FromWrapper>>;