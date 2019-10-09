import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Link as NavLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <NavLink
                  activeClass="active"
                  className="pointer"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={800}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClass="active"
                  className="pointer"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={800}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClass="active"
                  className="pointer"
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={5}
                  duration={800}
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClass="active"
                  className="pointer"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={5}
                  duration={800}
                >
                  Works
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClass="active"
                  className="pointer"
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={5}
                  duration={800}
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClass="active"
                  className="pointer"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={5}
                  duration={800}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I am {resumeData.name}.</h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                {resumeData.role}.{resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <NavLink
              activeClass="active"
              className="pointer"
              to="about"
              spy={true}
              smooth={true}
              offset={5}
              duration={800}
            >
              <i className="icon-down-circle"></i>
            </NavLink>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
