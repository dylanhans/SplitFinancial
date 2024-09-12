import { useRef } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

export function MapsLoad() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCX0nm7s2bPGhy28mHHrenuiUBUoHq5CwI',
    libraries: ["places"],
  });

  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      console.log("Selected place:", place);
    }
  };

  return { isLoaded, inputRef, autocompleteRef, handlePlaceChanged };
}