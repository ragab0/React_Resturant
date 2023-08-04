import React from 'react';

import './Laurels.css';
import { images, data } from '../../constants';

function createBox({src, h, p}, i) {
  return(
    <div className='laurels__box' key={i}>
      <img alt="laurels img-box" className='laurels__box-img' src={src} />
      <div className='laurels__box-content'>
        <h5 className='heading'>{h}</h5>
        <p className='p'>{p}</p>
      </div>
    </div>
  )
}

const Laurels = () => (
  <div className='laurels app__bg' style={{position:'relative'}} id='laurels'>
    <div className='laurels__body container'>
      <div className='laurels__content'>
        <header className='laurels__header'>
          <h5>Awards & recognition</h5>
          <img alt="spoon img" className='a-spoon' src={images.spoon} />
          <h3 className='laurels__heading heading'>Our Laurels</h3>
        </header>
        <div className='laurels__boxes'>
          {
            data.awards.map(({imgUrl, title, subtitle}, i) => createBox({src: imgUrl, h:title, p:subtitle}, i))
          }
        </div>
      </div>
      <img alt="laurels img" className='laurels__img' src={images.laurels} />
    </div>
  </div>
);

export default Laurels;
