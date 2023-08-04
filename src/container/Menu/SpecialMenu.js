import React from 'react';
import { images, data } from '../../constants';

import './SpecialMenu.css';

function createList(list) {
  return (
    <ul className='list'>
      {
        list.map(({title, price, tags}, i) => (
          <li key={i} className="list__item">
            <div className='list__item-cup'>
              <h5 className='list__item-heading heading'>{title}</h5>
              <span className='list__item-price price'>{price}</span>
            </div>
            <p className='p list__item-p'>{tags}</p>
          </li>
        ))
      }
    </ul>
  )
}

const SpecialMenu = () => (
  <div className='menu' id='menu'>
    <div className='menu__container container'>
      <header className='menu__header'>
        <h5 className='menu__header--second-heading'>Menu that fits you palatte</h5>
        <img alt="a-spoon" className='a-spoon' src={images.spoon} />
        <h2 className='heading'>Today’s Special</h2>
      </header>
      <div className='menu__articles'>
        <article className='menu__article'>
          <h3 className='menu__article-heading'>Wine & Legend</h3>
          {createList(data.wines)}
        </article>
        <img className='article--img' alt="menu-img" src={images.menu} />
        <article className='menu__article'>
          <h3 className='menu__article-heading'>Cocktails</h3>
          {createList(data.cocktails)}
        </article>
      </div>
      <a href='#' className='menu__btn btn'>view more</a>
    </div>
  </div>
);

export default SpecialMenu;
