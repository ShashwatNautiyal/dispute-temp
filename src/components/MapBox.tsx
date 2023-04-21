import { Component, createEffect, createSignal } from "solid-js";
import mapboxgl from "mapbox-gl";

import { onMount /*createSignal*/ } from "solid-js";
import useRealtimePoints from "@/hooks/useRealtimePoints";

const MapBox: Component<{
  disabled?: boolean;
  accessToken: string;
  onReady?: (instance: mapboxgl.Map) => unknown;
}> = (props) => {
  const [mapInstance, setMapInstance] = createSignal<mapboxgl.Map | null>(null);
  const { coords } = useRealtimePoints();
  let mapContainerRef: HTMLDivElement | undefined;

  function addMarker(cord: mapboxgl.LngLatLike) {
    new mapboxgl.Marker()
      .setLngLat(cord)
      // @ts-ignore
      .addTo(mapInstance());
  }

  createEffect(() => {
    if (mapInstance() && coords()) {
      addMarker(coords());
    }
  });
  onMount(() => {
    if (!mapContainerRef) return;

    const map = new mapboxgl.Map({
      accessToken: props.accessToken,
      container: mapContainerRef,
      style: "mapbox://styles/mapbox/streets-v12", // Style URL
      center: [-74.5, 40], // Starting position [lng, lat]
      zoom: 9, // Starting zoom
    });

    setMapInstance(map);

    props.onReady && props.onReady(map);
  });

  return (
    <div
      class="h-full w-full"
      ref={mapContainerRef}
      classList={{ "pointer-events-none": props.disabled }}
    />
  );
};

export default MapBox;
