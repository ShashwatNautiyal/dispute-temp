import {
  default as ProviderContainerComponent,
  ProviderCount as ProviderCountComponent,
  ProviderName as ProviderNameComponent,

  ProviderIconLarge as ProviderIconLargeComponent
} from "@/components/ProviderContainer";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const ProviderCountTemplate = ((args) => 
  <ProviderCountComponent {...args} />
) as StoryFn<
  ComponentProps<typeof ProviderCountComponent>
>;

export const ProviderCount = ProviderCountTemplate.bind({});

const ProviderNameTemplate = ((args) => 
  <ProviderNameComponent name={args.name} />
) as StoryFn<
  ComponentProps<typeof ProviderNameComponent>
>;

export const ProviderName = ProviderNameTemplate.bind({});

const ProviderContainerTemplate = ((args) => 
  <ProviderContainerComponent {...args} />
) as StoryFn<
  ComponentProps<typeof ProviderContainerComponent>
>;

export const ProviderContainer = ProviderContainerTemplate.bind({});

const ProviderIconLargeTemplate = (() =>
  <ProviderIconLargeComponent />
) as StoryFn<
  ComponentProps<typeof ProviderIconLargeComponent>
>;

export const ProviderIconLarge = ProviderIconLargeTemplate.bind({});

export default {
  title: "Provider",
  args: {
    count: 3,
    name: "Stripe"
  },
  argTypes: {
    count: { control: "number" },
    name: { control: "text" },
  },
} as Meta<ComponentProps<typeof ProviderContainerComponent>>;
