import React, { Suspense } from "react";
import Navbar from "../Navbar";
import resumeData from "../../resumeData";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Testimonials from "../Testimonials";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import Header from '../Header'
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "components/Contact";
import ContactSide from "components/ContactSide";
const About = React.lazy(() => import('../About'));
class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      isContactOpen: false,
    };
  }
  handleContact = () => {
    this.setState(prevState => ({
      ...prevState,
      isContactOpen: !prevState.isContactOpen,
    }));
  }
  render() {
    const { isContactOpen } = this.state;
    return (
      <React.Fragment>
        <Navbar resumeData={resumeData}/>
        <Header resumeData={resumeData}/>
        <Suspense fallback={"Loading"}>
          <About resumeData={resumeData} />
        </Suspense> 
        <Skills resumeData={resumeData}/>
        <Projects resumeData={resumeData}/>
        <Contact handleContact={this.handleContact}/>
        <ContactSide handleContact={this.handleContact} resumeData={resumeData} isContactOpen={isContactOpen}/>
        {/* <Footer resumeData={resumeData} /> */}
      </React.Fragment>
    );
  }
}
export default Landing;
