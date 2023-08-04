import React from 'react';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='chef' id="chef">
    <div className='chef__body container'>
      <img alt="chef-img" className='chef__img' src={images.chef} />
      <div className='chef__content'>
        <div>
          <h4 className='chef__word--declare'>Chef’s Word</h4>
          <img alt="a-spoon" className='a-spoon' src={images.spoon} />
          <h2 className='chef__word--title heading'>What we believe in</h2>
        </div>
        <p className='chef__word--content p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla 
          scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. 
          Congue iaculis integer curabitur semper sit nunc.
        </p>
        <div>
          <h3 className='chef__heading--name heading'>Kevin Luo</h3>
          <p className='p'>Chef & Founder</p>
        </div>
        <img alt="chef-img" className='chef__img--word' src={images.sign} />
      </div>
    </div>
  </div>
);

export default Chef;
