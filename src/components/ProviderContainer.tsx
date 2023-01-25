import type { Component } from "solid-js";

export const ProviderIconLarge = () => (
  <div class="h-[64px] w-[64px] flex justify-center items-center rounded-[16px] outline outline-[1px] outline-[#86868B]">
    <div class="bg-black w-[48px] h-[48px]"></div>
  </div>
)

export const ProviderIconRegular: Component = () => (
  <div class="h-[24px] w-[24px] flex justify-center items-center">
    <div class="bg-black w-[12px] h-[12px]"></div>
  </div>
)

export const ProviderName: Component<{ name: string }> = (props) => (
  <div class="flex gap-1 items-center w-[180px]">
    <ProviderIconRegular />
    <p class="text-[15px] leading-5 font-medium text-[#1D1D1F]">{props.name}</p>
  </div>
);

export const ProviderCount: Component<{ name: string, count: number }> = (props) => (
  <div class="flex gap-2 items-center justify-between">
    <ProviderName name={props.name} />
    <p class="text-[15px] leading-5 font-medium">{props.count}</p>
  </div>
);

const ProviderContainer: Component<{ name: string, count: number }> = (props) => (
  <div class="px-2 py-1 rounded-[8px] bg-[#ffffff] hover:bg-[#f5f5f5]">
    <ProviderCount
      name={props.name}
      count={props.count}
    />
  </div>
);

export default ProviderContainer;
