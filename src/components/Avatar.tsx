import type { Component } from "solid-js";

const Avatar: Component<{ letter: string }> = (props) => {
  return (
    <div class="relative bg-green-300 h-[36px] w-[36px] text-white flex justify-center items-center rounded-full">
      <span class="h-[20] w-[20] text-[13px] leading-4 font-semibold p-2">
        {props.letter}
      </span>
    </div>
  );
};

export default Avatar;
