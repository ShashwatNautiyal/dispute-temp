import type { Component } from "solid-js";

import MapBox from "@/components/MapBox";
import HandleTransition from "@/components/HandleTransition";

const HomePage: Component = () => {
  return (
    <MapBox
      accessToken="pk.eyJ1IjoiYmh1bWFuIiwiYSI6ImNsYm5teG5oYTAyam0zbmxoOXg1NDQ5cDEifQ.yRnnevMJJVSEnRU1RwmYjQ"
    />
  );
};

export default () => (
  <HandleTransition>
    <HomePage />
  </HandleTransition>
);