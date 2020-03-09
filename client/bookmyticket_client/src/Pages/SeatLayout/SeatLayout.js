import React from "react";
import { Link, useHistory } from "react-router-dom";
import Smap from "./Smap";
const SeatLayout = props => {
  const movieId = props.match.params.movieid;
  const history = useHistory();
  const handlePrevArrow = () => {
    history.push(`/details/${movieId}`);
  };
  return (
    <div>
      <header className="bk-header">
        <div className="bk-wrapper">
          <span>
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              height="15pt"
              width="15pt"
              viewBox="0 0 240.823 240.823"
              style={{ enableBackground: "new 0 0 240.823 240.823" }}
              className="bk-prev-arrow mt-4 ml-3"
              onClick={handlePrevArrow}
            >
              <g>
                <path
                  id="Chevron_Right"
                  d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179
		l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816
		C52.942,116.507,52.942,124.327,57.633,129.007z"
                />
              </g>
            </svg>
          </span>
          <div className="bk-header-title-wrapper p-3 ">
            <p className="bk-header-title  m-0 pb-1">Baaghi 3 UA</p>
            <p className="bk-header-thname">Carnival Mall</p>
          </div>
        </div>
        <div className="mr-5 ">
          <p className="bk-header-ticket mt-4 mr-5">2 Tickets</p>
        </div>
      </header>
      <div className="bk-movie-info ml-5 mt-2">
        <p className="date-time mb-sm-2">Tuesday, March 03, 9:30AM</p>
        <span>
          <button className="bk-time-active btn">9:30 AM</button>
          <button className="bk-time btn ">12:00 PM</button>
        </span>
      </div>
      {/* seat layout starts here */}
      <div className="seat-layout-container">
        <Smap />
      </div>
    </div>
  );
};

export default SeatLayout;
