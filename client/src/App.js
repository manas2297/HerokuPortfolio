import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import Blog from "./components/Blog/blog";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Client from "./config/PrismicApp";
import Post from "./components/Blog/post";
import "./App.css";
const App = props => (
  <div className="App">
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/blog/:uid" component={Post} />
    </Switch>
  </div>
);

export default App;
