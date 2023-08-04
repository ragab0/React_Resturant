import React from 'react';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <header className='app__header' id='home'>
    <div className='app__header_body container--light'>
      <div className='app__header_content'>
        <ul className='app__header_list-rotater'>
          <li>#Bar</li>
          <li>#Gericht</li>
        </ul>
        <div className='app__header-content_info'>
          <h3>chase the new flower</h3>
          <img alt="a-spoon" className='a-spoon' src={images.spoon} />
          <h1 className='heading'>
            the key to
            fine dining
          </h1>
          <p className='p'>
            Sit tellus lobortis sed senectus vivamus molestie. 
            Condimentum volutpat morbi facilisis quam scelerisque 
            sapien. Et, penatibus aliquam amet tellus 
          </p>
          <a href="#" className='btn'>explore menu</a>
        </div>
      </div>
      <img alt='header img' className='app__header_img' src={images.welcome} />
    </div>
    <div className='app__header_footer container--light'>
      <span className='app__header_footer-pages'>
        {
          ['1', '', '02', '03', '04'].map((item, i) => <span key={i}>{item}</span>)
        }
      </span>
      <span className='app__header_footer-scroll heading'>SCROLL</span>
    </div>
  </header>
);

export default Header;
