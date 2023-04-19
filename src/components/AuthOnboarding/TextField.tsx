import type { Accessor, Component, JSX, Setter } from "solid-js";
import { createSignal, Show, batch } from "solid-js";
import WarningIcon from "@/assets/icons/Warning";

const TextField: Component<{
  type?: "text" | "email" | "password" | "number";
  trailing?: Component<{ disabled: Accessor<boolean> }>;
  loadingIcon?: Component;
  placeholder?: string;
  onSubmit?: (value: string) => unknown;
  value?: Accessor<string>;
  setValue?: Setter<string> | ((value: string) => unknown);
  errorToString?: (error: unknown) => string;
  disabled?: (value: Accessor<string>, loading: Accessor<boolean>) => boolean;
}> = (props) => {
  const [error, setError] = createSignal<null | string>(null);
  const [loading, setLoading] = createSignal(false);

  const [value, setValue] =
    (props.value !== undefined && props.setValue)
      ? [props.value, props.setValue]
      : createSignal("");

  const handleSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = async (event) => {
    event.preventDefault();
    if (props.disabled?.(value, loading) || props.onSubmit === undefined) return;

    try {
      setLoading(true);
      await props.onSubmit(value());
    }
    catch (e) {
      if (props.errorToString) {
        setError(props.errorToString(e));
      }
      else {
        setError(
          e instanceof Error
            ? e.message
            : typeof e === "string"
              ? e
              : "Something went wrong"
        );
      }
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div class="flex flex-col gap-2 w-full">
      <div
        class="flex justify-center bg-white items-center w-full gap-2.5 px-3 py-2 rounded-xl border focus-within:border-[#187FE7] focus-within:outline-[#187FE7]/20 focus-within:outline-2 focus-within:shadow-[0_0_0_2px_rgb(24,127,231,.2)]"
        classList={{
          "border-[#E30000] bg-[#FFF2F4] shadow-[0_0_0_2px_rgb(255,0,0,.2)]": error() !== null,
          "border-[#1d1d1f]/20": error() === null
        }}
      >
        <form
          onSubmit={handleSubmit}
          class="flex justify-start items-center self-stretch flex-grow relative gap-2"
        >
          <input type={props.type}
            class="leading-6 text-[19px] text-left w-full outline-none bg-inherit"
            classList={{
              "text-[#E30000] placeholder:text-[#E30000]": error() !== null
            }}
            value={value()}
            onInput={(event) => batch(() => {
              setError(null);
              setValue(event.currentTarget.value);
            })}

            placeholder={props.placeholder}
          />

          <Show when={loading()}
            fallback={
              props.trailing ? <props.trailing
                disabled={() => props.disabled?.(value, loading)}
              /> : <></>
            }
          >
            {props.loadingIcon ? <props.loadingIcon /> : <></>}
          </Show>
        </form>
      </div>

      <ShownError error={error()} />
    </div>
  );
};

export const ShownError: Component<{ error: string }> = (props) => (
  <Show when={props.error}>
    <div class="text-[#E30000] leading-[16px] text-[12px] font-[Inter] font-normal gap-[2px] ml-1 flex items-center">
      <WarningIcon />
      {props.error}
    </div>
  </Show>
);

export default TextField;