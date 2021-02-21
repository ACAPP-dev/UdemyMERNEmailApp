import React from "react";
import google from "../images/sign-in-button.png";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo">
            Surveys-R-Us
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="sass.html">
                <img id="google-login-img" src={google} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
