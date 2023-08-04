import React from 'react';
import {BsArrowRightCircle, BsArrowLeftCircle} from 'react-icons/bs'

import './Gallery.css';
import { images } from '../../constants';

const Gallery = () => (
  <div className='gallery' id='gallery'>
    <div className='gallery__body container--light'>
      <header className='gallery__header'>
        <h5>Instagram</h5>
        <img alt="a-spoon" className='a-spoon' src={images.spoon} />
        <h2 className='heading'>Photo Gallery</h2>
        <p className='p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <a className='btn' href="#">view more</a>
      </header>
      <div className='gallery__boxes'>
        <div className='gallery__box'>
          <img alt="gallery img" src={images.gallery01} />
        </div>
        <div className='gallery__box'>
          <img alt="gallery img" src={images.gallery02} />
        </div>
        <div className='gallery__box'>
          <img alt="gallery img" src={images.gallery03} />
        </div>
        <div className='gallery__box'>
          <img alt="gallery img" src={images.gallery04} />
        </div>
        <div className='gallery__trans'>
          <BsArrowLeftCircle />
          <BsArrowRightCircle />
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;