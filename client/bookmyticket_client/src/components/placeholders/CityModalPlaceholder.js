import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Lottie from "react-lottie";
import * as tickets from "../../assets/tickets.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: tickets.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const CityModalPlaceholder = () => {
  return (
    <div className="city-modal-place">
      <div className="cmodal-place-wrapper">
        {/* <Spinner
          animation="border"
          variant="danger"
          className="cmodal-spinner"
        /> */}
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </div>
  );
};

export default CityModalPlaceholder;
