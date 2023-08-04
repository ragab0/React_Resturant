import React from 'react';
import { images } from '../../constants';
import './FindUs.css';

const FindUs = () => (
  <div className='find app__bg' id="findus">
    <div className='find__body container'>
      <div className='find__content'>
        <header className='find__header'>
          <h5>Contact</h5>
          <img alt="a-spoon" className='a-spoon' src={images.spoon} />
          <h2 className='heading'>Find Us</h2>
        </header>
        <div className='find__info'>
          <p className='p'>
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <h5 className='heading'>Opening Hours</h5>
          <p>Mon - Fri: 10:00 am - 02:00 am</p>
          <p>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <a className='find__btn btn' href="#">Visit Us</a>
      </div>
      <img alt="find img" className='find__img' src={images.findus} />
    </div>
  </div>
);

export default FindUs;
