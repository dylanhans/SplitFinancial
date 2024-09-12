import { useRef } from 'react';
import { useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api';

// MapsLoad function
export function MapsLoad() {
  const inputref = useRef<HTMLInputElement | null>(null);
  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCX0nm7s2bPGhy28mHHrenuiUBUoHq5CwI',
    libraries: ["places"],
  });
  console.log(isLoaded)
  // Handle the places changed event

  return { isLoaded, inputref, searchBoxRef };
}