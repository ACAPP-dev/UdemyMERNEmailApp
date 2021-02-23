import "materialize-css/dist/css/materialize.min.css";
import "./css/app.css";
import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import reducers from "./reducers";

// temp code to test email functionality on server
import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
