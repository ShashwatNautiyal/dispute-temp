import { Component, createMemo, For } from "solid-js";

import { createStore } from 'solid-js/store';
import { SolidApexCharts } from 'solid-apexcharts';

import HandleTransition from "@/components/HandleTransition";
import Outcome from "@/components/Outcome";

const LineChartPercent: Component<{ label: string, percent: number }> = (props) => (
  <div class="grid grid-cols-2 gap-2">
    <p class="flex items-center text-[13px] leading-5 font-normal">{props.label}</p>

    <div class="flex items-center gap-2 w-full">
      <span class="h-2 rounded-full" style={{
        width: `${props.percent}%`,
        background: "#ff85a2"
      }} />
      <span class="text-[13px] leading-5 font-normal">{props.percent}%</span>
    </div>
  </div>
)

const ChartsPage: Component = () => {
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
    ]
  });

  const sum = (list: number[]) => list.reduce((prev, curr) => prev + curr);
  const seriesListTotal = createMemo(() => sum(series.list.map(list => sum(list.data))));

  return (
    <div class="w-[300px]">
      <SolidApexCharts type="bar"
        width={300}
        height={200}
        options={{
          chart: {
            animations: {
              enabled: true,
              easing: "easeout",

              dynamicAnimation: {
                speed: 1000
              }
            },
            
            toolbar: {
              show: false
            },

            zoom: {
              enabled: false
            },

            stacked: true
          },
          grid: {
            strokeDashArray: 4,
            borderColor: '#111',
            yaxis: {
              lines: {
                show: true,
              }
            }
          },
          plotOptions: {
            bar: {
              borderRadius: 5,
              borderRadiusApplication: "end",
              borderRadiusWhenStacked: "last"
            },
          },
          dataLabels: {
            enabled: false
          },
          yaxis: {
            opposite: true,
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            labels: {
              formatter (raw_value) {
                const value = Math.abs(raw_value);

                if (value >= 10 ** 3 && value < 10 ** 6) {
                  return (value / 1_000).toFixed(0) + "K";
                }
                else if (value >= 10 ** 6) {
                  return (value / 1_000_000).toFixed(0) + "M";
                }

                return value.toString();
              }
            }
          },
          xaxis: {
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false },
          },
          legend: {
            show: false,
          },
  
        }}

        series={series.list}
      />

      <div class="flex gap-8">
        <For each={series.list}>
          {list => (
            <div class="flex flex-col gap-[2px]">
              <div class="flex items-center gap-1">
                <div class="w-[12px] h-[12px] rounded-[4px]"
                  style={{ background: list.color }}
                />

                <p class="text-[13px] leading-5 font-normal text-[#494949]">{list.name}</p>
              </div>

              <span class="text-[19px] leading-6 font-normal text-[#494949]">
                {Math.round(sum(list.data) * 100 / seriesListTotal())}
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
        <LineChartPercent
          label="Product not Received"
          percent={25}
        />
        <LineChartPercent
          label="Services not Rendered"
          percent={75}
        />
      </div>
    </div>
  );
};

export default () => (
  <HandleTransition>
    <ChartsPage />
  </HandleTransition>
);
