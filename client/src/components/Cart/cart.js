import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";

export default class cart extends Component {
  render() {
    return (
      <section>
        <Title name="my" title="jam" />
        <CartColumns />
      </section>
    );
  }
}
