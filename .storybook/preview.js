import { render } from "solid-js/web";
import "@storybook/addon-console";

import "../src/styles/globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
  backgrounds: {
    default: "light gray",
    values: [
      {
        name: "white",
        value: "#ffffff",
      },
      {
        name: "light gray",
        value: "#F5F5F5",
      },
      {
        name: "black",
        value: "#000000",
      },
      {
        name: "dark gray",
        value: "#374151",
      },
    ],
  },
};

let disposeStory;

export const decorators = [
  (Story) => {
    if (disposeStory) {
      disposeStory();
    }

    const root = document.getElementById("root");
    const solidRoot = document.createElement("div");

    solidRoot.setAttribute("id", "solid-root");
    root.appendChild(solidRoot);

    disposeStory = render(Story, solidRoot);

    return solidRoot;
  },
];