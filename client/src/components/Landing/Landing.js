import React from "react";
import Navbar from "../Navbar";
import resumeData from "../../resumeData";
import About from "../About";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Testimonials from "../Testimonials";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import Header from "../Header";

class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <Navbar/>
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        {/* <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} /> */}
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </React.Fragment>
    );
  }
}
export default Landing;
