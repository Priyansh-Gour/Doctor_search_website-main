import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhone, faEnvelope, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons';
import "../style/Footer.css"
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
 import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2>Contact Us</h2>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Medical Street, Cityville, India
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +91 (555) 123-4567
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> info@doctorswebsite.com
          </p>
        </div>

        <div className="footer-social">
          <h2>Follow Us</h2>
          
          <FontAwesomeIcon icon={faFacebook} className='icons'/>
          <FontAwesomeIcon icon={faTwitter}  className='icons' />
          <FontAwesomeIcon icon={faInstagram}  className='icons'/>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Doctors Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
