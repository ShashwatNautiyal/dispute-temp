import { createBarChart } from "micro-charts";
import { Component, createEffect, on } from "solid-js";

const Graph: Component<{
  height?: number;
  list: {
    color: string;
    name: string;
    data: number[];
  }[];
}> = (props) => {
  let canvas: HTMLCanvasElement | undefined;

  const getBarsData = () => {
    const lengths = props.list.map((serie) => serie.data.length);
    const length = Math.min(...lengths);

    const data = [];
    for (let i = 0; i < length; i++) {
      data.push({
        id: i.toString(),
        values: props.list.map((serie) => serie.data[i]),
      });
    }

    return data;
  };

  createEffect(
    on(
      () => props.list,
      (list) => {
        if (!canvas) return;
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

  return (
    <div class="border relative">
      <canvas
        style={{
          "max-height": props.height ? `${props.height}px` : "100%",
        }}
        class="w-full"
        ref={canvas}
      />
    </div>
  );
};

export default Graph;
