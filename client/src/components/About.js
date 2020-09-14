import React from "react";
// import {ReactComponent as AvatarLogo} from '../images/avatart.svg';
const About = ({resumeData}) => { 
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            {/* <AvatarLogo/> */}
            {/* <img className="profile-pic" src="https://akshaysaini.in/img/plane.gif" alt="" /> */}
          </div>
          {/*sdsds*/}
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.address}</span>
                  <br />
                  <span>{resumeData.website}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
export default About;
