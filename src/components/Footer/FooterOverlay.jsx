import React from 'react';
import {CgFacebook, CgTwitter, CgInstagram} from 'react-icons/cg'

import './FooterOverlay.css';
import { images } from '../../constants';

const FooterOverlay = () => (
  <section className='footer__overlay footer__overlay--boxes'>
    <div className="footer__overlay-box">
      <h4>Contact Us</h4>
      <div className='footer__overlay-box-content p'>
        <p style={{marginBottom: '10px'}}>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230</p>
        <p>+1 212-555-1230</p>
      </div>
    </div>
    <div className="footer__overlay-box">
      <h2 className='heading'>Gerícht</h2>
      <div className='footer__overlay-box-content'>
        <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img alt="a-spoon" className='a-spoon' src={images.spoon} />
        <ul className='footer__overlay-social'>
          <li><a href="#"> <CgFacebook fontSize={24}/> </a></li>
          <li><a href="#"> <CgTwitter fontSize={24}/> </a></li>
          <li><a href="#"> <CgInstagram fontSize={24}/> </a></li>
        </ul>
      </div>
    </div>
    <div className="footer__overlay-box">
      <h4>Working Hours</h4>
      <div className='footer__overlay-box-content p'>
        <div className='footer_overlay-box-info'>
          <p>Monday-Friday:</p>
          <p>08:00 am -12:00 am</p>
        </div>
        <div className='footer_overlay-box-info'>
          <p>Saturday-Sunday:</p>
          <p>07:00am -11:00 pm</p>
        </div>
      </div>
    </div>
  </section>
);

export default FooterOverlay;
