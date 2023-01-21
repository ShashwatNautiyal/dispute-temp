import type { Component } from "solid-js";

import CardDigits from "./CardDigits";

const CardAmount: Component<{ amount: number, cardDigits: string }> = (props) => {
  return (
    <div class="flex gap-1 items-center">
      <CardDigits digits={props.cardDigits} />
      <span class="text-[6px] text-[#494949]">{"•"}</span>
      <p class="text-[13px] leading-5 font-medium text-[#494949]">${props.amount.toString()}</p>
    </div>
  );
};

export default CardAmount;
