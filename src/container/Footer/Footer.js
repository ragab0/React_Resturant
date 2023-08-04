import React from 'react';

import './Footer.css';
import { images } from '../../constants';
import Newsletter from '../../components/Footer/Newsletter';
import FooterOverlay from '../../components/Footer/FooterOverlay';

const Footer = () => (
  <div className='footer app__bg' id='footer'>
    <div className='footer__body container'>
      <Newsletter />
      <FooterOverlay />
      <p>2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
