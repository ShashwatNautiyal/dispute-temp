import type { Component } from 'solid-js';
import mapboxgl from 'mapbox-gl';

import { onMount, createSignal } from 'solid-js';

const MapBox: Component<{
  accessToken: string
}> = (props) => {
  const [mapInstance, setMapInstance] = createSignal<mapboxgl.Map | null>(null);
  let mapContainerRef: HTMLDivElement | undefined;

  onMount(() => {
    if (!mapContainerRef) return;
    mapboxgl.accessToken = props.accessToken;

    const map = new mapboxgl.Map({
      container: mapContainerRef,
      style: 'mapbox://styles/mapbox/streets-v12', // Style URL
      center: [-74.5, 40], // Starting position [lng, lat]
      zoom: 9 // Starting zoom
    });
    
    setMapInstance(map);
  })

  return (
    <div class="h-[400px] w-[400px]" ref={mapContainerRef} />
  );
};

export default MapBox;
