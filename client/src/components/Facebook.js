import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: ""
    // email: "",
    // picture: ""
  };

  responseFacebook = response => {
    // responseFacebook gives data
    // auth stored in this.setState
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name
      // email: response.email,
      // picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");
  //   checks to see if logged in
  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "auto",
            margin: "auto",
            // background: "#A1689F",
            padding: "5px"
          }}
        >
          {/* <img src={this.state.picture} alt={this.state.name} /> */}
          <h5>{this.state.name}</h5>
          {/* Email: {this.state.email} */}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="2824420927592412"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
// Additoinal options for displayed Facebook info were commented out for the option of future use
