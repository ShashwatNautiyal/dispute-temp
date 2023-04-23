import type { Component } from "solid-js";

import { Motion, Presence } from "@motionone/solid";
import { Switch, Match, createSignal, Show, batch, For } from "solid-js";
import { setUser } from "@/stores/user";

// import Header from "@/components/Header";

import DisputeLogo from "@/assets/icons/DisputeLogo";
import TextField from "./TextField";
import { createStore } from "solid-js/store";

import ArrowIcon from "@/assets/icons/Arrow";
import { callApiAuthenticate, callApiRequestCode } from "@/api";

const [showOnboardingContent, setShowOnboardingContent] = createSignal(true);
const [onboardingStep, setOnboardingStep] = createSignal<
  | "EMAIL"
  | "OTP"
>("EMAIL");

const [state, setState] = createStore({
  email: "",
  method_id: ""
})

const OnboardingStepEmail: Component = () => (
  <div class="h-full w-full flex items-center justify-center">
    <Motion.div class="absolute m-auto flex flex-col items-center gap-4"
      animate={{ opacity: [0, 1], y: [0, -80] }}
      transition={{ duration: 2, opacity: { offset: [0, 0.25] }, y: { offset: [0.8, 1] } }}
    >
      <DisputeLogo />
    </Motion.div>

    <Motion.div class="absolute m-auto flex flex-col gap-6 max-w-[326px] text-center"
      initial={{ opacity: 0, y: 30 + 20 }}
      animate={{ opacity: 1, y: 30 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <div class="flex flex-col items-center gap-1 text-center">
        <Motion.h1
          class="text-[24px] leading-8 font-bold"
          initial={{ opacity: 0, scale: 1, y: -5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1, y: 5 }}
          transition={{ duration: 0.3 }}
        >
          Access Dispute
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, scale: 1, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1, y: 5 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          class="text-[15px] font-normal leading-6"
        >
          Fraud protection for your business. It's Free
        </Motion.p>
      </div>

      <Motion.div
        initial={{ opacity: 0, scale: 1, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 5 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        class="w-[320px]"
      >
        <TextField
          loadingIcon={() => (
            <div class="flex justify-start items-center p-2 rounded-3xl bg-[#199bf9] animate-pulse">
              <div class="w-[16px] h-[16px] rounded-lg animate-pulse bg-gray-400 p-1.5" />
            </div>
          )}
          value={() => state.email}
          setValue={(value: string) => setState("email", value)}
          onSubmit={async (email) => {
            try {
              const res = await callApiRequestCode(state.email);
  
              batch(() => {
                setState("method_id", res.email_id);
                setOnboardingStep("OTP");
              })
            }
            catch {
              console.error("error while asking otp");
            }
          }}
          disabled={(email, loading) => loading() || !email()}
          placeholder="Your email"
          trailing={(props) => (
            <button
              disabled={props.disabled()}
              type="submit"
              classList={{
                "bg-[#199bf9]": !props.disabled(),
                "bg-[#1d1d1f]/20": props.disabled(),
              }}
              class="flex justify-start items-center p-2 rounded-3xl"
            >
              <ArrowIcon />
            </button>
          )}
        />
      </Motion.div>
    </Motion.div>
  </div>
);

const OnboardingStepOtp: Component = () => {
  const PIN_LENGTH = 6;

  const [pin, setPin] = createSignal<Array<string | null>>(
    new Array(PIN_LENGTH).fill(null)
  );
  const [error, setError] = createSignal<null | string>(null);
  const onSubmit = async () => {
    const code = pin().join("");
    try {
      const jwt = await callApiAuthenticate({
        code,
        email: state.email,
        method_id: state.method_id
      });

      localStorage.setItem("token", jwt);
      setUser({ loggedIn: true, jwt });
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : typeof e === "string"
          ? e
          : "Something went wrong"
      );
    }
  };
  const onInput = (e: string, idx: number) => {
    if (isNaN(parseInt(e))) return;
    setError(null);
    const upperIdx = idx + 1;
    setPin((prev) => {
      const asArr = prev.slice();
      asArr[idx] = e;
      return asArr;
    });
    const nextEmpty = pin()
      .slice(upperIdx)
      .findIndex((e) => !e);
    if (upperIdx !== PIN_LENGTH && nextEmpty !== -1) {
      document.getElementById(`pin-${upperIdx}`)?.focus();
    } else {
      document.getElementById(`pin-${idx}`)?.blur();
      onSubmit();
    }
  };
  
  return (
    <div class="h-full flex items-center justify-center">
      <div class="flex items-center flex-col gap-4">
        <div class="m-auto flex flex-col items-center gap-4">
          <DisputeLogo />
        </div>

        <div class="m-auto flex flex-col gap-6 max-w-[326px] text-center">
          <div class="flex flex-col items-center gap-1 text-center">
            <h1
              class="text-[24px] leading-8 font-bold"
            >
              Check your email
            </h1>

            <p
              class="text-[15px] font-normal leading-6"
            >
              Enter the security code we emailed you to confirm you're not a robot
            </p>
          </div>

          <Motion.div
            initial={{ opacity: 0, scale: 1, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            transition={{ duration: 0.3 }}
            class="w-[320px]"
          >
            <form
              class="flex flex-col gap-2"
              onPaste={(e) => {
                const text = e.clipboardData?.getData("text");
                if (text) {
                  const cop = text.split("");
                  for (const [idx, char] of cop.entries()) {
                    onInput(char, idx);
                  }
                }
              }}
            >
              <div class="flex gap-2 items-center">
                <For each={new Array(PIN_LENGTH).fill(null)}>
                  {(_, index) => (
                    <Motion.div
                      initial={{ opacity: 0, scale: 1, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 5 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <input
                        id={`pin-${index()}`}
                        maxLength={1}
                        inputMode="decimal"
                        autofocus={index() === 0}
                        min={0}
                        max={9}
                        classList={{
                          "w-12 p-1.5 h-12 bg-[#f2f2f2] flex text-center items-center justify-center rounded-lg border-2 text-xl font-bold focus:outline-[#187FE7]/20 focus:outline-2 focus:outlineShadow focus:border-[#187FE7]":
                            true,
                          "outlineShadowError bg-[#FFF2F4] border-[#E30000]":
                            error() !== null,
                        }}
                        value={pin()[index()] ?? ""}
                        onInput={(e) => {
                          e.preventDefault();
                          const cop = pin().slice();
                          cop[index()] = e.currentTarget.value;
                          for (const [i, v] of cop.entries()) {
                            if (v !== "" && isNaN(parseInt(v as string))) {
                              cop[i] = "";
                            }
                          }
                          e.currentTarget.value = cop[index()] as string;
                          setError(null);
                          onInput(e.currentTarget.value, index());
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace") {
                            if (index() === 0) return;
                            const asArr = pin();
                            const ele = asArr[index()];
                            if (!ele) {
                              e.preventDefault();
                              document.getElementById(`pin-${index() - 1}`)?.focus();
                            } else {
                              asArr[index()] = null;
                              setPin(asArr);
                            }
                          }
                        }}
                      />
                    </Motion.div>
                  )}
                </For>
              </div>
              {/* <ShownError error={error} /> */}
              <Presence exitBeforeEnter>
                <Show when={state.method_id}>
                  <Motion.div
                    initial={{ opacity: 0, scale: 1, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 5 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <span class="text-[#1d1d1f]">
                      {error() === null ? "No code?" : error()}{" "}

                      <button
                        class="underline"
                        onClick={() => setOnboardingStep("EMAIL")}
                      >
                        Try again
                      </button>
                    </span>
                  </Motion.div>
                </Show>
              </Presence>
            </form>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

const AuthOnboarding: Component = () => {
  return (
    <Motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}
      class="fixed flex justify-center items-center inset-0 p-2"
    >
      <div class="relative bg-white max-w-[750px] w-full h-[600px] shadow-xl transition-[border-radius] overflow-hidden rounded-lg">
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
              <Presence exitBeforeEnter>
                <Switch>
                  <Match when={onboardingStep() === "EMAIL"}>
                    <OnboardingStepEmail />
                  </Match>
                  <Match when={onboardingStep() === "OTP"}>
                    <OnboardingStepOtp />
                  </Match>
                </Switch>
              </Presence>
            </Motion.div>
          </Show>
        </Presence>
      </div>
    </Motion.div>
  );
};

export default AuthOnboarding;
