import OutcomeV2 from "./OutcomeV2";

const OutcomeWrapper = () => {
  return (
    <div class="grid grid-cols-2 p-[12px] gap-[10px] bg-[#f2f2f2] rounded-[16px]">
      <OutcomeV2 number={85} type="won" />
      <OutcomeV2 number={23} type="lost" />
      <OutcomeV2 number={49} type="pending" />
      <OutcomeV2 number={90} type="replied" />
    </div>
  );
};

export default OutcomeWrapper;
