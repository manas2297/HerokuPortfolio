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
import {ReactComponent as AvatarLogo} from '../../images/avatar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typist from 'react-typist';
import './header.css';
const Header = ({resumeData}) => {
    return (
      <React.Fragment>
        <header id="home">
        <FontAwesomeIcon icon={['fas', 'spinner']} size="4x"/>
          <div className="row banner">
            <div className="banner-text">
              
              <h2 className="responsive-headline">
                {resumeData.role}
              </h2>
              <h3>
                {resumeData.roleDescription}
              </h3>
              <div className="avatar">
                <AvatarLogo className="banner-avatar" viewBox="0 0 600 600"/>
              </div>
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className}/>
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
              <i className="fa fa-chevron-down"></i>
            </NavLink>
          </p>
        </header>
      </React.Fragment>
    );
}

export default Header;
