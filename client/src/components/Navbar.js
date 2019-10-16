import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../iconfinder_jam_color_68px.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import Facebook from "./Facebook";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <NavWrapper sticky="top" />
        <Link to="/">
          <img src={logo} alt="JAM_Logo" className="navbar-brand" />
          {/*
            https://www.iconfinder.com/icons/516879/jam_kitchen_sweet_icon
            Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/apparel" className="nav-link">
              Apparel
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/jewelry" className="nav-link">
              Jewelry
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/homeGarden" className="nav-link">
              Home / Garden
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My Jam!
          </ButtonContainer>
        </Link>
        <Facebook />
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: #6b5875;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
