import React from 'react';

import './Intro.css';
import { images } from '../../constants';

const Intro = () => (
  <div className='intro' id='intro'>
    <img alt="intro img" className='intro__img' src={images.video} />
  </div>
);

export default Intro;
