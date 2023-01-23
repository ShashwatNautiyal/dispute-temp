import Modal from "@/components/Modal";
import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => (
  <Modal {...args}>
    <div class="bg-white">
      <h1>Hello World</h1>
      <p>This is an example modal!</p>
    </div>
  </Modal>
)) as StoryFn<
  ComponentProps<typeof Modal>
>;

export const Default = Template.bind({});

export default {
  title: "Modal",
  args: {
    open: false,
  },
  argTypes: {
    open: { control: "boolean" }
  },
} as Meta<ComponentProps<typeof Modal>>;
