import React, { Component } from "react";
import Apparel from "./Apparel";
import Title from "./Title";
import { productInventory } from "../data";
import { InventoryConsumer, InventoryProvider } from "../Context_api";

export default class ProductList extends Component {
  state = {
    apparel: productInventory
  };
  render() {
    console.log(this.state.apparel);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="JAM" title="Fashion" />
            <div className="row">
              <h3>
                The products will be listed here once we are able to call them
                via MYSQL --code to call database needs to be tested
              </h3>
              <InventoryConsumer>
                {value => {
                  console.log(value);
                }}
                {/* {value => {
                  return value.products.map(apparel => {
                    return <Apparel key={apparel.id} apparel={apparel} />;
                  }); 
                  
                  NOTE: this above function is likely not going to work until the database is setup by Mark --since as of now it seems to call Mongodb from previous files!
                }} */}
              </InventoryConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
