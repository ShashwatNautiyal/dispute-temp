import { Component, For, Show, batch, createEffect, createMemo, on } from "solid-js";
import { createSignal } from "solid-js";

import Modal from "@/components/Modal";
import Search from "@/components/Search";

import ProviderContainer from "@/components/ProviderContainer";
import TransactionCard from "@/components/TransactionCard";
import { createStore } from "solid-js/store";
import StripeLogo from "@/assets/icons/StripeLogo";
import EditIcon from "@/assets/icons/Edit";

import { user, setUser } from "@/stores/user";

const [showModal, setShowModal] = createSignal(false);
const open = () => setShowModal(true);
const close = () => setShowModal(false);

export const TransactionsModalHeader: Component<{
  name: string,
  description?: string,
  showAddButton?: boolean,
  onAddButtonClick?: () => unknown
}> = (props) => (
  <div class="flex-shrink-0 relative bg-[#F2F2F2] h-[234px]">
    <div class="absolute bottom-6 left-3 flex flex-col gap-2">
      <h2 class="text-[#1D1D1F] font-semibold text-[24px] leading-9">{props.name}</h2>
      <p class="text-[#494949] font-normal text-[15px] leading-6">{props.description ?? `Add and manage your ${props.name} accounts.`}</p>
    </div>

    <Show when={props.showAddButton}>
      <button type="button"
        onClick={() => props.onAddButtonClick && props.onAddButtonClick()}
        class="absolute bg-[#187FE7] py-2 px-4 rounded-3xl text-white font-medium text-[13px] leading-[14px] text-center w-fit mx-auto bottom-6 right-3"
      >
        Add
      </button>
    </Show>

  </div>
)

export const TransactionsModalContent: Component<{
  /**
   * Ran when user added an account through the wizard.
   * Used in `@/components/Onboarding` to change some state, for example. 
   */
  onAccountAdd?: () => void
}> = (root_props) => {
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
      <div class="flex-shrink-0 relative bg-[#F2F2F2] h-[234px]">
        <div class="absolute bottom-6 left-3 flex flex-col gap-2">
          <h2 class="text-[#1D1D1F] font-semibold text-[24px] leading-9">Payment processors</h2>
          <p class="text-[#494949] font-normal text-[15px] leading-6">Choose, Connect and Protect your business.</p>
        </div>
      </div>

      <div class="overflow-y-auto p-3 flex flex-col gap-3">
        <For each={PROVIDERS}>
          {(provider, index) => (
            <>
              <div class="bg-white hover:bg-[#F2F2F2] p-2 rounded-lg w-full">
                <div class="flex justify-between items-center">
                  <div class="flex gap-1">
                    <div class="h-[24px] w-[24px] flex justify-center items-center">
                      <StripeLogo />
                    </div>
                    <div class="flex flex-col gap-0.5">
                      <h4 class="font-medium text-[15px] leading-6 text-[#1D1D1F]">
                        {provider.name}
                      </h4>
                      <p class="font-normal text-[13px] leading-6 text-[#494949]">
                        Connect your {provider.name} accounts
                      </p>
                    </div>
                  </div>

                  <button type="button" onClick={() => setSelectedProvider(provider.name)}
                    class="text-[#187FE7] font-medium text-[13px] leading-3 px-4 py-2"
                  >
                    Connect
                  </button>
                </div>
              </div>

              <Show when={index() !== (PROVIDERS.length-1)}>
                <hr />
              </Show>
            </>
          )}
        </For>
      </div>
    </>
  );

  const PaymentProcessor: Component<{
    name: typeof PROVIDERS[number]["name"]
  }> = (props) => {
    const [showAddAccountToProcessor, setShowAccountToProcessor] = createSignal(false);
    const [userHasAccountsOnFirstRender, setUserHasAccountsOnFirstRender] = createSignal((user.accountsOnProvider?.[props.name] ?? []).length > 0);
    createEffect(on(() => props.name, provider_name => {
      setUserHasAccountsOnFirstRender((user.accountsOnProvider?.[provider_name] ?? []).length > 0);
    }))

    const AddAccountToProcessor: Component = () => {
      enum Steps {
        CONTACT_DETAILS,
        BUSINESS_DETAILS,
        SUBMIT
      }
  
      const [currentStep, setCurrentStep] = createSignal<Steps>(Steps.CONTACT_DETAILS);
  
      const defaultState = {
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
      };
  
      const [state, setState] = createStore(defaultState);
  
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
      );
  
      const NextButton: Component = () => (
        <button type="submit"
          class="bg-[#187FE7] py-2 px-4 rounded-3xl text-white font-medium text-[13px] leading-[14px] text-center w-fit ml-auto"
        >
          Next
        </button>
      );
  
      const addAccountFromState = () => batch(() => {
        root_props.onAccountAdd && root_props.onAccountAdd();

        if (!user.accountsOnProvider[props.name]) {
          setUser("accountsOnProvider", props.name, []);
        }

        batch(() => {
          setUser("accountsOnProvider", props.name, prev => [...prev, {
            flowCount: 2,
            lastEditTime: "1 min ago",
            name: "**** 1234",
            totalVideos: 2
          }]);
    
          setState(defaultState);
          setUserHasAccountsOnFirstRender(true);
          setShowAccountToProcessor(false)
        })
      });
  
      return (
        <>
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
              onSubmit={(e) => { e.preventDefault(); setCurrentStep(Steps.SUBMIT) }}
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

          <Show when={currentStep() > 1}>
            <button type="button"
              onClick={() => addAccountFromState()}
              class="bg-[#187FE7] py-2 px-4 rounded-3xl text-white font-medium text-[13px] leading-[14px] text-center w-fit mx-auto"
            >
              Add account
            </button>
          </Show>
        </>
      )
    }

    return (
      <>
        <TransactionsModalHeader
          name={props.name}
          showAddButton={userHasAccountsOnFirstRender() && !showAddAccountToProcessor()}
          onAddButtonClick={() => setShowAccountToProcessor(true)}
        />
        
        <Show when={userHasAccountsOnFirstRender()}
          fallback={
            <div class="p-3 pt-10 flex flex-col gap-8 items-center h-full overflow-auto"
              style={{ "scrollbar-gutter": "stable" }}
            >
              <AddAccountToProcessor />
            </div>
          }
        >
          <Show when={!showAddAccountToProcessor()}
            fallback={
              <div class="p-3 pt-10 flex flex-col gap-8 items-center h-full overflow-auto"
                style={{ "scrollbar-gutter": "stable" }}
              >
                <AddAccountToProcessor />
              </div>
            }
          >
            <div class="p-2 overflow-hidden hover:overflow-y-scroll flex flex-col gap-2"
              style={{ "scrollbar-gutter": "stable" }}
            >
              <For each={user.accountsOnProvider?.[props.name] ?? []}>
                {account_data => (
                  <TransactionCard
                    data={account_data}
                    onCardClick={() => void 0}
                  />
                )}
              </For>
            </div>
          </Show>
        </Show>
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
          <PaymentProcessor name={selectedProvider() as Exclude<ReturnType<typeof selectedProvider>, "All">} />
        </Show>
      </div>
    </div>
  );
};

const TransactionsModal: Component = () => {
  return (
    <Modal open={showModal()} onClose={close}>
      <div class="relative bg-white w-[750px] h-[600px] rounded-[16px] overflow-hidden">
        <button class="absolute top-2 right-2" onClick={close}>Close</button>
        <TransactionsModalContent />
      </div>
    </Modal>
  );
};



export const useTransactionModal = () => [open, close];
export default TransactionsModal