import { createSignal, onCleanup, onMount } from "solid-js";

export default function useRealtimePoints() {
  const [coords, setCoords] = createSignal<any>();

  onMount(() => {
    // const sse = new EventSource("http://localhost:8000/");
    // sse.onmessage = (event) => {
    //   setCoords(JSON.parse(event.data));
    // };
    // onCleanup(() => sse.close());
  });
  return {
    coords,
  };
}
