import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

import axios from "axios";

export default class ProductList extends Component {
  state = {
    jewelry: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/jewelry").then(res => {
      this.setState({
        jewelry: res.data
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="JAM" title="Jewelry" />
            <div className="row">
              {/* <h3>
                The products will be listed here once we are able to call them
                via MYSQL --code to call database needs to be tested
              </h3> */}
              {this.state.jewelry.map(product => {
                return <Product key={product.id} product={product} />;
              })}
              }
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
