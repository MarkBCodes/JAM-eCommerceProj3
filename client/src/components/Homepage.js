import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

class Homepage extends Component {
  render() {
    return (
      <Carousel infiniteLoop autoPlay dynamicHeight>
        <div className="main-carousel">
          <img src="img/autumn-photographer-taking-picture_925x.jpg" />
          <p className="legend">Trending in Apparel Right Now</p>
        </div>
        <div>
          <img src="img/city-woman-fashion_925x@2x.jpg" />
          <p className="legend">Trending in Jewelry, Right now!</p>
        </div>
        <div>
          <img src="img/woman-in-the-city_925x.jpg" />
          <p className="legend">Trending in Home & Garden, Right Now!</p>
        </div>
      </Carousel>
    );
  }
}

export default Homepage;

// const Carousel = styled.homepage`
//   .main-carousel {
//     background: var(--mainDark);
//     color: var(--red);
//   }
// `;
