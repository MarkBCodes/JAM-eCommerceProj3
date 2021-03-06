/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
import Slider from "react-slick";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        {/* <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4> */}
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          // this is the second nav
        >
          <div class="container">
            <img src="/Img/smiling-woman-poses_463px.jpg" />
            <Link to="/apparel" button class="btn">
              Shop Apparel
            </Link>
          </div>
          <div class="container">
            <img src="/Img/bangle-bracelet-with-feathers_463x.jpg" />
            <Link to="/jewelry" button class="btn">
              Shop Jewelry
            </Link>
          </div>
          <div class="container">
            <img src="/Img/copper-light-in-bedroom_463x.jpg" />
            <Link to="/homeGarden" button class="btn">
              Shop Home & Garden
            </Link>
          </div>
        </Slider>

        {/* <h4>Second Slider</h4> */}
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <img src="/Img/imageslider2.jpg" />
          </div>
          {/* <div>
            <img src="/Img/image slider.jpg" />
          </div> */}
        </Slider>
      </div>
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
