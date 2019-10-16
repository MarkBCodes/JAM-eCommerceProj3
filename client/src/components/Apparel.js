import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
// import { productInventory } from "../data"; NOTE: remove this line of code once done testing
//import { InventoryConsumer, InventoryProvider } from "../Context_api";
import axios from "axios";

export default class ProductList extends Component {
  state = {
    apparel: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/merch").then(res => {
      this.setState({
        apparel: res.data
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="JAM" title="Fashion" />
            <div className="row">
              {/* <h3>
                The products will be listed here once we are able to call them
                via MYSQL --code to call database needs to be tested
              </h3> */}
              {this.state.apparel.map(product => {
                return <Product key={product.id} product={product} />;
              })}

              {/* {value => {
                  return value.products.map(apparel => {
                    return <Apparel key={apparel.id} apparel={apparel} />;
                  }); 
                }} */}
              {/* NOTE: this above function is likely not going to work until the database is setup by Mark --since as of now it seems to call Mongodb from previous files! */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
