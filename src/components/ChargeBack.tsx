import { createStore } from "solid-js/store";
import CardBrandCount from "./CardBrandCount";
import ChargeBackCount from "./ChargeBackCount";
import Graph from "./Graph";

const ChargeBackCountWrapper = () => {
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

  return (
    <>
      <ChargeBackCount name="Chargebacks" number={10} dollar={100} />
      <Graph height={114} list={series.list} />
      <div class="flex gap-[12px]">
        <CardBrandCount number="85" type="visa" />
        <CardBrandCount number="15" type="mastercard" />
      </div>
    </>
  );
};

export default ChargeBackCountWrapper;
