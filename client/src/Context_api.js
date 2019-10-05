import React, { Component } from "react";
import { productInventory, detailProduct } from "./data";

const InventoryContext = React.createContext();

// Provider
// Consumer

class InventoryProvider extends Component {
  state = {
    products: productInventory,
    detailProduct: detailProduct
  };
  handleDetail = () => {
    console.log("hello from the details info");
  };

  addtocart = () => {
    console.log("hello from detail");
  };

  render() {
    return (
      <InventoryContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addtocart: this.addtocart
        }}
      >
        {this.props.children}
      </InventoryContext.Provider>
    );
  }
}

const InventoryConsumer = InventoryContext.Consumer;

export { InventoryProvider, InventoryConsumer };
