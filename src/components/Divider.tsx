import { Component } from "solid-js";

const Divider: Component<{
  addClass?: string;
}> = (props) => {
  return (
    <div
      style={{
        border: "1px solid rgba(29, 29, 31, 0.08)",
      }}
      class={`${props.addClass ?? ""}`}
    />
  );
};

export default Divider;
