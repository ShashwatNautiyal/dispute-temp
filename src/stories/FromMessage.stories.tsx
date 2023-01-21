import FromMessage from "@/components/FromMessage";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <FromMessage {...args} />
) as StoryFn<
  ComponentProps<typeof FromMessage>
>;

export const Default = Template.bind({});

export default {
  title: "FromMessage",
  args: {
    title: "You have a new order #QWERTY",
    body: "Order Date: 04/01/2023",
    
    cardAmount: 420.69,
    cardDigits: "5567",
    
    fromName: "Leslie Alexander",
    fromTime: "10h",

    embedSiteName: "orderurl.com",
    embedTitle: "16 Places to Find Illustrations for Your Projects!",
    embedImageUrl: "https://images.unsplash.com/photo-1620191957898-8fe864c06237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  argTypes: {
    title: { control: "text" },
    body: { control: "text" },

    cardAmount: { control: "number" },
    cardDigits: { control: "text" },

    fromName: { control: "text" },
    fromTime: { control: "text" },

    embedSiteName: { control: "text" },
    embedTitle: { control: "text" },
    embedImageUrl: { control: "text" },
  },
} as Meta<ComponentProps<typeof FromMessage>>;
