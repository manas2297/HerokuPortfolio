import { Bars, ClearIcon } from 'components/Icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as NavLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { ReactComponent as Logo } from '../../images/logo.svg';
import './navbar.scss';
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <nav className="navbar-wrapper">
        <Logo fill="#43b0f2" stroke="#43b0f2" className="navbar-logo" />
        <div className="navbar-bars" onClick={() => setSidebar(!sidebar)}>
          <Bars />
        </div>
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
              to="projects"
              spy={true}
              smooth={true}
              offset={5}
              duration={800}
            >
              Projects
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
        </ul>
        <div className="navbar-blog">
          <Link to="/blog">Blog</Link>
        </div>
      </nav>
      <div className={sidebar ? 'nav-sidebar open' : 'nav-sidebar close'}>
        <div className="nav-sidebar-head">
          <h3>WebPRO</h3>
          <div onClick={() => setSidebar(!sidebar)}>
            <ClearIcon  />
          </div>
          
        </div>
        <div className="nav-sidebar-links">
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
          <NavLink
            activeClass="active"
            className="pointer"
            to="projects"
            spy={true}
            smooth={true}
            offset={5}
            duration={800}
          >
            Projects
          </NavLink>
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
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
