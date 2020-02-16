import React from "react";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";
import Image4 from "../../assets/images/image4.jpg";
import Flickity from "react-flickity-component";
const images = [Image1, Image2, Image3, Image4];

const flickityOptions = {
  initialIndex: 2,
  wrapAround: true,
  setGallerySize: false,
  autoPlay: true,
  pageDots: true
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      images: ""
    };
  }
  // componentDidMount() {
  //   fetch(
  //     "https://api.themoviedb.org/3/trending/all/day?api_key=8360d0e72a693c7b24f696ce1b7e6268"
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       const items = data.results;
  //       const movie = items.slice(0, 4);
  //       const image1 = movie[0].backdrop_path;

  //       this.setState({ movies: movie, images: image1 });
  //     });
  // }
  render() {
    return (
      <div className="py-3 carousel-wrapper">
        <Flickity options={flickityOptions} className={"carousel"}>
          {images.map((item, index) => {
            return (
              <div className="flickity-container" key={index}>
                <img className="carousel-img" src={item} alt="img" />
              </div>
            );
          })}

          {/* <img src="https://placeimg.com/640/480/nature" alt="img" />
        <img src="https://placeimg.com/640/480/architecture" alt="img" /> */}
        </Flickity>
      </div>
    );
  }
}

export default Carousel;
