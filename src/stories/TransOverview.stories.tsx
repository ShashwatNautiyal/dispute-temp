import TransOverview from "@/components/TransOverview";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <TransOverview
    avatarLetter={args.avatarLetter}

    fromName={args.fromName}
    fromDescription={args.fromDescription}

    // Storybook sends date in timestamp format. 
    fromDate={new Date(args.fromDate)}

    cardAmount={args.cardAmount}
    cardDigits={args.cardDigits}
  />
) as StoryFn<
  ComponentProps<typeof TransOverview>
>;

export const Default = Template.bind({});

export default {
  title: "TransOverview",
  args: {
    avatarLetter: "L",

    fromName: "Leslie Alexander",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 420.69,
    cardDigits: "5567"
  },
  argTypes: {
    avatarLetter: { control: "text" },

    fromName: { control: "text" },
    fromDescription: { control: "text" },
    fromDate: { control: "date" },

    cardDigits: { control: "text" },
    cardAmount: { control: "number" },
  },
} as Meta<ComponentProps<typeof TransOverview>>;