import type { Component } from "solid-js";

const AppNotifications: Component<{ text: string }> = (props) => {
  return (
    <div class="rounded-full flex items-center justify-center px-1 bg-red-500 h-4 outline outline-2 outline-white"
      classList={{
        "w-4": props.text.length === 1,
        "w-full": props.text.length > 1
      }}
    >
      <span class="block text-white text-xs leading-4 font-medium text-center">
        {props.text}
      </span>
    </div>
  );
};

export default AppNotifications;
