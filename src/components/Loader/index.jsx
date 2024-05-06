// Loader.js
import React from "react";
import "./Loader.css"; // Import CSS file for styling

const Loader = () => {
  return (
    <>
    
      <h2 className="text-light mb-5">Let Ai finish his work! plzz Wait...</h2>
    <div className="loader-overlay d-flex flex-column">
      <span className="loader"></span>
    </div>
    </>
  );
};

export default Loader;
