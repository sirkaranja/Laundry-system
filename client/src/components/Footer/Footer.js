import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './footer.css'
// Rest of the component code...


function Footer() {
  return (
    <div className='footer'>
        <div>
            <h2 className='footer-header'>LaundFix</h2>
        </div>
        <div className='header-links'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </div>
        <div className='social-links'>
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      <div className='copyright'>
        <p>&copy; {new Date().getFullYear()} Skyliq Solutions. All rights reserved.</p>
      </div>
    </div>
   
  )
}

export default Footer