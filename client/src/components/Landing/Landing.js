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
import Contact from "components/Contact/Contact";
const About = React.lazy(() => import('../About'));
class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Header resumeData={resumeData}/>
        <Suspense fallback={"Loading"}>
          <About resumeData={resumeData} />
        </Suspense> 
        <Skills resumeData={resumeData}/>
        <Projects resumeData={resumeData}/>
        <Contact/>
         {/* <Resume resumeData={resumeData} /> */}
        {/*<Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} /> */}
        {/* <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} /> */}
      </React.Fragment>
    );
  }
}
export default Landing;
