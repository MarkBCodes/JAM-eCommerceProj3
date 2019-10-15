import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer className="main-footer">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-3 col-sm-6">
                <h4>About Us</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">About Jam</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">investor relations</a>
                  </li>
                </ul>
              </div>
              {/* Column 3 */}
              <div className="col-md-3 col-sm-6">
                <h4>Customer Service</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">My Orders</a>
                  </li>
                  <li>
                    <a href="#">Track My Order</a>
                  </li>
                  <li>
                    <a href="#">Return Policy</a>
                  </li>
                </ul>
              </div>
              {/* Column 4 */}
              <div className="col-md-3 col-sm-6">
                <h4>Other JAM</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Frequently Asked Questions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Report a Bug</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} The Jam Team - All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </FooterContainer>
    );
  }
}

const FooterContainer = styled.footer`
  .footer-middle {
    background: #6b5875;
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: white;
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
