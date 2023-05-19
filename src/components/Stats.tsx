import { Component, createMemo, For, createEffect, on } from "solid-js";

import { createStore } from "solid-js/store";
import { createBarChart } from "micro-charts";

import Outcome from "@/components/Outcome";
import { Motion } from "@motionone/solid";

const LineChartPercent: Component<{ label: string; percent: number }> = (
  props
) => (
  <div class="grid grid-cols-2 gap-2">
    <p class="text-[15px] leading-5 font-normal truncate">{props.label}</p>

    <div class="flex justify-end items-center gap-2 w-full">
      <span
        class="h-2 rounded-full"
        style={{
          width: `${props.percent}%`,
          background: "#ff85a2",
        }}
      />
      <span class="text-[15px] leading-5 font-normal">{props.percent}%</span>
    </div>
  </div>
);

const Stats: Component = () => {
  let canvas: HTMLCanvasElement | undefined;

  const [series] = createStore({
    list: [
      {
        color: "#FFA500",
        name: "Mastercard",
        data: [700, 50, 450, 500, 50],
      },
      {
        color: "#ADD8E6",
        name: "Visa",
        data: [3000, 500, 1000, 2000, 700],
      },
    ],
  });

  const getBarsData = () => {
    const lengths = series.list.map((serie) => serie.data.length);
    const length = Math.min(...lengths);

    const data = [];
    for (let i = 0; i < length; i++) {
      data.push({
        id: i.toString(),
        values: series.list.map((serie) => serie.data[i]),
      });
    }

    return data;
  };

  createEffect(
    on(
      () => series.list,
      (list) => {
        if (!canvas) {
          throw new Error("Canvas is not defined");
        }
        createBarChart(canvas, getBarsData(), {
          barColors: list.map((serie) => serie.color),

          rowCount: 3,
          rowColor: "rgba(40, 40, 40, .3)",
          barWidth: 14,
          barRadius: 0,
          stacked: true,
        });
      }
    )
  );

  const sum = (list: number[]) => list.reduce((prev, curr) => prev + curr);
  const seriesListTotal = createMemo(() =>
    sum(series.list.map((list) => sum(list.data)))
  );

  return (
    <div class="p-6 bg-white rounded-[12px]">
      <Motion.div
        class="w-[320px] flex flex-col gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div class="border relative">
          <canvas class="h-full w-full" ref={canvas} />
        </div>

        <div
          class="grid gap-2"
          style={{
            "grid-template-columns": `repeat(${series.list.length}, minmax(0, 1fr))`,
          }}
        >
          <For each={series.list}>
            {(list) => (
              <div class="flex flex-col gap-[2px]">
                <div class="flex items-center gap-1">
                  <div
                    class="w-[12px] h-[12px] rounded-[4px]"
                    style={{ background: list.color }}
                  />

                  <p class="text-[13px] leading-5 font-normal text-[#494949]">
                    {list.name}
                  </p>
                </div>

                <span class="text-[19px] leading-6 font-normal text-[#494949]">
                  {Math.round((sum(list.data) * 100) / seriesListTotal())}
                </span>
              </div>
            )}
          </For>
        </div>

        <Outcome
          wonCount={3}
          lostCount={5}
          pendingCount={10}
          repliedCount={100}
        />

        <div class="flex flex-col gap-2">
          <LineChartPercent label="Product not Received" percent={25} />
          <LineChartPercent label="Services not Rendered" percent={75} />
        </div>
      </Motion.div>
    </div>
  );
};

export default Stats;
