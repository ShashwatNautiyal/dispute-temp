import type { Component } from "solid-js";
import { Show } from "solid-js";

import AppNotifications from "./AppNotifications";
import AppIndicatorBar from "./AppIndicatorBar";

const AppIcon: Component<{ active: boolean, letter: string, showNotifications: boolean, notifications?: string }> = (props) => {
  return (
    <div class="flex items-center gap-1 group">
      <AppIndicatorBar active={props.active} />
      <div class="relative h-[44px] w-[44px] bg-black text-white flex justify-center items-center"
        classList={{
          "rounded-full group-hover:rounded-xl": !props.active,
          "rounded-xl": props.active
        }}
      >
        <span class="h-[20] w-[20] text-[15px] leading-5 font-medium">
          {props.letter}
        </span>

        <Show when={props.showNotifications}>
          <div class="absolute bottom-0 right-0">
            <AppNotifications text={props.notifications} />
          </div>
        </Show>
      </div>
    </div>
  );
};

export default AppIcon;
