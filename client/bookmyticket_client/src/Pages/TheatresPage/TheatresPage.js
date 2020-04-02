import React, { useState, useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import { MainContext } from "../../components/App";
import LoadingBar from "react-top-loading-bar";
import FadeIn from "react-fade-in";
const TheatresPage = props => {
  let datenow = new Date();
  const [movie, setMovie] = useState([]);
  const [casts, setCast] = useState([]);
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  const [selectedDate, setSelectedDate] = useState(datenow.getDate());
  const maincontext = useContext(MainContext);
  let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];
  let date = [];
  let month = [];
  let i = 0;
  while (i < 5) {
    let d = new Date();
    d.setDate(d.getDate() + i);

    date.push(d.getDate());
    month.push(months[d.getMonth()]);
    i++;
  }
  useEffect(() => {
    setLoadingBarProgress(30);
    const id = props.match.params.movieid;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8360d0e72a693c7b24f696ce1b7e6268&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setLoadingBarProgress(100);
        setMovie(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const handleCurrDate = d => {
    setSelectedDate(d);
    console.log(maincontext.state.theatres);
  };
  const theatres = maincontext.state.theatres;
  return (
    <div>
      <Header />

      <div className="tp-movie-details">
        <div className="fix-height-div">
          <div className="tp-movieinfo-container px-lg-3">
            <div>
              <span>
                {" "}
                <span className="tp-info-title mr-3">{movie.title}</span>
                <div className="mt-2">
                  <p className="md-genre-tag mr-3">Action</p>
                  <p className="md-genre-tag ">Action</p>
                </div>
              </span>
              <div className="mb-2">
                <span className=" mr-3">UA 77%</span>
                <span className=" mr-3">
                  {Math.ceil(movie.runtime / 60)} hrs
                </span>
                <span className=" mr-3"> {movie.release_date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-date-picker">
        <div className="date-picker-wrapper">
          {date.map((item, index) => {
            return (
              <FadeIn>
                <div
                  className={
                    selectedDate == item
                      ? "date-picker-container date-picker-container-blue"
                      : "date-picker-container"
                  }
                  onClick={e => handleCurrDate(item)}
                  key={item}
                >
                  <div className="tp-date">{item}</div>
                  <div className="tp-month">{month[index]}</div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
      <main>
        <div className="container-fluid mt-sm-3">
          <div className="row">
            <div className="col-sm-10">
              <div className="tp-th-list">
                {theatres.map((item, index) => {
                  return (
                    <FadeIn delay={70} transitionDuration={600}>
                      <div className="tp-th-container" key={item.id}>
                        <div className="tp-th-name">{item.theatre_name}</div>
                        <div className="tp-timings">
                          <button className="btn btn-outline-success mr-3">
                            08:05 PM
                          </button>
                          <button className="btn btn-outline-success mr-3">
                            01:05 PM
                          </button>
                          <button className="btn btn-outline-success mr-3">
                            08:05 PM
                          </button>
                          <button className="btn btn-outline-success mr-3">
                            08:05 PM
                          </button>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TheatresPage;
