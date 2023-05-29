import { Component, For } from "solid-js";
import HealthBar from "./HealthBar";

const AccountsCount: Component<{
  number: number;
  upNumber: number;
  healthValue: {
    value: number;
    total: number;
  };
  percentage: number;
}> = (props) => {
  return (
    <div class="flex flex-col max-w-[306px] w-full max-h-[62px] h-full gap-[2px]">
      <div class="flex w-[94px] h-[20px] font-[500] text-[15px] text-[#494949]">
        Accounts
      </div>
      <div class="flex w-[306px] h-[40px] gap-[8px]">
        <div class="flex w-[78px] h-[40px] text-[33px] font-[600] text-[#1d1d1f]">
          {props.number}
        </div>
        <HealthBar
          number={props.upNumber}
          healthValue={{
            value: props.healthValue.value,
            total: props.healthValue.total,
          }}
          percentage={props.percentage}
        />
      </div>
    </div>
  );
};

export default AccountsCount;
