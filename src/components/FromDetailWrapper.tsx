import type { Component } from "solid-js";

import CardAmount from "./CardAmount";
import FromWrapper from "./FromWrapper";

const FromDetailWrapper: Component<{
  fromName: string,
  fromDate: Date,
  fromDescription: string,

  cardDigits: string,
  cardAmount: number
}> = (props) => (
  <div class="flex flex-col gap-2">
    <FromWrapper
      name={props.fromName}
      date={props.fromDate}
      description={props.fromDescription}
    />
    <CardAmount
      cardDigits={props.cardDigits}
      amount={props.cardAmount}
    />
  </div>
);

export default FromDetailWrapper;
