import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { InventoryConsumer } from "../Context_api"; //NEED TO CHANGE TO REFERENCE DB

export default class Product extends Component {
  render() {
    const {
      id,
      title,
      img,
      price,
      // size,
      // productDetails,
      // inStock,
      inCart
      // count,
      // total
    } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <InventoryConsumer>
            {value => {
              return (
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top" />
                  </Link>
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>
                </div>
              );
            }}
          </InventoryConsumer>
          {/* this will be the card footer for each product */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0"> {title} </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

// Product.propTypes = {
//   product: propTypes.shape({
//     id: propTypes.number,
//     img: propTypes.string,
//     title: propTypes.string,
//     price: propTypes.number,
//     inCart: propTypes.bool
//   }).isRequired
// }; <NOTE: This was for testing purposes></NOTE:>

const ProductWrapper = styled.div`
  .card {
    border-color: semi-transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: thistle;
    border-top: transparent;
    transition: all 1s ease-out;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(255, 0, 255);
      box-shadow: 2px 2px 5px 0px rgba(75, 0, 130);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--indigo);
    border: none;
    color: var(--white);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
