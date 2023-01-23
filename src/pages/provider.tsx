import type { Component } from "solid-js";

import { For, Show, createMemo, createSignal } from "solid-js";
import { A, Outlet } from "@solidjs/router";

import TransOverview from "@/components/TransOverview";
import Search from "@/components/Search";

import { TransOverviewItems } from "@/constants/providers";

const ProviderPage: Component = () => {
  const [searchValue, setSearchValue] = createSignal("");
  const filteredTransOverviewItems = createMemo(() => searchValue() ?
    TransOverviewItems.filter(
      item => item.fromName.toLowerCase().includes(searchValue().toLowerCase()) || item.fromDescription.toLowerCase().includes(searchValue().toLowerCase())
    ) : TransOverviewItems
  );

  return (
    <main class="flex w-full">
      <div class="flex flex-col flex-shrink-0">
        <div class="p-2">
          <Search placeholder="Search Transactions"
            value={searchValue()}
            onInput={(e) => setSearchValue(e.currentTarget.value)}

            showSearchActions={true}
          />
        </div>

        <div class="flex flex-col gap-[2px] p-2 h-full overflow-y-hidden mr-[var(--scrollbar-width)] hover:overflow-y-scroll hover:mr-0">
          <For each={filteredTransOverviewItems()} fallback={
            <div class="w-[344px]">
              <p class="text-[#EDEDEF] text-center">No item found</p>
            </div>
          }>
            {(item, index) => (
              <>
                <A href={`./${index()}`}>
                  <TransOverview {...item} />
                </A>

                <Show when={index() !== filteredTransOverviewItems().length - 1}>
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

export default ProviderPage;
