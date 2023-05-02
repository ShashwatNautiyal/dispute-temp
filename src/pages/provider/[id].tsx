import type { TransOverviewItem } from "@/constants/providers";
import type { Component } from "solid-js";

import { createMemo } from "solid-js";
import { useParams } from "@solidjs/router";

import FromMessage from "@/components/FromMessage";

import { TransOverviewItems } from "@/constants/providers";

const ProviderMessagesPage: Component = () => {
  const params = useParams<{ id: string }>();

  const providerID = () => +params.id;
  const provider = createMemo<TransOverviewItem>(
    () => TransOverviewItems[providerID()]
  );

  return (
    <div class="w-full flex flex-col gap-[16px] px-[12px]">
      <FromMessage
        fromName={provider().fromName}
        fromTime={provider().fromDate.toLocaleTimeString()}
        body="Order placed on 04/01/2023"
        title="You have a new order #QWERTY"
        cardAmount={provider().cardAmount}
        cardDigits={provider().cardDigits}
        embedSiteName="orderurl.com"
        embedTitle="16 Places to Find Illustrations for Your Projects!"
        embedImageUrl="https://images.unsplash.com/photo-1620191957898-8fe864c06237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <FromMessage
        fromName={provider().fromName}
        fromTime={provider().fromDate.toLocaleTimeString()}
        body="Order placed on 04/01/2023"
        title="You have a new order #QWERTY"
        cardAmount={provider().cardAmount}
        cardDigits={provider().cardDigits}
        embedSiteName="orderurl.com"
        embedTitle="16 Places to Find Illustrations for Your Projects!"
        embedImageUrl="https://images.unsplash.com/photo-1620191957898-8fe864c06237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <FromMessage
        fromName={provider().fromName}
        fromTime={provider().fromDate.toLocaleTimeString()}
        body="Order placed on 04/01/2023"
        title="You have a new order #QWERTY"
        cardAmount={provider().cardAmount}
        cardDigits={provider().cardDigits}
        embedSiteName="orderurl.com"
        embedTitle="16 Places to Find Illustrations for Your Projects!"
        embedImageUrl="https://images.unsplash.com/photo-1620191957898-8fe864c06237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </div>
  );
};

export default ProviderMessagesPage;
