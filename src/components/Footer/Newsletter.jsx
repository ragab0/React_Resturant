import React from 'react';

import './Newsletter.css';
import { images } from '../../constants';

const Newsletter = () => (
  <section className='footer__newsletter' id="contactus">
    <header className='footer__newsletter-header'>
      <h5 className=''>Newsletter</h5>
      <img alt="a-spoon" className='a-spoon' src={images.spoon} />
      <h2 className='heading'>Subscribe to Our Newsletter</h2>
      <p style={{marginTop: '10px'}}>And never miss latest Updates!</p>
    </header>
    <div className='footer__newsletter-inps'>
      <input placeholder='Email Address' />
      <a className='btn' href='#'>Subscribe</a>
    </div>
  </section>
);

export default Newsletter;
