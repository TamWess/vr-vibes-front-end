import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";

export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
          <img className="carouselHomeImages" src="/img/vader-immortal-episode-3.JPG" alt=""/>
		  <img className="carouselHomeImages" src="/img/star-wars-squadrons-01.jpg" alt=""/>
		  <img className="carouselHomeImages" src="/img/beat-saber-01.jpg" alt=""/>
        </Slider>
    );
  }
}
