import type { FlowComponent } from "solid-js";
import { onMount } from "solid-js";
import { useBeforeLeave } from "@solidjs/router";

import { setShowMainLoader } from "@/components/MainLoader";

const HandleTransition: FlowComponent = (props) => {
  onMount(() => setTimeout(() => setShowMainLoader(false), 250));

  useBeforeLeave((e) => {
    const isSubRoute = (e.to as string).match(/\//g)?.length === 1;

    // When it's not a sub route, we don't want to run the fade.
    if (!isSubRoute) {
      e.preventDefault();
      setShowMainLoader(true);

      setTimeout(() => e.retry(true), 250);
    }
  });

  return props.children;
};

export default HandleTransition;
