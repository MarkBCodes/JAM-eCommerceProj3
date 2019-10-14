import React, { Component } from "react";
import axios from "axios";

export default class Jewelry extends Component {
  state = {
    jewelry: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/merch/jewelry").then(res => {
      this.setState({
        jewelry: res.data
      });
    });
  }
  render() {
    return (
      <div>
        <h3>This is where the Jewelry Products will be listed</h3>
      </div>
    );
  }
}
