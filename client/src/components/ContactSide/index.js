import { PhoneIcon } from 'components/Icons';
import React from 'react';
import './style.scss';
const ContactSide = () => {
  return (
    <div className="contact_side">
      <div className="contact_side__icon">
        <span className="btn-icon">
          <PhoneIcon/>
        </span>
      </div>
      <div className="contact_side__forms">

      </div>
    </div>
  )
};
export default ContactSide;