import EmbedPreview from "@/components/EmbedPreview";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <EmbedPreview {...args} />
) as StoryFn<
  ComponentProps<typeof EmbedPreview>
>;

export const Default = Template.bind({});

export default {
  title: "EmbedPreview",
  args: {
    siteName: "orderurl.com",
    title: "16 Places to Find Illustrations for Your Projects!",
    imageUrl: "https://images.unsplash.com/photo-1620191957898-8fe864c06237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  argTypes: {
    siteName: { control: "text" },
    title: { control: "text" },
    imageUrl: { control: "text" },
  },
} as Meta<ComponentProps<typeof EmbedPreview>>;
