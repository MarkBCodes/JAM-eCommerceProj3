import React, { Component } from "react";
import { InventoryConsumer } from "../Context_api";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <InventoryConsumer>
        {value => {
          const {
            id,
            size,
            img,
            productDetails,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-5">
              {/* title */}
              {/* <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>  NOTE:  Commenting out as this is a duplicate title. 
              </div> */}
              {/* end of title */}
              {/* Product image */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                {/* prdoduct info/details */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2> {title}</h2>
                  <h4 className="text-title text-capitalize mt-3 mb-2">
                    Size: <span className="text-capitalize">{size}</span>
                    {/* Note: need to figure out how to add a drop down menu for size options: Small, Medium, Large */}
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-uppercase font-weight-bold mt-3 mb-2">
                    Product Details:
                  </p>
                  <p className="text-muted lead">{productDetails}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/Apparel">
                      <ButtonContainer>
                        Continue Shopping Apparel
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </InventoryConsumer>
    );
  }
}
