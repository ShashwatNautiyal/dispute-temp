import CheckmarkOutline from "@/assets/icons/CheckOutline";
import { Component, Match, Show, Switch } from "solid-js";
import HealthBar from "./HealthBar";

const Widgets: Component<
  {
    title: string;
  } & (GraphProps | InfoProps)
> = (props) => {
  return (
    <div class="flex flex-col p-[12px] max-w-[193px] w-full max-h-[120px] h-full relative shadow-xl overflow-hidden gap-[10px] bg-[#f2f2f2] rounded-[16px]">
      <div class="flex flex-col w-[169px] gap-[16px]">
        <div class="flex items-center w-[159px] h-[20px] space-x-[4px]">
          <div class="relative w-[16px] h-[16px]">
            <CheckmarkOutline />
          </div>
          <div class="flex w-[139px] h-[20px] text-[15px] text-[#1d1d1f]">
            Stripe - 7786
          </div>
        </div>
        <div class="flex w-[169px]">
          <Switch>
            <Match when={props.type == "graph"}>
              <HealthBar
                healthValue={{
                  value: props.type === "graph" ? props.healthValue.value : 0,
                  total: props.type === "graph" ? props.healthValue.total : 0,
                }}
                number={props.type === "graph" ? props.number : 0}
                percentage={props.type === "graph" ? props.percentage : 0}
                showArrows={false}
              />
            </Match>

            <Match when={props.type == "info"}>
              <div class="text-[48px] font-[600] text-[#1D1D1F]">
                {props.type === "info" ? props.percentage : 0}%
                <span class="text-[17px] font-[500] text-[#494949] ml-1">
                  ${props.type === "info" ? props.dollar : 0}
                </span>
              </div>
            </Match>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Widgets;

type GraphProps = {
  type: "graph";
  number: number;
  healthValue: {
    value: number;
    total: number;
  };
  percentage: number;
};

type InfoProps = {
  type: "info";
  percentage: number;
  dollar: number;
};
