import React, { Component } from "react";
import { productInventory, detailProduct } from "./data";
const InventoryContext = React.createContext();

// Provider --InventoryProvider
// Consumern  --InventoryConsumer

class InventoryProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: []
  };
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    productInventory.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    }, this.checkCartItems);
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addtocart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <InventoryContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </InventoryContext.Provider>
    );
  }
}

const InventoryConsumer = InventoryContext.Consumer;

export { InventoryProvider, InventoryConsumer };
