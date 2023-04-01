import { batch, Component, ComponentProps, createEffect, on } from "solid-js";

import { Motion, Presence } from "@motionone/solid";
import { createMemo, For, Switch, Match, createSignal, Show } from "solid-js";
import { setUser, user } from "@/stores/user";

import Search from "@/components/Search";
// import Header from "@/components/Header";
import ProviderContainer from "@/components/ProviderContainer";
import TransactionCard, { TransactionCardData } from "@/components/TransactionCard";

import DisputeLogo from "@/assets/icons/DisputeLogo";
import StripeLogo from "@/assets/icons/StripeLogo";
import { createStore } from "solid-js/store";
import EditIcon from "@/assets/icons/Edit";
import { TransactionsModalContent, TransactionsModalHeader } from "../modals/TransactionsModal";

const [showOnboardingContent, setShowOnboardingContent] = createSignal(true);
const [onboardingStep, setOnboardingStep] = createSignal<
  | "WELCOME"
  | "PAYMENT_PROCESSORS"
  | "VOID"
>("WELCOME");

const OnboardingStepWelcome: Component = () => (
  <div class="h-full w-full flex items-center justify-center">
    <Motion.div class="absolute m-auto flex flex-col items-center gap-4"
      animate={{ opacity: [0, 1], y: [0, -80] }}
      transition={{ duration: 2, opacity: { offset: [0, 0.25] }, y: { offset: [0.8, 1] } }}
    >
      <DisputeLogo />
    </Motion.div>
    <Motion.div class="absolute m-auto flex flex-col gap-2 max-w-[326px] text-center"
      initial={{ opacity: 0, y: 30 + 20 }}
      animate={{ opacity: 1, y: 30 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <h1 class="text-[24px] leading-8 font-bold">
        Welcome to Dispute
      </h1>
      <p class="text-[15px] font-normal leading-6">
        Go ahead — connect your payment processor
        and let our AI protect your business
      </p>

      <button type="button"
        class="mt-2 w-fit mx-auto bg-[#187FE7] text-white text-[13px] leading-4 py-2 px-4 rounded-3xl"
        onClick={() => setOnboardingStep("PAYMENT_PROCESSORS")}
      >
        Connect
      </button>
    </Motion.div>
  </div>
);

const OnboardingStepPaymentProcessors: Component = () => {
  return (
    <TransactionsModalContent
      onAccountAdd={() => {
        setShowOnboardingContent(false);
        setTimeout(() => setUser("loggedIn", true), 500);
      }}
    />
  )
}

const Onboarding: Component = () => {
  // Run on mount.
  setShowOnboardingContent(true);

  return (
    <Motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}
      class="fixed flex items-center inset-0 p-2"
    >
      <Motion.div class="absolute bg-white max-w-[750px] shadow-xl transition-[border-radius] overflow-hidden"
        initial={{
          "transform": "translateX(50%)"
        }}
        animate={{
          "width": !showOnboardingContent() ? 368 + "px" : "100%",
          "height": !showOnboardingContent() ? 500 + "px" : 600  + "px",
          "right": !showOnboardingContent() ? "4rem" : "50%",
          "transform": !showOnboardingContent() ? "translateX(0%)" : "translateX(50%)",
          // "margin-right": !showOnboardingContent() ? "4rem" : "auto"
        }}
        classList={{
          "rounded-3xl": onboardingStep() === "WELCOME",
          "rounded-lg": onboardingStep() !== "WELCOME"
        }}
        transition={{
          duration: 0.5
        }}
      >
        <Presence exitBeforeEnter>
          <Show when={showOnboardingContent()}>
            <Motion.div class="w-full h-full"
              initial={{
                /** 368px is the width of the `Stats` component in `/` route. */
                // "width": user.loggedIn ? 368 + "px" : "100%",
                // "height": user.loggedIn ? 800 + "px" : 600  + "px",
                opacity: 1
              }}
              exit={{
              //   "width": "368px", // user.loggedIn ? 368 + "px" : "100%",
              //   "height": "800px", // user.loggedIn ? 800 + "px" : 600  + "px",
                opacity: 0
              }}
              transition={{
                duration: 0.5
              }}
            >
              <Switch>
                <Match when={onboardingStep() === "WELCOME"}>
                  <OnboardingStepWelcome />
                </Match>
                <Match when={onboardingStep() === "PAYMENT_PROCESSORS"}>
                  <OnboardingStepPaymentProcessors />
                </Match>
              </Switch>
            </Motion.div>
          </Show>
        </Presence>
      </Motion.div>
    </Motion.div>
  );
};

export default Onboarding;
