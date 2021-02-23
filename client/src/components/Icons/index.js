import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam,
  faLaptopCode, 
  faBuilding,
  faPhone,
  faLocationArrow, 
  faTimes, 
  faRocket, 
  faMobileAlt, 
  faBullhorn,
  faMapMarkerAlt,
  faEnvelopeOpenText,
  faHamburger,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
// import {faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export const SmileIcon = () => <FontAwesomeIcon icon={faSmileBeam} />
export const LaptopIcon = () => <FontAwesomeIcon icon={faLaptopCode} />
export const BuildingIcon = () => <FontAwesomeIcon icon={faBuilding} />
export const PhoneIcon = () => <FontAwesomeIcon icon={faPhone} />
export const SubmitIcon = () => <FontAwesomeIcon icon={faLocationArrow} />
export const ClearIcon = () => <FontAwesomeIcon icon={faTimes} />
export const RocketIcon = () => <FontAwesomeIcon icon={faRocket} />
export const MobileIcon = () => <FontAwesomeIcon icon={faMobileAlt} />
export const DigitalIcon = () => <FontAwesomeIcon icon={faBullhorn} />
// export const FacebookIcon = () => <FontAwesomeIcon icon={faFacebook} />
// export const InstagramIcon = () => <FontAwesomeIcon icon={faInstagram} />
// export const TwitterIcon = () => <FontAwesomeIcon icon={faTwitter} />
// export const LinkedinIcon = () => <FontAwesomeIcon icon={faLinkedin} />
export const MarkerIcon = () => <FontAwesomeIcon icon={faMapMarkerAlt} />
export const EmailIcon = () => <FontAwesomeIcon icon={faEnvelopeOpenText} />
export const Hamburger = () => <FontAwesomeIcon icon={faHamburger} />
export const Bars = () => <FontAwesomeIcon icon={faBars} />;