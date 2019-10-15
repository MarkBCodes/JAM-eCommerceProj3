import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { InventoryConsumer } from "../../Context_api";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default class Store extends Component {
  render() {
    return (
      <section>
        <InventoryConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="My" title="Jam" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </InventoryConsumer>
      </section>
    );
  }
}
