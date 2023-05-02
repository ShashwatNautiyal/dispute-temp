import {
  Component,
  Show,
  createEffect,
  createResource,
  createSignal,
  onMount,
} from "solid-js";
import { useParams } from "@solidjs/router";

import FromMessage from "@/components/FromMessage";
import { getDisputes } from "@/api/stripe-sync";

const ProviderMessagesPage: Component = () => {
  const params = useParams();
  const [dispute] = createResource(params.id, async () => {
    const resp = await getDisputes();
    return resp.data.find((d: any) => d.id === params.id);
  });

  return (
    <div class="w-full flex flex-col gap-[16px] px-[12px]">
      <Show when={dispute()}>
        <FromMessage
          fromName={dispute().evidence.customer_name}
          cardAmount={dispute().amount}
          cardDigits="5567"
          body="Order placed on 04/01/2023"
          title="You have a new order #QWERTY"
          embedSiteName="orderurl.com"
          embedTitle="16 Places to Find Illustrations for Your Projects!"
          embedImageUrl="https://images.unsplash.com/photo-1620191957898-8fe864c06237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          fromTime={"15:38"}
        />
      </Show>
    </div>
  );
};

export default ProviderMessagesPage;
