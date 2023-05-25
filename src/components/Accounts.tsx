import { Component, For } from "solid-js";

const Accounts: Component<{
  name: string;
  number: number;
  upNumber: number;
  healthValue: {
    value: number;
    total: number;
  };
  percentage: number;
}> = (props) => {
  return (
    <div class="flex flex-col max-w-[306px] w-full max-h-[62px] h-full gap-[2px]">
      <div class="flex w-[94px] h-[20px] text-[15px] text-[#494949]">
        {props.name}
      </div>
      <div class="flex w-[306px] h-[40px] gap-[8px]">
        <div class="flex w-[78px] h-[40px] text-[33px] text-[#1d1d1f]">
          {props.number}
        </div>
        <div class="flex w-[220px] h-[40px] gap-[4px]">
          <div class="flex flex-col w-[20px] h-[40px]">
            <div class="relative w-[20px] h-[20px] bg-[#ffffff]">
              <ArrowUp />
            </div>
            <div class="relative rotate-180 w-[20px] h-[20px] bg-[#ffffff]">
              <ArrowUp />
            </div>
          </div>
          <div class="flex flex-col w-[196px] h-[40px] gap-[4px]">
            <div class="flex w-[48px] h-[20px] text-[13px] text-[#494949]">
              {props.upNumber}
            </div>
            <div class="flex items-center w-[196px] h-[16px] gap-[8px]">
              <div class="flex items-center w-[148px] h-[12px] gap-[2px]">
                <For each={Array(props.healthValue.total)}>
                  {(_, i) => (
                    <div
                      class={`${
                        i() < props.healthValue.value
                          ? "bg-[#68ce67]"
                          : "bg-[#F2F2F2]"
                      } flex w-[8px] h-[12px] rounded-[2px]`}
                    ></div>
                  )}
                </For>
              </div>
              <div class="flex w-[40px] h-[16px] text-[13px] text-[#494949]">
                {props.percentage}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArrowUp = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.9688 10C17.9688 8.42393 17.5014 6.88326 16.6258 5.5728C15.7502 4.26235 14.5056 3.24097 13.0495 2.63784C11.5934 2.0347 9.99116 1.87689 8.44537 2.18437C6.89959 2.49185 5.47969 3.2508 4.36524 4.36525C3.25079 5.4797 2.49184 6.89959 2.18437 8.44538C1.87689 9.99116 2.0347 11.5934 2.63783 13.0495C3.24097 14.5056 4.26235 15.7502 5.5728 16.6258C6.88325 17.5014 8.42393 17.9688 10 17.9688C12.1127 17.9663 14.1381 17.1259 15.632 15.632C17.1259 14.1381 17.9663 12.1127 17.9688 10ZM2.96875 10C2.96875 8.60935 3.38113 7.24993 4.15373 6.09365C4.92633 4.93737 6.02446 4.03615 7.30926 3.50398C8.59405 2.9718 10.0078 2.83255 11.3717 3.10386C12.7357 3.37516 13.9885 4.04482 14.9718 5.02816C15.9552 6.0115 16.6248 7.26435 16.8961 8.62827C17.1674 9.9922 17.0282 11.406 16.496 12.6907C15.9638 13.9755 15.0626 15.0737 13.9064 15.8463C12.7501 16.6189 11.3906 17.0313 10 17.0313C8.13583 17.0292 6.34861 16.2877 5.03044 14.9696C3.71227 13.6514 2.97082 11.8642 2.96875 10ZM10 13.5938C9.87568 13.5938 9.75645 13.5444 9.66854 13.4565C9.58064 13.3686 9.53125 13.2493 9.53125 13.125V8.00703L7.83125 9.70625C7.78834 9.75231 7.73659 9.78925 7.67909 9.81487C7.62159 9.84049 7.55952 9.85426 7.49658 9.85537C7.43364 9.85648 7.37112 9.84491 7.31275 9.82133C7.25438 9.79775 7.20136 9.76266 7.15685 9.71815C7.11234 9.67364 7.07725 9.62062 7.05367 9.56225C7.0301 9.50388 7.01852 9.44137 7.01963 9.37843C7.02074 9.31549 7.03452 9.25342 7.06014 9.19592C7.08576 9.13842 7.1227 9.08667 7.16875 9.04375L9.66875 6.54375C9.75664 6.45597 9.87578 6.40667 10 6.40667C10.1242 6.40667 10.2434 6.45597 10.3312 6.54375L12.8312 9.04375C12.914 9.13261 12.9591 9.25014 12.957 9.37158C12.9548 9.49302 12.9056 9.60888 12.8198 9.69477C12.7339 9.78065 12.618 9.82985 12.4966 9.83199C12.3751 9.83413 12.2576 9.78905 12.1688 9.70625L10.4688 8.00703V13.125C10.4688 13.2493 10.4194 13.3686 10.3315 13.4565C10.2435 13.5444 10.1243 13.5938 10 13.5938Z"
      fill="black"
    />
  </svg>
);

export default Accounts;
