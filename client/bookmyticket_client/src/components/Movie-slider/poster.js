import React, { Component } from "react";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";
import Image4 from "../../assets/images/image4.jpg";
import Slider from "../../components/Movie-slider/Slider";

const images = [Image1, Image2, Image3, Image4];

export default class Poster extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }} />
        <Slider
          options={{
            autoPlay: 4000,
            pauseAutoPlayOnHover: true,
            wrapAround: true,
            fullscreen: true,
            adaptiveHeight: true
          }}
        >
          {images.map((image, index) => (
            <div
              style={{ width: "60%", height: "290px", margin: "0 0.5em" }}
              key={index}
            >
              <img
                src={image}
                style={{ width: "100%", height: "290px", borderRadius: "5px" }}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
