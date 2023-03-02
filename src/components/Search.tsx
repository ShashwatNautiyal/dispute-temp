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
  <div class="px-2 py-1 rounded-[8px] flex items-center gap-2 bg-[#f5f5f5]">
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
