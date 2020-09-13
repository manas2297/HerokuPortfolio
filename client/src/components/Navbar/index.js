import React from "react";
import { Link } from "react-router-dom";
import {
  Link as NavLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Navbar = () => {
  return (
    <nav id="nav-wrap">
      <ul id="nav" className="nav">
        <li className="current">
          <NavLink
            activeClass="active"
            className="pointer"
            to="home"
            spy={true}
            smooth={true}
            duration={750}
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
  );
};

export default Navbar;
