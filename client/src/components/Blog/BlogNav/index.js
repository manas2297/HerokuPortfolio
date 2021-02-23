import React, { useState } from 'react';
import './style.scss';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { Bars, ClearIcon, Hamburger } from 'components/Icons';
import { ReactComponent as AvatarLogo } from '../../../images/avatar.svg';
import { Link } from 'react-router-dom';
import resumeData from 'resumeData';
const BlogNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="blog-nav">
        <Logo stroke="#fff" fill="white" className="blog-logo" />
        <div className="blog-link">
          <Link to="/">Home</Link>
        </div>
        <div
          className="blog-menu"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <Bars />
        </div>
      </div>
      <div className={isOpen ? 'blog-side side-open' : 'blog-side side-close'}>
        <div className="blog-side-container">
          <div className="side-head">
            <h2>WebPRO</h2>
            <div
              className="close-icon"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <ClearIcon />
            </div>
          </div>
          <div className="side-content">
            <div className="side-content-desc">
              <div className="heading2">
                <h2>Manas Yadav</h2>
              </div>
              <div className="avatar2">
                <AvatarLogo viewBox="0 0 600 600" />
              </div>
              <p>
                I am a fullstack developer working with Somnoware. Connect with
                me to collaborate in projects and let's learn together.
                In this blog I have collected the resources that I came across while preparing DSA and System design.
                For any queries feel free to buy me a coffee.
              </p>
            </div>
            <div className="side-content-desc">

              <div className="heading2">
                <h2>get in touch</h2>
              </div>
              <p>
                Get in touch through the following channel
              </p>
              <div className="social-links">
                {resumeData.socialLinks.map((item,i) => (
                  <div className="social-links-item" key={i}>
                    <a href={item.url} target="_blank">
                      <i className={item.className}/>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={isOpen ? 'blog-overlay' : 'no-overlay'}></div>
    </React.Fragment>
  );
};

export default BlogNav;
