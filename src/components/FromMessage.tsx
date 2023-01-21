import type { Component } from "solid-js";

import CardAmount from "./CardAmount";
import EmbedPreview from "./EmbedPreview";
import FromName from "./FromName";
import Avatar from "./Avatar";

const FromMessage: Component<{
  fromName: string,
  fromTime: string,

  title: string,
  body: string,

  cardAmount: number,
  cardDigits: string,

  embedSiteName: string,
  embedImageUrl: string,
  embedTitle: string
}> = (props) => (
  <div class="flex gap-2 p-2 rounded-[12px] hover:bg-[#f5f5f5]">
    <Avatar letter={props.fromName[0]} />

    <div class="flex flex-col gap-1">
      <FromName
        name={props.fromName}
        time={props.fromTime}
      />

      <div class="flex flex-col gap-1">
        <p class="font-medium">{props.title}</p>
        <span class="text-[15px] leading-5 font-normal">{props.body}</span>

        <CardAmount
          cardDigits={props.cardDigits}
          amount={props.cardAmount}
        />

        <EmbedPreview
          imageUrl={props.embedImageUrl}
          siteName={props.embedSiteName}
          title={props.embedTitle}
        />
      </div>
    </div>
  </div>
);

export default FromMessage;
