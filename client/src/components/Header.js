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
import Typist from 'react-typist';
export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      animateTextNumber: 1,
    }
  }
  animateText = () => {
    console.log("here")
    if(this.state.animateTextNumber === 1) {
      console.log("here2")
      this.setState({
        animateTextNumber: 2,
      })
    } else {
      this.setState({
        animateTextNumber: 1,
      })
    }
  }
  render() {
    console.log(this.state.animateTextNumber)
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <div className="row banner">
            <div className="banner-text">
            
              <h1 className="responsive-headline">
              <Typist
                  cursor={{show:true, blink: true, element: '|' }}
                >
                Hi!!! I am {resumeData.name}. 
                  </Typist>
              </h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              <Typist
                avgTypingDelay={20}
              >
              <Typist.Delay ms={500}/>
                {resumeData.role}.{resumeData.roleDescription}
              </Typist>
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
