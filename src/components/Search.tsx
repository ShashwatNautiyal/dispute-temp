import { Component, Show } from "solid-js";

export const SearchActions: Component<{ show: boolean }> = (props) => (
  <Show when={props.show}>
    <div class="flex items-center gap-2">
      <div class="h-[20px] w-[20px] flex items-center justify-center text-[#86868B]">F</div>
      <div class="h-[20px] w-[20px] flex items-center justify-center text-[#86868B]">P</div>
    </div>
  </Show>
)

const Search: Component<{
  placeholder: string,
  showSearchActions: boolean
}> = (props) => (
  <div class="px-2 py-1 rounded-[8px] flex items-center gap-2">
    <div class="flex items-center justify-center gap-1 w-[148px]">
      <div class="h-[20px] w-[20px] flex items-center justify-center text-[#86868B]">Q</div>
      <input class="outline-none text-[13px] h-[20px] w-full leading-4 font-normal placeholder-[#86868B] bg-transparent" type="text" autofocus placeholder={props.placeholder} />
    </div>

    <SearchActions show={props.showSearchActions} />
  </div>
);

export default Search;
