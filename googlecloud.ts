import { useRef } from 'react';
import { useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api';

// MapsLoad function
export function MapsLoad() {
  const inputref = useRef<HTMLInputElement | null>(null);
  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_UNRESTRICTED_GOOGLECLOUD_API_KEY!,
    libraries: ["places"],
  });
  console.log(isLoaded)
  // Handle the places changed event
  const handleOnPlacesChanged = () => {
    if (searchBoxRef.current) {
      const places = searchBoxRef.current.getPlaces();
      console.log("address", places);
    }
  };

  return { isLoaded, inputref, searchBoxRef, handleOnPlacesChanged };
}