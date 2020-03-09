import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../App";
import Carousel from "react-multi-carousel";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import PosterCard from "../PosterCard/PosterCard";
// const APIKEY = process.env.REACT_APP_API_KEY;
export default function PosterSlider(props) {
  const [details, setDetails] = useState([]);
  // const [ready, setReady] = useState(false);
  const maincontext = useContext(MainContext);
  const ready = maincontext.state.ready;
  const state = maincontext.state.items;
  const [recomendations, setRecom] = useState(false);
  useEffect(() => {
    if (props.movie_id) {
      fetch(
        `https://api.themoviedb.org/3/movie/${props.movie_id}/recommendations?api_key=8360d0e72a693c7b24f696ce1b7e6268&language=en-US&page=1`
      )
        .then(res => res.json())
        .then(data => {
          let temp = data.results.slice(0, 10);

          setDetails(temp);

          setRecom(recomendations => !recomendations);
          state = temp;

          console.log(details);
        })
        .catch(err => console.log(err));
    }
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: props.number || 3,
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
        {state.map(item => {
          return (
            <div key={item.moviesid}>
              <PosterCard
                img={item.poster_path}
                title={item.title}
                language={item.language}
                vote={item.vote_count}
                like={item.vote_average}
                ready={ready}
                id={item.moviesid}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
