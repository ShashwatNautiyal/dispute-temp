import { Component, For, Show } from "solid-js";

import DotSeparator from "@/components/DotSeparator";

import FlowIcon from "@/assets/icons/Flow";
import VideosIcon from "@/assets/icons/Videos";

const FlowCount: Component<{ count: number }> = (props) => (
  <div class="flex items-center gap-0.5">
    <div class="h-[20px] w-[20px] flex items-center justify-center">
      <FlowIcon />
    </div>

    <div>
      <p class="text-[13px] leading-5 text-[#494949] font-normal">
        {props.count}
      </p>
    </div>
  </div>
)

const VideosCount: Component<{ count: number }> = (props) => (
  <div class="flex items-center gap-0.5">
    <div class="h-[20px] w-[20px] flex items-center justify-center">
      <VideosIcon />
    </div>

    <div>
      <p class="text-[13px] leading-5 text-[#494949] font-normal">
        {props.count}
      </p>
    </div>
  </div>
)

const CardDetails: Component<{
  lastEditTime: string,
  totalVideos: number,
  flowCount: number
}> = (props) => (
  <div class="flex items-center gap-1">
    <p class="text-[13px] leading-5 text-[#494949] font-normal">
      Created {props.lastEditTime}
    </p>
    
    <DotSeparator />

    <FlowCount count={props.flowCount} />

    <DotSeparator />

    <VideosCount count={props.totalVideos} />
  </div>
);

export interface TransactionCardData {
  lastEditTime: string,
  name: string,
  totalVideos: number,
  flowCount: number,
}

const TransactionCard: Component<{
  data: TransactionCardData,
  onCardClick: () => unknown
}> = (props) => (
  <button onClick={props.onCardClick} class="bg-white hover:bg-[#F2F2F2] p-2 rounded-lg w-full">
    <div class="flex gap-2">
      <div class="flex flex-col items-start gap-0.5">
        <p class="text-[15px] leading-5 font-medium text-[#1D1D1F]">
          {props.data.name}
        </p>

        <CardDetails
          lastEditTime={props.data.lastEditTime}
          totalVideos={props.data.totalVideos}
          flowCount={props.data.flowCount}
        />
      </div>
    </div>
  </button>
);

export default TransactionCard;