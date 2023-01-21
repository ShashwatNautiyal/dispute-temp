import FromDetailWrapper from "@/components/FromDetailWrapper";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <FromDetailWrapper
    fromName={args.fromName}
    fromDescription={args.fromDescription}

    // Storybook sends date in timestamp format. 
    fromDate={new Date(args.fromDate)}

    cardAmount={args.cardAmount}
    cardDigits={args.cardDigits}
  />
) as StoryFn<
  ComponentProps<typeof FromDetailWrapper>
>;

export const Default = Template.bind({});

export default {
  title: "FromDetailWrapper",
  args: {
    fromName: "Leslie Alexander",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 420.69,
    cardDigits: "5567"
  },
  argTypes: {
    fromName: { control: "text" },
    fromDescription: { control: "text" },
    fromDate: { control: "date" },

    cardDigits: { control: "text" },
    cardAmount: { control: "number" },
  },
} as Meta<ComponentProps<typeof FromDetailWrapper>>;