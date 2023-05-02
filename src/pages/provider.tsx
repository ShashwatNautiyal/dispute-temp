import { Component, onMount } from "solid-js";

import { For, Show, createMemo, createSignal } from "solid-js";
import { A, Outlet } from "@solidjs/router";

import HandleTransition from "@/components/HandleTransition";
import TransOverview from "@/components/TransOverview";
import Search from "@/components/Search";

import { TransOverviewItems } from "@/constants/providers";
import { getDisputes } from "@/api/stripe-sync";

const ProviderPage: Component = () => {
  const [disputes, setDisputes] = createSignal([]);
  onMount(async () => {
    try {
      const resp = await getDisputes();
      console.log(resp.data);
      setDisputes(resp.data);
    } catch (error) {
      console.log(error);
    }
  });

  const [searchValue, setSearchValue] = createSignal("");
  const filteredTransOverviewItems = createMemo(() =>
    searchValue()
      ? disputes().filter(
          (item: any) =>
            item.evidence.customer_name
              .toLowerCase()
              .includes(searchValue().toLowerCase()) ||
            item.reason.toLowerCase().includes(searchValue().toLowerCase())
        )
      : disputes()
  );

  return (
    <main class="flex w-full h-full">
      <div class="flex flex-col flex-shrink-0 h-full border-r border-r-[#EDEDEF]">
        <div class="p-2">
          <Search
            placeholder="Search Transactions"
            value={searchValue()}
            onInput={(e) => setSearchValue(e.currentTarget.value)}
            showSearchActions={true}
          />
        </div>

        <div class="flex flex-col gap-[2px] p-2 h-full overflow-y-hidden mr-[var(--scrollbar-width)] hover:overflow-y-scroll hover:mr-0">
          <For
            each={filteredTransOverviewItems()}
            fallback={
              <div class="w-[344px]">
                <p class="text-[#EDEDEF] text-center">No item found</p>
              </div>
            }
          >
            {(item: any, index) => (
              <>
                <A href={item.id}>
                  <TransOverview
                    fromName={item.evidence.customer_name}
                    cardAmount={item.amount}
                    cardDigits="5567"
                    fromDate={new Date()}
                    fromDescription={item.reason}
                  />
                </A>

                <Show
                  when={index() !== filteredTransOverviewItems().length - 1}
                >
                  <hr class="text-[#EDEDEF]" />
                </Show>
              </>
            )}
          </For>
        </div>
      </div>

      <Outlet />
    </main>
  );
};

export default () => (
  <HandleTransition>
    <ProviderPage />
  </HandleTransition>
);
