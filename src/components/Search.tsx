import type { JSX } from "solid-js";
import { Component, Show } from "solid-js";

import SearchIcon from "@/assets/icons/Search";

export const SearchActions: Component<{ show: boolean }> = (props) => (
  <Show when={props.show}>
    <div class="flex items-center gap-2">
      <div class="h-[24px] w-[24px] flex items-center justify-center">
        <div class="h-[20px] w-[20px] text-[#86868B] bg-black">
        </div>
      </div>
      <div class="h-[24px] w-[24px] flex items-center justify-center">
        <div class="h-[20px] w-[20px] text-[#86868B] bg-black">
        </div>
      </div>
    </div>
  </Show>
)

const Search: Component<{
  placeholder: string,
  showSearchActions?: boolean,

  value?: string,
  onInput?: JSX.EventHandler<HTMLInputElement, InputEvent>
}> = (props) => (
  <div class="px-2 py-1 rounded-[8px] flex items-center gap-2 bg-[#f5f5f5] border border-[#1d1d1f]/20 focus-within:border-[#187FE7] focus-within:outline-[#187FE7]/20 focus-within:outline-2 focus-within:shadow-[0_0_0_2px_rgb(24,127,231,.2)]">
    <div class="flex items-center justify-center gap-1 w-full min-w-[148px]">
      <div class="h-[24px] w-[24px] flex items-center justify-center text-[#86868B]">
        <SearchIcon />
      </div>
      <input class="outline-none text-[13px] h-[20px] w-full leading-4 font-normal placeholder-[#86868B] bg-transparent"
        placeholder={props.placeholder}
        value={props.value ?? ""}
        onInput={props.onInput}
        type="text"
        autofocus
      />
    </div>

    <SearchActions show={props.showSearchActions} />
  </div>
);

export default Search;
