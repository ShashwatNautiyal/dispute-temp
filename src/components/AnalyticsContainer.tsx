import AccountsCount from "./AccountsWrapper";
import Divider from "./Divider";
import ChargeBackCountWrapper from "./ChargeBack";
import OutcomeWrapper from "./OutcomeWrapper";

const AnalyticsContainer = () => {
  return (
    <div class="flex flex-col p-[24px] rounded-[12px] max-w-[350px] z-30 w-full max-h-min bg-[#ffffff] gap-[16px] relative shadow-xl overflow-hidden">
      <ChargeBackCountWrapper />
      <Divider addClass="-mx-[24px]" />
      <OutcomeWrapper />
      <Divider addClass="-mx-[24px]" />
      <AccountsCount
        healthValue={{
          value: 10,
          total: 15,
        }}
        number={10}
        percentage={10}
        upNumber={7786}
      />
    </div>
  );
};

export default AnalyticsContainer;
