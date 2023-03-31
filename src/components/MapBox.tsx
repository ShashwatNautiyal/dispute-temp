import type { Component } from 'solid-js';
import mapboxgl from 'mapbox-gl';

import { onMount, /*createSignal*/ } from 'solid-js';

const MapBox: Component<{
  disabled?: boolean,
  accessToken: string,
  onReady?: (instance: mapboxgl.Map) => unknown
}> = (props) => {
  // const [mapInstance, setMapInstance] = createSignal<mapboxgl.Map | null>(null);
  let mapContainerRef: HTMLDivElement | undefined;

  onMount(() => {
    if (!mapContainerRef) return;

    const map = new mapboxgl.Map({
      accessToken: props.accessToken,
      container: mapContainerRef,
      style: 'mapbox://styles/mapbox/streets-v12', // Style URL
      center: [-74.5, 40], // Starting position [lng, lat]
      zoom: 9, // Starting zoom
    });
    
    // setMapInstance(map);
    props.onReady && props.onReady(map);
  })

  return (
    <div class="h-full w-full" ref={mapContainerRef}
      classList={{ "pointer-events-none": props.disabled }}
    />
  );
};

export default MapBox;
