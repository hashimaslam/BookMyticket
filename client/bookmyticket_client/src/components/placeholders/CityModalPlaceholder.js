import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Lottie from "react-lottie";
import BarLoader from "react-spinners/BarLoader";

import * as tickets from "../../assets/tickets.json";
import Bklogo from "../Header/bklogo";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: tickets.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const CityModalPlaceholder = props => {
  return (
    <div className="city-modal-place">
      <div className="cmodal-place-wrapper">
        {/* <Spinner
          animation="border"
          variant="danger"
          className="cmodal-spinner"
        /> */}
        {/* <Lottie options={defaultOptions} height={300} width={300} /> */}
        <div className="d-flex flex-column  justify-content-center align-items-center">
          <Bklogo
            animation={false}
            width="100px"
            height="100px"
            margin={"0px"}
          />
          <br />
          <BarLoader
            color={"#c02c39"}
            loading={props.loading}
            height={4}
            width={200}
          />
          {/* <h1 className="text-center">Loading Your Shows...</h1> */}
        </div>
      </div>
    </div>
  );
};

export default CityModalPlaceholder;
