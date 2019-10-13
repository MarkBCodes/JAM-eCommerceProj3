import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
// import Facebook from "./components/Facebook";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Apparel from "./components/Apparel";
import Jewelry from "./components/Jewelry";
import HomeGarden from "./components/HomeGarden";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/apparel" component={Apparel} />
          <Route path="/jewelry" component={Jewelry} />
          <Route path="/homeGarden" component={HomeGarden} />
          <Route path="/details" component={Details} />
          <Route path="/Cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        {/* <Facebook /> */}
      </React.Fragment>
    );
  }
}

export default App;

// ontructor(props) {
//   super(props)
//   this.state = {
//       isSignedIn: false,
//   }
// }

//silly
