import Visa from "@/assets/icons/Visa";
import type { Component } from "solid-js";

const CardDigits: Component<{ digits: string }> = (props) => {
  return (
    <div class="flex items-center gap-1">
      <div class="h-[24px] w-[24px] flex items-center justify-center">
        <Visa />
      </div>
      <span class="block text-[13px] leading-[20px] font-medium text-[#494949]">
        {props.digits}
      </span>
    </div>
  );
};

export default CardDigits;
