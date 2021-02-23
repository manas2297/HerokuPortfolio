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
<<<<<<< HEAD
import Contact from "components/Contact";
import ContactSide from "components/ContactSide";
=======
import Contact from "components/Contact/Contact";
>>>>>>> beb42b4653458ae7e94f10ff0b8036966f0d6884
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
        <Contact/>
        <ContactSide/>
        {/* <Footer resumeData={resumeData} /> */}
      </React.Fragment>
    );
  }
}
export default Landing;
