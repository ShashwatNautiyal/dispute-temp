import type { Component } from "solid-js";
import HandleTransition from "@/components/HandleTransition";
import Widgets from "@/components/Widgets";
import AnalyticsContainer from "@/components/AnalyticsContainer";

const HomePage: Component = () => {
  return (
    <div class="absolute flex items-center inset-0">
      <div class="flex justify-between items-center h-screen w-screen p-6 w-90vw max-w-[1440px] mx-auto">
        <div class="flex flex-col gap-[12px]">
          <Widgets
            type="info"
            dollar={10}
            percentage={10}
            title="Stripe - 7786"
          />
          <Widgets
            type="graph"
            healthValue={{
              value: 8,
              total: 10,
            }}
            number={10}
            percentage={10}
            title="Stripe - 7786"
          />
        </div>
        <AnalyticsContainer />
      </div>
    </div>
  );
};

export default () => (
  <HandleTransition>
    <HomePage />
  </HandleTransition>
);
