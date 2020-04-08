import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Smap from "./Smap";
import { MainContext } from "../../components/App";
import LoadingOverlay from "react-loading-overlay";
import FadeIn from "react-fade-in";
import BarLoader from "react-spinners/BarLoader";
import Bklogo from "../../components/Header/bklogo";
const SeatLayout = props => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const movieId = props.match.params.movieid;
  const history = useHistory();
  const maincontext = useContext(MainContext);
  const handlePrevArrow = () => {
    history.push(`/theatres/${movieId}`);
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=8360d0e72a693c7b24f696ce1b7e6268&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setMovie(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(maincontext.state);
  }, []);

  const handleBookTickets = () => {
    // console.log(maincontext.state.bookedtickets);
    maincontext.dispatcher({
      type: "Set ShowTicketsbtn",
      payload: false
    });
    setLoading(prev => !prev);
    let noOfSeats = maincontext.state.bookedtickets;
    let requestArr = [];
    noOfSeats.map((item, index) => {
      requestArr.push(
        fetch("http://localhost:5000/api/bookticket", {
          method: "PUT",
          body: JSON.stringify(item),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(res => res.json())
      );
    });
    Promise.all(requestArr)
      .then(values => {
        console.log(values);
        setLoading(prev => !prev);
        alert(JSON.stringify(values[0]));
      })
      .catch(err => console.log(err));
  };

  const LoadingContent = props => {
    return (
      <>
        {" "}
        <FadeIn>
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
        </FadeIn>
      </>
    );
  };

  return (
    <div>
      <LoadingOverlay
        active={loading}
        spinner={<LoadingContent loading={loading} />}
      >
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
              <p className="bk-header-title  m-0 pb-1">{movie.title} UA</p>
              <p className="bk-header-thname">{maincontext.state.thname}</p>
            </div>
          </div>
          <div className="mr-5 ">
            <p className="bk-header-ticket mt-4 mr-5">
              {maincontext.state.tickets} Tickets
            </p>
          </div>
        </header>
        <div className="bk-movie-info ml-5 mt-2">
          <p className="date-time mb-sm-2">
            Tuesday, {maincontext.state.date}, {maincontext.state.time}
          </p>
          <span>
            <button className="bk-time-active btn">
              {maincontext.state.time}
            </button>
            <button className="bk-time btn ">12:00 PM</button>
          </span>
        </div>
        {/* seat layout starts here */}
        <div className="seat-layout-container">
          <Smap />
        </div>
        {maincontext.state.showTicketsbtn ? (
          <div className="book-ticket-btn-container">
            <div
              className="book-ticket-btn"
              onClick={() => {
                handleBookTickets();
              }}
            >
              <p>Book Tickets</p>
            </div>
          </div>
        ) : null}
      </LoadingOverlay>
    </div>
  );
};

export default SeatLayout;
