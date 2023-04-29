import type { Component } from "solid-js";

import Stats from "@/components/Stats";
import HandleTransition from "@/components/HandleTransition";

const HomePage: Component = () => {
  return (
    <div class="absolute top-0 bottom-0 flex items-center right-16">
      <Stats />
    </div>
  );
};

export default () => (
  <HandleTransition>
    <HomePage />
  </HandleTransition>
);
