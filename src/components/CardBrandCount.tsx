import { Component } from "solid-js";

const CardBrandCount: Component<{
  type: "visa" | "mastercard";
  number: string;
}> = (props) => {
  const bg = props.type === "visa" ? "bg-[#1434CB]" : "bg-[#FF5F00]";

  return (
    <div>
      <div class="flex flex-col p-[0px] max-w-[95px] w-full max-h-[46px] h-full gap-[2px]">
        <div class="flex items-center p-[0px] w-[44px] h-[20px] space-x-[4px]">
          <div class={`flex w-[12px] h-[12px] ${bg} rounded-[4px]`}></div>
          <div class="flex w-[28px] h-[20px] text-[13px] text-[#1d1d1f] capitalize">
            {props.type}
          </div>
        </div>
        <div class="flex w-[95px] h-[24px] font-[500] text-[19px] text-[#1d1d1f]">
          {props.number}
        </div>
      </div>
    </div>
  );
};

export default CardBrandCount;
