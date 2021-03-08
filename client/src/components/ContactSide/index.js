import { ClearIcon, EmailIcon, MarkerIcon, PhoneIcon } from 'components/Icons';
import React from 'react';
import './style.scss';
const ContactSide = ({resumeData, isContactOpen, handleContact}) => {
  return (
    <div className="contact_side">
      <div onClick={() => handleContact()} className={isContactOpen ? "close": "contact_side__icon" }>
        <span className="btn-icon">
          <PhoneIcon/>
        </span>
      </div>
      <div className={isContactOpen ? "contact_side__forms open": "close"}>
        <div className="contact__container">
          
          <div className="contact__container-right">
            <div onClick={() => handleContact()}>
              <ClearIcon />
            </div>
            <div className="contact__head">
              <h3>Contact Information</h3>
              <p>Fill up the form and I will get back to you within 24hrs.</p>
            </div>
            <div className="contact__content">
              <div className="content-info">
                <PhoneIcon/>
                <p>+91-7394861997</p>
              </div>
              <div className="content-info">
                <EmailIcon/>
                <p>webpro@codes.ninja</p>
              </div>
              <div className="content-info">
                <MarkerIcon/>
                <p>Bengaluru, Karnataka, IN</p>
              </div>
              
            </div>
            <div className="contact-social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      
                        <a href={item.url} target="_blank" key={item.name}>
                          <i className={item.className}/>
                        </a>
                    );
                  })}
              </div>
            <div className="contact-c1"></div>
            <div className="contact-c3"></div>
            {/* <div className="contact-c2"></div> */}
          </div>
          <div className="contact__container-left">
            <div className="left-form">
              <div className="input">
                <p>First Name</p>
                <input type="text" placeholder="Jhon"/>
              </div>
              <div className="input">
                <p>Last Name</p>
                <input type="text" placeholder="Doe"/>
              </div>
              <div className="input">
                <p>Email</p>
                <input type="email" placeholder="abc@gmail.com"/>
              </div>
              <div className="input">
                <p>Phone</p>
                <input type="text" placeholder="9999999999"/>
              </div>
              <div className="input">
                <p>Message</p>
                <textarea rows="2" cols="4" placeholder="Write your message here..."></textarea>
              </div>
            </div>
            <div className="btn btn-save">Send</div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default ContactSide;