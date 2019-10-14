import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Apparel from "./components/Apparel";
import Jewelry from "./components/Jewelry";
import HomeGarden from "./components/HomeGarden";
import Modal from "./components/Modal";
import PromotionBanner from "./components/PromotionBanner";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PromotionBanner />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/apparel" component={Apparel} />
          <Route path="/jewelry" component={Jewelry} />
          <Route path="/homeGarden" component={HomeGarden} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

//silly
