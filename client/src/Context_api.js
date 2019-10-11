import React, { Component } from "react";
import { productInventory, productItem } from "./data";
const InventoryContext = React.createContext();

// Provider --InventoryProvider
// Consumern  --InventoryConsumer

class InventoryProvider extends Component {
  state = {
    products: [],
    cart: [],
    productItem: productItem,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
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
      return { productItem: product };
    });
  };

  addToCart = id => {
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
  increment = id => {
    console.log("increment method");
  };
  decrement = id => {
    console.log("decrement method");
  };
  reomveItem = id => {
    console.log("remove item method");
  };
  clearCart = id => {
    console.log("clear cart");
  };

  render() {
    return (
      <InventoryContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </InventoryContext.Provider>
    );
  }
}

const InventoryConsumer = InventoryContext.Consumer;

export { InventoryProvider, InventoryConsumer };
