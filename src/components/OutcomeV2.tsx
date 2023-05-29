import CheckmarkOutline from "@/assets/icons/CheckOutline";
import CloseOutline from "@/assets/icons/CloseOutline";
import ForwardMessage from "@/assets/icons/ForwardMessage";
import RoundAccessTime from "@/assets/icons/RoundAccessTime";
import { Component, Match, Switch } from "solid-js";

const OutcomeV2: Component<{
  type: "won" | "lost" | "pending" | "replied";
  number: number;
}> = (props) => {
  return (
    <div class="flex flex-col max-w-[133px] w-full max-h-[48px] h-full gap-[4px]">
      <div class="flex items-center w-[100px] h-[20px] gap-[4px]">
        <div class="w-[16px] h-[16px]">
          <Switch>
            <Match when={props.type === "won"}>
              <CheckmarkOutline />
            </Match>
            <Match when={props.type === "lost"}>
              <CloseOutline />
            </Match>
            <Match when={props.type === "pending"}>
              <RoundAccessTime />
            </Match>
            <Match when={props.type === "replied"}>
              <ForwardMessage />
            </Match>
          </Switch>
        </div>
        <div class="flex w-[80px] h-[20px] text-[13px] text-[#1d1d1f] capitalize">
          {props.type}
        </div>
      </div>
      <div class="flex w-[133px] h-[24px] text-[17px] font-[500] text-[#1d1d1f]">
        {props.number}
      </div>
    </div>
  );
};

export default OutcomeV2;
