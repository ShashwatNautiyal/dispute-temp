import type { Component } from "solid-js";
import AppIcon from "./AppIcon";

const AppBar: Component = () => {
  return (
    <div class="h-full w-[64px] overflow-auto flex flex-col gap-[8px] py-[8px] pr-[10px] bg-grey-200">
      <AppIcon active={true} letter="A" showNotifications={false} />
      <AppIcon active={false} letter="B" showNotifications={true} notifications="99" />
    </div>
  );
};

export default AppBar;

