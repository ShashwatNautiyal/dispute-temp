import type { Component } from "solid-js";

import MapBox from "@/components/MapBox";
import Stats from "@/components/Stats";
import HandleTransition from "@/components/HandleTransition";

const HomePage: Component = () => {
  return (
    <>
      <MapBox
        accessToken="pk.eyJ1IjoiYmh1bWFuIiwiYSI6ImNsYm5teG5oYTAyam0zbmxoOXg1NDQ5cDEifQ.yRnnevMJJVSEnRU1RwmYjQ"
      />

      <div class="absolute top-0 bottom-0 flex items-center right-16">
        <Stats />
      </div>
    </>
  );
};

export default () => (
  <HandleTransition>
    <HomePage />
  </HandleTransition>
);