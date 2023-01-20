import type { Component } from "solid-js";

const AppIndicatorBar: Component<{ active: boolean }> = (props) => {
  return (
    <span class="bg-black rounded-r-full block w-[4px]"
      classList={{
        "group-hover:h-[16px]": !props.active,
        "h-[32px]": props.active  
      }}
    />
  );
};

export default AppIndicatorBar;
