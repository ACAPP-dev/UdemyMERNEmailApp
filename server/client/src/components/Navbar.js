import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import google from "../images/sign-in-button.png";
import Payments from "./Payments";

class Navbar extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a id="google-img-container" href="/auth/google">
              <img
                className="responsive-img"
                id="google-login-img"
                src={google}
              />
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="4">Credits: {this.props.auth.credits}</li>,
          <li key="2">Welcome {this.props.auth.name}</li>,

          <li key="3">
            <a href="/users/logout">Logout</a>
          </li>,
        ];
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            id="brand-img"
            className="left brand-logo"
            to={this.props.auth ? "/surveys" : "/"}
          >
            Surveys-R-Us
          </Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);
