import type { FlowComponent } from "solid-js";

const AppBar: FlowComponent = (props) => (
  <div class="h-full w-[64px] overflow-hidden hover:overflow-auto flex flex-col gap-[8px] py-[8px] pr-[10px] bg-grey-200 flex-shrink-0">
    {props.children}
  </div>
);

export default AppBar;

