import type { FlowComponent } from "solid-js";

import { Portal } from "solid-js/web";
import { Show } from "solid-js";

const Modal: FlowComponent<{ open: boolean, onClose: () => unknown }> = (props) => (
  <Portal>
    <Show when={props.open}>
      <div class="z-50 fixed inset-0 flex justify-center items-center">
        <div class="absolute inset-0 bg-black/20" onClick={props.onClose} />
        <div class="relative z-[55]">
          {props.children}
        </div>
      </div>
    </Show>
  </Portal>
);

export default Modal;
