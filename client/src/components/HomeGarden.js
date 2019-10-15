import React, { Component } from "react";
import axios from "axios";

export default class HomeGarden extends Component {
  state = {
    homegarden: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/merch/homegardenproducts").then(res => {
      this.setState({
        homegarden: res.data
      });
    });
  }
  render() {
    return (
      <div>
        <h3>This is where all the Home & Garden Products will be listed</h3>
      </div>
    );
  }
}
