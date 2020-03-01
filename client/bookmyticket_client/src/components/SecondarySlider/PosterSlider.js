import React, { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import PosterCard from "../PosterCard/PosterCard";
const APIKEY = process.env.REACT_APP_API_KEY;
export default function PosterSlider() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1&region=IN`
    )
      .then(res => res.json())
      .then(data => {
        let temp = data.results.slice(0, 10);
        setDetails(temp);
        console.log(details);
      })
      .catch(err => console.log(err));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  return (
    <div className="slider-wrapper pr-lg-3 mr-sm-5">
      <Carousel
        ssr
        partialVisbile={false}
        itemClass="image-item"
        responsive={responsive}
        slidesToSlide={3}
      >
        {details.map(item => {
          return (
            <PosterCard
              img={item.poster_path}
              title={item.title}
              language={item.original_language}
              vote={item.vote_count}
              like={item.vote_average}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
