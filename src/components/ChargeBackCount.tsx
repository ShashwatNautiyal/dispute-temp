import { Component } from "solid-js";

const ChargeBackCount: Component<{
  name: string;
  number: number;
  dollar: number;
}> = (props) => {
  return (
    <div class="flex flex-col p-[0px] max-w-[163px] w-full max-h-[82px] h-full space-y-[2px]">
      <div class="flex font-[500] w-[163px] h-[20px] text-[15px] text-[#494949]">
        {props.name}
      </div>
      <div class="flex w-[163px] h-[60px] items-center gap-[4px]">
        <div class="text-[48px] font-[600] text-[#1D1D1F]">{props.number}</div>
        <div class="mt-[24px] text-[17px] font-[500] text-[#494949]">
          ${props.dollar}
        </div>
      </div>
    </div>
  );
};

export default ChargeBackCount;
