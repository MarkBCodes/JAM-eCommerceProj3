import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./cartColumns";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <Title name="my" title="jam" />
        <CartColumns />
      </section>
    );
  }
}
// silly
