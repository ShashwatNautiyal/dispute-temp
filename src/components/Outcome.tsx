import type { Component } from "solid-js";

const Outcome: Component<{ title: string, count: number }> = (props) => {
  return (
    <div class="flex col-2 justify-between items-center text-[#494949]">
      <div class="flex gap-1 items-center">
        <div class="h-[16px] w-[16px] bg-[#494949]" />
        <p class="text-[15px] leading-5 font-normal">{props.title}</p>
      </div>

      <span class="text-[17px] leading-6 font-medium">{props.count}</span>
    </div>
  )
};

const OutcomeContainer: Component<{
  wonCount: number,
  lostCount: number,
  pendingCount: number,
  repliedCount: number
}> = (props) => (
  <div class="flex flex-col gap-2">
    <Outcome title="Won" count={props.wonCount} />
    <Outcome title="Lost" count={props.lostCount} />
    <Outcome title="Pending" count={props.pendingCount} />
    <Outcome title="Replied" count={props.repliedCount} />
  </div>
)

export default OutcomeContainer;
