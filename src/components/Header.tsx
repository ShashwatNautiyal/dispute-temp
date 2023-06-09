import type { Component } from "solid-js";
import { ProviderIconLarge } from "./ProviderContainer";

const Header: Component<{
  title: string,
  description: string,
  
  onActionPress: () => unknown,
  actionName: string
}> = (props) => (
  <div class="flex gap-2">
    <ProviderIconLarge />
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-[2px]">
        <h1 class="text-[19px] leading-6 font-semibold">{props.title}</h1>
        <p class="text-[15px] leading-5 font-normal text-[#86868B]">{props.description}</p>
      </div>
      <div>
        <button class="text-[13px] leading-5 font-medium py-[2px] px-2 rounded-[16px] border border-blue-400 text-blue-400"
          onClick={props.onActionPress}
        >
          {props.actionName}
        </button>
      </div>
    </div>
  </div>
);

export default Header;
