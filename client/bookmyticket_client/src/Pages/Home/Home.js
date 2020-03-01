import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ListWidget from "../../components/ListWidget/ListWidget";
import PosterCard from "../../components/PosterCard/PosterCard";
import Carousel from "../../components/Slider/Carousel";
import PosterSlider from "../../components/SecondarySlider/PosterSlider";
const APIKEY = process.env.REACT_APP_API_KEY;
// import img1 from "../../components/PosterCard/img1.png";
// import img2 from "../../components/PosterCard/img2.png";
// import img3 from "../../components/PosterCard/img3.png";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1&region=IN`
    )
      .then(res => res.json())
      .then(data => {
        let result = data.results.slice(0, 10);
        setApiData(result);
      });
  });
  return (
    <div>
      <Header />
      <Carousel />
      <section className="main-wrapper">
        <div className="container-fluid p-lg-4">
          <div className="row m-lg-3 ">
            <div className="col-sm-3 pl-lg-4 wrapper-left">
              <div className=" wrapper-left-ad">
                <img
                  src="https://tpc.googlesyndication.com/simgad/18192488742423614520"
                  alt=""
                  className="ad-img"
                />
              </div>
              <p className="movies-wrapper-heading mt-lg-5">Trending Search</p>
              <div className="pr-lg-3 wrapper-left-list">
                <ListWidget />
              </div>
            </div>
            <div className="col-sm-9 p-lg-0 wrapper-right">
              <div className="movies-wrapper">
                <h3 className="mb-lg-3 ml-lg-3 movies-wrapper-heading">
                  Movies
                </h3>
                <p className="anchor-tags">View All</p>
                <PosterSlider />
              </div>
              <div className="movies-wrapper">
                <h3 className="mb-lg-3 ml-lg-3 movies-wrapper-heading">
                  Movies
                </h3>
                <p className="anchor-tags">View All</p>
                <PosterSlider />
              </div>
            </div>
            {/* Mobile Responsive section hidden on large screens starts here*/}
            <span className="title-sm-screen">
              <h3 className="ml-3 mt-2">Movies</h3>
              <p className="mr-3 mt-3" style={{ color: "blue" }}>
                View All
              </p>
            </span>
            <div className="list-item-scroll">
              {apiData.map((item, index) => {
                return (
                  <div className="card-wrap-first" key={index}>
                    <div>
                      <PosterCard
                        img={item.poster_path}
                        title={item.title}
                        like={item.vote_average}
                      />
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
            <span className="title-sm-screen">
              <h3 className="ml-3 mt-2">Movies</h3>
              <p className="mr-3 mt-3" style={{ color: "blue" }}>
                View All
              </p>
            </span>
            <div className="list-item-scroll">
              {apiData.map((item, index) => {
                return (
                  <div className="card-wrap-first" key={index}>
                    <div>
                      <PosterCard
                        img={item.poster_path}
                        title={item.title}
                        like={item.vote_average}
                      />
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* mobile Responsive section ends here */}
          </div>
        </div>
      </section>
      {/* <PosterCard img={img1} /> */}
    </div>
  );
};

export default Home;
