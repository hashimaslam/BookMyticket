import React from "react";
import Spinner from "react-bootstrap/Spinner";

const CityModalPlaceholder = () => {
  return (
    <div className="city-modal-place">
      <div className="cmodal-place-wrapper">
        <Spinner
          animation="border"
          variant="danger"
          className="cmodal-spinner"
        />
      </div>
    </div>
  );
};

export default CityModalPlaceholder;
