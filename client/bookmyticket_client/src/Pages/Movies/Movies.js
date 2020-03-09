import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Slider/Carousel";
import FilterWidget from "../../components/FilterWidget/FilterWidget";
import { MainContext } from "../../components/App";
import PosterCard from "../../components/PosterCard/PosterCard";
const Movies = () => {
  const maincontext = useContext(MainContext);
  const [upcoming, setUpcoming] = useState(false);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   console.log(maincontext.state);
  // }, []);
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
  return (
    <div>
      <Header />
      <Carousel />
      <section className="movies-page-main-wrapper">
        <div className="container-fluid mt-5 pt-3 pb-5 pr-5 pl-5 ">
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
          <div className="row px-3">
            <div className="col-sm-3">
              <FilterWidget />
            </div>
            <div className="col-sm-9 pr-3 pl-2">
              <div className="movie-listing-grid ">
                {loading && (
                  <div class="spinner-border text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
                {upcoming
                  ? maincontext.state.UpcomingFilter.map(item => {
                      return (
                        <div className="mb-3 mr-4" key={item.id}>
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
                      );
                    })
                  : maincontext.state.filteredItems.map(item => {
                      return (
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
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;
