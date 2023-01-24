import type { Component } from "solid-js";
import { createSignal } from "solid-js";

const [showMainLoader, setShowMainLoader] = createSignal(false); 

const MainLoader: Component = () => {
  return (
    <div class="z-[999] absolute inset-0 bg-white"
      style={{ transition: showMainLoader()
          ? "opacity .25s ease-in, visibility 0s ease-in 0s"
          : "visibility 0s .25s, opacity .25s"
      }}
      classList={{
        "opacity-100 visible": showMainLoader(),
        "opacity-0 invisible": !showMainLoader()
      }}
    />
  )
};

export default MainLoader;
export { setShowMainLoader };
