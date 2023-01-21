import type { Component } from "solid-js";

const FromName: Component<{ name: string, time: string }> = (props) => (
  <div class="flex gap-1 items-center w-fit">
    <p class="text-[15px] leading-5 font-medium text-[#1D1D1F] flex-1 truncate">
      {props.name}
    </p>
    <span class="text-[6px] text-[#494949]">{"•"}</span>
    <p class="text-[13px] leading-5 font-medium text-[#494949]">{props.time}</p>
  </div>
);

export default FromName;
