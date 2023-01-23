import type { Component } from "solid-js";

import Avatar from "./Avatar";
import FromDetailWrapper from "./FromDetailWrapper";

const TransOverview: Component<{
  fromName: string,
  fromDate: Date,
  fromDescription: string,

  cardDigits: string,
  cardAmount: number
}> = (props) => (
  <div class="flex gap-2 p-2 rounded-[12px] hover:bg-[#f2f2f2] transition-colors">
    <Avatar letter={props.fromName[0]} />
    <FromDetailWrapper
      fromName={props.fromName}
      fromDate={props.fromDate}
      fromDescription={props.fromDescription}

      cardDigits={props.cardDigits}
      cardAmount={props.cardAmount}
    />
  </div>
);

export default TransOverview;
