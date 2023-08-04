import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='about app__bg' id="about">
    <div className='about__articles container' style={{backgroundImage: `url(${images.G})`}}>
      <article className='about__article'>
        <h2 className='about__article--heading heading'>about us</h2>
        <img alt="a-spoon" className='about__article--img a-spoon' src={images.spoon} />
        <p className='about__article--p p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis 
          pharetra adipiscing ultrices vulputate posuere tristique. In sed 
          odio nec aliquet eu proin mauris et.
        </p>
        <a className='about__article--btn btn' href="#">know more</a>
      </article>
      <img className='about__img' alt="about-us-img" src={images.knife} />
      <article className='about__article'>
        <h2 className='about__article--heading heading'>our history</h2>
        <img alt="a-spoon" className='about__article--img a-spoon' src={images.spoon} />
        <p className='about__article--p p'>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. 
          Risus placerat morbi volutpat habitasse interdum mi aliquam In 
          sed odio nec aliquet.
        </p>
        <a className='about__article--btn btn' href="#">know more</a>
      </article>
    </div>
  </div>
);

export default AboutUs;
