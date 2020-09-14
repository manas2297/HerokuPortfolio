import React from "react";
import './about.scss';
import Columns from 'react-bulma-components/lib/components/columns';
import Heading from 'react-bulma-components/lib/components/heading';
// import {ReactComponent as AvatarLogo} from '../images/avatart.svg';
const About = ({resumeData}) => { 
    return (
      <section id="about">
        <Columns className="about-row">
          <Columns.Column>
            <Heading size={2} renderAs="p">Hi, I'm {resumeData.name.split(" ")[0]}. Nice to meet you.</Heading>
          </Columns.Column>
        </Columns>
        <Columns className="about-row">
          <Columns.Column size={6} offset={3}>
            <p className="about-desc">{resumeData.aboutme}</p>
          </Columns.Column>
        </Columns>
      </section>
    );
};
export default About;
