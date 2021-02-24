import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </Router>
      </div>
    );
  }
}
export default connect(null, actions)(App);
