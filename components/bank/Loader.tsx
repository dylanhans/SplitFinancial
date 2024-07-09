import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const loader = () => {
  return (
    <div className="loader-container">
      <TailSpin
        visible={true}    // Set to true to show the spinner
        height={80}       // Height of the spinner
        width={80}        // Width of the spinner
        color="#4fa94d"   // Color of the spinner
        ariaLabel="tail-spin-loading"
        radius={1}        // Radius of the spinner
        wrapperStyle={{}} // Additional styles for the wrapper
        wrapperClass=""   // Additional classes for the wrapper
      />
    </div>
  );
}

export default loader;
