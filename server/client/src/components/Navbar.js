import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import google from "../images/sign-in-button.png";

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
        return (
          <>
            <li>Welcome {this.props.auth.name}</li>
            <li>
              <a href="/users/logout">Logout</a>
            </li>
          </>
        );
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

          <ul id="nav-mobile" className="right">
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
