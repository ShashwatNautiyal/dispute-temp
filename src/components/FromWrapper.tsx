import type { Component } from "solid-js";

const FromWrapper: Component<{ name: string, date: Date, description: string }> = (props) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric"
  };

  // When it's one year older, we also display the year.
  if (props.date.getFullYear() !== new Date().getFullYear()) {
    dateOptions["year"] = "numeric";
  }

  return (
    <div class="flex flex-col gap-[2px] w-[284px]">
      <div class="flex justify-between items-center gap-1">
        <p class="text-[13px] leading-5 font-medium text-[#1D1D1F] flex-1 truncate">
          {props.name}
        </p>
        <p class="text-[12px] leading-4 font-medium text-[#494949] flex-none">
          {props.date.toLocaleDateString("en-US", dateOptions)}
        </p>
      </div>

      <p class="text-[12px] leading-4 font-normal truncate">{props.description}</p>
    </div>
  );
};

export default FromWrapper;
