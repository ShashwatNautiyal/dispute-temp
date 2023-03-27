import type { Component } from "solid-js";
import StripeLogo from "@/assets/icons/StripeLogo";

export const ProviderIconLarge = () => (
  <div class="h-16 w-16 flex justify-center items-center rounded-2xl outline outline-[1px] outline-[#86868B]">
    <div class="w-12 h-12">
      <StripeLogo />
    </div>
  </div>
)

export const ProviderIconRegular: Component = () => (
  <div class="h-6 w-6 flex justify-center items-center">
    <StripeLogo />
  </div>
)

export const ProviderName: Component<{ name: string }> = (props) => (
  <div class="flex gap-1 items-center w-[180px]">
    <ProviderIconRegular />
    <p class="text-[13px] leading-5 font-medium text-[#1D1D1F]">{props.name}</p>
  </div>
);

export const ProviderCount: Component<{ name: string, count: number }> = (props) => (
  <div class="flex gap-2 items-center justify-between">
    <ProviderName name={props.name} />
    <p class="text-[13px] leading-5 font-normal">{props.count}</p>
  </div>
);

const ProviderContainer: Component<{ name: string, count: number, onClick?: () => void, active?: boolean }> = (props) => (
  <button type="button" class="px-2 py-1 rounded-lg hover:bg-[#f5f5f5]"
    classList={{ "bg-[#ffffff]": !props.active, "bg-[#f5f5f5]": props.active }}
    onClick={() => props.onClick && props.onClick()}
  >
    <ProviderCount
      name={props.name}
      count={props.count}
    />
  </button>
);

export default ProviderContainer;
