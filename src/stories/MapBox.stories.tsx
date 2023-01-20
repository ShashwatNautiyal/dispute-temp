import MapBox from "@/components/MapBox";
import AppBar from "@/components/AppBar";

import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

const Template = ((args) => 
  <MapBox {...args} />
) as StoryFn<
  ComponentProps<typeof MapBox>
>;

export const MapBoxOnly = Template.bind({});

const TemplateWithSideBar = ((args) =>
  <main class="h-screen w-screen flex">
  <div class="w-max">

  <AppBar />
  </div>
    <MapBox {...args} />
  </main>
) as StoryFn<
  ComponentProps<typeof MapBox>
>;

export const MapBoxWithSideBar = TemplateWithSideBar.bind({});
MapBoxWithSideBar.paramaters = {
  layout: "fullscreen"
}

export default {
  title: "MapBox",
  args: {
    accessToken: "pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg"
  },
  argTypes: {
    accessToken: { control: "text" }
  },
} as Meta<ComponentProps<typeof MapBox>>;
