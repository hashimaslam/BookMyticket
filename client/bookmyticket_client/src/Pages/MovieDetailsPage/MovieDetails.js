import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/Header/Header";
import PosterSlider from "../../components/SecondarySlider/PosterSlider";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "semantic-ui-css/semantic.min.css";
import noimg from "../../assets/images/noimg.png";
import altimg from "../../assets/images/altbackdp.jpeg";
import "react-multi-carousel/lib/styles.css";
import { MainContext } from "../../components/App";
import LoadingBar from "react-top-loading-bar";
import VideoModal from "../../components/VideoModal/VideoModal";

import ModalVideo from "react-modal-video";

const MovieDetail = props => {
  const maincontext = useContext(MainContext);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      paritialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      paritialVisibilityGutter: 10
    }
  };
  const [movie, setMovie] = useState([]);
  const [casts, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [videos, setVideos] = useState([]);
  const [id, setId] = useState(props.match.params.movieid);
  const [lang, setlang] = useState(props.match.params.language);
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  useEffect(() => {
    setLoadingBarProgress(30);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8360d0e72a693c7b24f696ce1b7e6268&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setMovie(data);
        setLoadingBarProgress(100);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8360d0e72a693c7b24f696ce1b7e6268`
    )
      .then(res => res.json())
      .then(data => {
        setCast(data.cast);
        setCrew(data.crew);
      })
      .catch(err => console.log(err));
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=8360d0e72a693c7b24f696ce1b7e6268&language=${lang}`
    )
      .then(res => res.json())
      .then(data => {
        setVideos(data.results);
      })
      .catch(err => console.log("video not available"));
    console.log("entered");
  }, []);
  let modal = <VideoModal video={videos[0] ? videos[0] : ""} />;
  return (
    <div>
      <LoadingBar progress={loadingBarProgress} height={3} color="red" />

      <Header />

      <div className="movie-details-wrapper">
        <img
          className="md-page-image-banner"
          src={
            movie.backdrop_path
              ? `http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
              : altimg
          }
          alt="imagebanner"
        />
        <div className="videos-wrapper">
          {videos ? (
            videos.map(item => {
              return (
                <div className="video-container" key={item.id}>
                  <iframe
                    className="video-frame"
                    src={`https://www.youtube.com/embed/${item.key}`}
                  ></iframe>
                </div>
              );
            })
          ) : (
            <div className="video-container">
              <div className="video-frame"></div>
            </div>
          )}
        </div>
        <div className="md-page-image-overlay"></div>
        <div className="md-ratings-bookticket">
          <h2 className="md-vote-count">Vote Count: {movie.vote_count}</h2>
          <Link to={`/theatres/${movie.id}`}>
            <button className="ticket-button">Book Tickets</button>
          </Link>
        </div>
        <div className="md-page-info-wrapper">
          {/* conatiner starts */}
          <div className="conatiner-fluid">
            <div className="row mx-0">
              <div className="col-sm-3">
                <div className="poster-image-wraper">
                  <img
                    className="md-poster-image"
                    src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  {modal}
                </div>
              </div>

              <div className="col-sm-6 summary-wrapper">
                {/* info-part-starts here */}
                <div className="md-page-info">
                  <div>
                    <h2 className="md-info-title">{movie.title}</h2>
                  </div>
                  <div>
                    <span>
                      <h5 className=" mr-3 md-info-tag">UA | </h5>
                      <h5 className="md-info-tag">
                        {movie.original_language === "hi"
                          ? "Hindi"
                          : movie.original_language === "ta"
                          ? "Tamil"
                          : movie.original_language === "en"
                          ? "English"
                          : movie.original_language === "kn"
                          ? "Kannad"
                          : movie.original_language === "te"
                          ? "Telugu"
                          : movie.original_language === "ml"
                          ? "Malayalam"
                          : movie.original_language}
                      </h5>
                    </span>
                  </div>
                  <div>
                    <span>
                      <p className="md-genre-tag mr-3">Action</p>
                      <p className="md-genre-tag ">Action</p>
                    </span>
                  </div>
                  <div>
                    <p className="md-info-tag-small mr-3">
                      {movie.release_date}
                    </p>
                    <p className="md-info-tag-small">
                      {Math.ceil(movie.runtime / 60)} hrs
                    </p>
                  </div>
                </div>
                {/* info  part ends here */}
                {/* summary starts here */}
                <div className="md-page-summary">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Summary">
                      <div className="summary-body mt-5">
                        <h4>SYNOPSIS</h4>
                        <p className="summary-overview mt-3">
                          {movie.overview}
                        </p>
                        {/* {cast info} */}
                        <div className="md-info-cast">
                          <h4>CAST</h4>
                          <div className="slider-wrapper">
                            <Carousel
                              ssr
                              partialVisbile={false}
                              itemClass="image-item"
                              responsive={responsive}
                              slidesToSlide={4}
                            >
                              {casts.map(item => {
                                return (
                                  <div
                                    key={item.credit_id}
                                    className="cast-slider-wrapper"
                                  >
                                    {item.profile_path ? (
                                      <img
                                        className="md-cast-image"
                                        src={`http://image.tmdb.org/t/p/w154/${item.profile_path}`}
                                      />
                                    ) : (
                                      <img
                                        src={noimg}
                                        className="md-cast-image"
                                      />
                                    )}

                                    <p className="cast-name">{item.name}</p>
                                    <p className="text-muted cast-role">
                                      Actor As
                                    </p>
                                    <p className="cast-char">
                                      {item.character}
                                    </p>
                                  </div>
                                );
                              })}
                            </Carousel>
                          </div>
                        </div>
                        {/* cast info ends */}
                        {/* crew info starts */}
                        <div className="md-info-crew mt-3">
                          <h4>CREW</h4>
                          <div className="slider-wrapper">
                            <Carousel
                              ssr
                              partialVisbile={false}
                              itemClass="image-item"
                              responsive={responsive}
                              slidesToSlide={4}
                            >
                              {crew.map(item => {
                                return (
                                  <div
                                    key={item.credit_id}
                                    className="cast-slider-wrapper"
                                  >
                                    {item.profile_path ? (
                                      <img
                                        className="md-cast-image"
                                        src={`http://image.tmdb.org/t/p/w154/${item.profile_path}`}
                                      />
                                    ) : (
                                      <img
                                        src={noimg}
                                        className="md-cast-image"
                                      />
                                    )}
                                    <p className="cast-name">{item.name}</p>

                                    <p className="cast-char">{item.job}</p>
                                  </div>
                                );
                              })}
                            </Carousel>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="profile" title="User Reviews">
                      <p className="text-muted mt-3">
                        No user reviews were given
                      </p>
                    </Tab>
                    <Tab eventKey="contact" title="Crictic Reviews">
                      <p className="text-muted mt-3">
                        No user reviews were given
                      </p>
                    </Tab>
                  </Tabs>
                </div>
              </div>
              <div className="col-sm-3 mt-3">
                <img
                  src="https://tpc.googlesyndication.com/simgad/16660177321979173874"
                  className="md-ad"
                />
              </div>
            </div>
          </div>
          {/* Conatiner ends here */}
          <div className="recomended-movies mt-5 px-lg-5">
            <h3>Movies you may like</h3>
            <PosterSlider
              number={4}
              categorey="recomendations"
              movie_id={props.match.params.movieid}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
