import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Slider/Carousel";
import FilterWidget from "../../components/FilterWidget/FilterWidget";
import { MainContext } from "../../components/App";
import PosterCard from "../../components/PosterCard/PosterCard";
import LoadingBar from "react-top-loading-bar";
import { Link } from "react-router-dom";
import Filterspage from "../FiltersPage/FiltersPage";
import FadeIn from "react-fade-in";
import Mymodal from "./Mymodal";
const Movies = () => {
  const maincontext = useContext(MainContext);
  const [upcoming, setUpcoming] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  const [filterpage, setFilterpage] = useState(false);
  useEffect(() => {
    setLoadingBarProgress(30);
    setTimeout(setLoadingBarProgress(100), 5000);
  }, []);
  const handleCominSoon = () => {
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=8360d0e72a693c7b24f696ce1b7e6268&language=en-US&page=1&region=IN"
    )
      .then(res => res.json())
      .then(data => {
        let result = data.results;
        maincontext.dispatcher({ type: "Upcoming", payload: result });
        setUpcoming(true);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };
  const handleNowShow = () => {
    setUpcoming(false);
  };
  const handleFilterClick = () => {
    maincontext.dispatcher({ type: "Sm Filter" });
  };
  return (
    <div>
      <Header />
      <LoadingBar
        progress={loadingBarProgress}
        height={3}
        color="red"
        // onLoaderFinished={() => this.onLoaderFinished(setLoadingBarProgress(0))}
      />
      <Carousel />

      <section className="movies-page-main-wrapper">
        <div className="container-fluid mt-5 pt-3 pb-5 pr-lg-5 pl-lg-5 ">
          <div className="wrapper-title-nav ml-3 mb-3 ">
            <h2 className="wrapper-title-large">Movies</h2>
            <p
              className={
                upcoming
                  ? "mt-2 ml-5 wrapper-title-small"
                  : "mt-2 ml-5 wrapper-title-blue"
              }
              onClick={handleNowShow}
            >
              Now Showing
            </p>
            <p
              className={
                upcoming
                  ? "mt-2 ml-5 wrapper-title-blue"
                  : "mt-2 ml-5 wrapper-title-small"
              }
              onClick={handleCominSoon}
            >
              Coming Soon
            </p>
          </div>
          <div className="row px-lg-3">
            <div className="col-sm-3">
              <FilterWidget />
            </div>
            <div className="col-sm-9 pr-lg-3 pl-lg-2 movie-list-grid-col">
              <div className="movie-listing-grid ">
                {loading ? (
                  <div
                    className="spinner-border text-danger movies-spinner"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : upcoming ? (
                  maincontext.state.UpcomingFilter.map(item => {
                    return (
                      <FadeIn>
                        <div className="mb-sm-3 mr-4" key={item.id}>
                          <PosterCard
                            img={item.poster_path}
                            title={item.title}
                            language={item.original_language}
                            vote={item.vote_count}
                            like={item.vote_average}
                            ready={maincontext.state.ready}
                            id={item.id}
                          />
                        </div>
                      </FadeIn>
                    );
                  })
                ) : (
                  maincontext.state.filteredItems.map(item => {
                    return (
                      <FadeIn>
                        <div className="mb-3 mr-4" key={item.id}>
                          <PosterCard
                            img={item.poster_path}
                            title={item.title}
                            language={item.language}
                            vote={item.vote_count}
                            like={item.vote_average}
                            ready={maincontext.state.ready}
                            id={item.moviesid}
                          />
                          <div className="title-sm-device">
                            {" "}
                            <h6>{item.title}</h6>
                          </div>
                        </div>
                      </FadeIn>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* filter nav show only on mobile break points */}
      {/* <div
            className="wrapper-filter-nav"
            onClick={() => handleFilterClick()}
          >
            <div className="filter-icon">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                width="20px"
                height="22px"
                viewBox="0 0 410.182 410.182"
                style={{ enableBackground: "new 0 0 410.182 410.182" }}
                space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M392.995,0H17.187c-5.632,0-9.216,6.144-5.632,11.264l137.728,193.024c6.144,8.192,9.728,18.944,9.728,29.696v168.448
			c0.512,5.632,5.12,9.216,9.728,7.168l78.336-29.696c2.56-0.512,4.096-3.584,4.096-6.144V233.984
			c0-10.752,3.584-20.992,9.728-29.696L398.627,11.264C402.211,6.144,398.627,0,392.995,0z"
                    />
                  </g>
                </g>
              </svg>
            </div>{" "}
          </div> */}
      <div className="fiter-page-sm-modal">
        {" "}
        <Mymodal />
      </div>
      {/* filter nav ends here */}
    </div>
  );
};

export default Movies;
