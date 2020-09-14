import React, { Suspense } from "react";
import Navbar from "../Navbar";
import resumeData from "../../resumeData";
// import About from "../About";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Testimonials from "../Testimonials";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import Header from '../Header'
// import Header from '../Header/index'
const About = React.lazy(() => import('../About'));
class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Header resumeData={resumeData}/>
        {/* <Header resumeData={resumeData} /> */}
      
        <Suspense fallback={"Loading"}>
          <About resumeData={resumeData} />
        </Suspense> 
        
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
