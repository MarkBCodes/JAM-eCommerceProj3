import React, { Component } from "react";
import Banner from "react-js-banner";
// import { Wave } from "react-animated-text";
// const ExampleOne = () => <Wave text="EXAMPLE TEXT" />;

export default class PromotionBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner2Css: {
        color: "#000",
        backgroundColor: "#FFE6A9",
        fontFamily: "arial"
      }
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Banner
          title="FREE SHIPPING on all Orders, TODAY ONLY!"
          css={this.state.banner2Css}
        />
      </div>
    );
  }
}
