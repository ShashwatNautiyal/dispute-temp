import type { Component } from "solid-js";

import { Motion, Presence } from "@motionone/solid";
import { createMemo, For, Switch, Match, createSignal, Show } from "solid-js";
import MapBox from "@/components/MapBox";

import Search from "@/components/Search";
// import Header from "@/components/Header";
import ProviderContainer from "@/components/ProviderContainer";
// import TransactionCard from "@/components/TransactionCard";

import UsaMapImage from "@/assets/images/usa-map.png";
import DisputeLogo from "@/assets/icons/DisputeLogo";
import StripeLogo from "@/assets/icons/StripeLogo";
import { createStore } from "solid-js/store";
import EditIcon from "@/assets/icons/Edit";

const [onboardingStep, setOnboardingStep] = createSignal<
  | "WELCOME"
  | "PAYMENT_PROCESSORS"
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
  const [searchValue, setSearchValue] = createSignal("");
  
  const PROVIDERS = [
    { name: "Stripe", count: 2 },
    { name: "Braintree", count: 2 },
    { name: "Square", count: 2 },
    { name: "Squarespace", count: 2 },
    { name: "Woocommerce", count: 2 },
    { name: "TSYS", count: 2 },
  ] as const;

  const [selectedProvider, setSelectedProvider] = createSignal<"All" | typeof PROVIDERS[number]["name"]>("All");

  const filtered_providers = createMemo(() => [
    { name: "All", count: PROVIDERS.length } as const,
    ...(searchValue() ?
    PROVIDERS.filter(
      item => item.name.toLowerCase().includes(searchValue().toLowerCase())
    ) : PROVIDERS)
  ]);

  const PaymentProcessorAll = () => (
    <>
      <div class="relative bg-[#F2F2F2] h-[234px]">
        <div class="absolute bottom-6 left-3 flex flex-col gap-2">
          <h2 class="text-[#1D1D1F] font-semibold text-[24px] leading-9">Payment processors</h2>
          <p class="text-[#494949] font-normal text-[15px] leading-6">Choose, Connect and Protect your business.</p>
        </div>
      </div>

      <div class="p-3 flex flex-col gap-3">
        <For each={Array(3).fill(null)}>
          {() => (
            <>
              <div class="flex justify-between items-center">
                <div class="flex gap-1">
                  <div class="h-[24px] w-[24px] flex justify-center items-center">
                    <StripeLogo />
                  </div>
                  <div class="flex flex-col gap-0.5">
                    <h4 class="font-medium text-[15px] leading-6 text-[#1D1D1F]">Stripe</h4>
                    <p class="font-normal text-[13px] leading-6 text-[#494949]">Connect your Stripe accounts</p>
                  </div>
                </div>

                <button type="button" onClick={() => void 0}
                  class="text-[#187FE7] font-medium text-[13px] leading-3 px-4 py-2"
                >
                  Connect
                </button>
              </div>

              <hr />
            </>
          )}
        </For>
      </div>
    </>
  );

  const PaymentProcessor: Component<{
    name: string
  }> = (props) => {
    enum Steps {
      CONTACT_DETAILS,
      BUSINESS_DETAILS,
      IDK
    }

    const [currentStep, setCurrentStep] = createSignal<Steps>(Steps.CONTACT_DETAILS);

    const [state, setState] = createStore({
      contact: {
        fullName: "",
        phone: "",
        address: ""
      },

      business: {
        name: "",
        phone: "",
        supportEmail: "",
        websiteUrl: ""
      }
    });

    const InputContainer: Component<{
      type: "text" | "tel" | "email" | "url",
      placeholder: string,
      value: string,
      onValueChange: (value: string) => unknown
    }> = (props) => (
      <div class="w-full py-3 px-2">
        <input required type={props.type} class="bg-transparent w-full outline-none placeholder:text-[#1D1D1F99] text-[#1D1D1F] text-[15px] leading-[18px] font-normal"
          placeholder={props.placeholder}
          value={props.value}
          onInput={(evt) => props.onValueChange(evt.currentTarget.value)}
        />
      </div>
    );

    const StepRecapContainer: Component<{ value: string }> = (props) => (
      <div class="w-full py-3 px-2">
        <p class="font-medium text-[13px] leading-[16px] truncate">
          {props.value}
        </p>
      </div>
    )

    const NextButton: Component = () => (
      <button type="submit"
        class="bg-[#187FE7] py-2 px-4 rounded-3xl text-white font-medium text-[13px] leading-[14px] text-center w-fit ml-auto"
      >
        Next
      </button>
    );

    const EditButton: Component<{ onClick: () => void }> = (props) => (
      <button type="button"
        onClick={props.onClick}
        class="bg-[#187FE7] py-2 px-4 rounded-3xl text-white font-medium text-[13px] leading-[14px] text-center w-fit ml-auto"
      >
        Edit
      </button>
    );

    return (
      <>
        <div class="flex-shrink-0 relative bg-[#F2F2F2] h-[234px]">
          <div class="absolute bottom-6 left-3 flex flex-col gap-2">
            <h2 class="text-[#1D1D1F] font-semibold text-[24px] leading-9">{props.name}</h2>
            <p class="text-[#494949] font-normal text-[15px] leading-6">Add and manage your {props.name} accounts.</p>
          </div>
        </div>

        <div class="p-3 pt-10 flex flex-col gap-8 items-center h-full overflow-auto"
          style={{ "scrollbar-gutter": "stable" }}
        >
          <form class="flex flex-col gap-4"
            onSubmit={(e) => { e.preventDefault(); setCurrentStep(Steps.BUSINESS_DETAILS) }}
          >
            <div class="flex flex-col gap-2 w-[356px]">
              <div class="flex items-center gap-2">
                <p class="text-black font-medium text-[15px] leading-[18px]">
                  Contact details
                </p>
                <Show when={currentStep() !== Steps.CONTACT_DETAILS}>
                  <button type="button" onClick={() => setCurrentStep(Steps.CONTACT_DETAILS)}>
                    <EditIcon />
                  </button>
                </Show>
              </div>

              <div class="flex flex-col border border-[#1D1D1F1F] divide-y divide-[#1D1D1F1F] rounded-lg">
                <Show when={currentStep() === Steps.CONTACT_DETAILS}
                  fallback={<StepRecapContainer value={Object.values(state.contact).join(", ")} />}
                >
                  <InputContainer
                    type="text"
                    placeholder="Full name"
                    value={state.contact.fullName}
                    onValueChange={(value) => setState("contact", "fullName", value)}
                  />
                  <InputContainer
                    type="tel"
                    placeholder="Phone"
                    value={state.contact.phone}
                    onValueChange={(value) => setState("contact", "phone", value)}
                  />
                  <InputContainer
                    type="text"
                    placeholder="Address"
                    value={state.contact.address}
                    onValueChange={(value) => setState("contact", "address", value)}
                  />
                </Show>
              </div>
            </div>

            <Show when={currentStep() === Steps.CONTACT_DETAILS}>
              <NextButton />
            </Show>
          </form>

          <Show when={currentStep() > 0}>
            <form class="flex flex-col gap-4 pb-10"
              onSubmit={(e) => { e.preventDefault(); setCurrentStep(Steps.IDK) }}
            >
              <div class="flex flex-col gap-2 w-[356px]">
                <div class="flex items-center gap-2">
                  <p class="text-black font-medium text-[15px] leading-[18px]">
                    Business details
                  </p>
                  <Show when={currentStep() !== Steps.BUSINESS_DETAILS}>
                    <button type="button" onClick={() => setCurrentStep(Steps.BUSINESS_DETAILS)}>
                      <EditIcon />
                    </button>
                  </Show>
                </div>

                <div class="flex flex-col border border-[#1D1D1F1F] divide-y divide-[#1D1D1F1F] rounded-lg">
                  <Show when={currentStep() === Steps.BUSINESS_DETAILS}
                    fallback={<StepRecapContainer value={Object.values(state.business).join(", ")} />}
                  >
                    <InputContainer
                      type="text"
                      placeholder="Business name"
                      value={state.business.name}
                      onValueChange={(value) => setState("business", "name", value)}
                    />
                    <InputContainer
                      type="tel"
                      placeholder="Phone"
                      value={state.business.phone}
                      onValueChange={(value) => setState("business", "phone", value)}
                    />
                    <InputContainer
                      type="text"
                      placeholder="Support email"
                      value={state.business.supportEmail}
                      onValueChange={(value) => setState("business", "supportEmail", value)}
                    />
                    <InputContainer
                      type="url"
                      placeholder="Website URL"
                      value={state.business.websiteUrl}
                      onValueChange={(value) => setState("business", "websiteUrl", value)}
                    />
                  </Show>
                </div>
              </div>

              <Show when={currentStep() === Steps.BUSINESS_DETAILS}>
                <NextButton />
              </Show>
            </form>
          </Show>

        </div>
      </>
    )
  }

  return (
    <div class="flex divide-x h-full">
      <div class="flex flex-col flex-shrink-0 divide-y h-full">
        <div class="p-2">
          <Search placeholder="Search processors"
            value={searchValue()}
            onInput={(evt) => setSearchValue(evt.currentTarget.value)}
          />
        </div>
        <div class="p-2 flex flex-col gap-0.5 overflow-y-hidden mr-[var(--scrollbar-width)] hover:overflow-y-scroll hover:mr-0">
          <For each={filtered_providers()}>
            {(provider) => (
              <ProviderContainer
                name={provider.name}
                count={provider.count}
                active={selectedProvider() === provider.name}
                onClick={() => setSelectedProvider(provider.name)}
              />
            )}
          </For>
        </div>
      </div>

      <div class="flex flex-col w-full">
        <Show when={selectedProvider() !== "All"}
          fallback={<PaymentProcessorAll />}
        >
          <PaymentProcessor name={selectedProvider()} />
        </Show>
      </div>
    </div>
  );
};

const Onboarding: Component = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover p-2"
    >
      <div class="absolute inset-0 h-full w-full -z-10">
        <MapBox
          accessToken="pk.eyJ1IjoiYmh1bWFuIiwiYSI6ImNsYm5teG5oYTAyam0zbmxoOXg1NDQ5cDEifQ.yRnnevMJJVSEnRU1RwmYjQ"
        />
      </div>

      <div class="relative bg-white max-w-[750px] w-full h-[600px] shadow-xl transition-[border-radius] overflow-hidden"
        classList={{
          "rounded-3xl": onboardingStep() === "WELCOME",
          "rounded-lg": onboardingStep() !== "WELCOME"
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
      </div>
    </div>
  );
};

export default Onboarding;
