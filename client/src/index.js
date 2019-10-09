import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createHistory from "history/createBrowserHistory";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const history = createHistory();
ReactDOM.render(
  <Router history={history}>
    <App history={history} />
  </Router>,
  document.getElementById("root")
);
