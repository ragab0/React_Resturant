import React, { useState } from 'react';
import { images } from '../../constants';
import { GiHamburgerMenu, GiClosedDoors } from 'react-icons/gi'

import './Navbar.css';

const links = ['home', 'about', 'menu', 'gallery', 'contact us']
const Navbar = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  function createLinks(list) {
    return (
      list.map((name, i) => (
        <li key={i}>
          <a href={`#${name.replaceAll(' ', '')}`} onClick={() => {setIsMenuClosed(true)}}>{name}</a>
        </li>
      ))
    )
  }

  return (
    <nav className='nav'>
      <div className='nav__body container--light'>
        <img alt='nav__logo' className='nav__img-logo' src={images.gericht} />
        <ul className='nav__bars slide-bottom' style={{display: isMenuClosed ? 'none' : 'flex'}}>
          {createLinks(links)}
        </ul>
        <ul className='nav__importants'>
          <li><a href="#log_in">log in / registration</a></li>
          <li className='nav__importants-line'></li>
          <li><a href="#book_table">book table</a></li>
        </ul>
        <GiHamburgerMenu className="nav__menu-icon" onClick={() => {setIsMenuClosed(false)}} />
        { !isMenuClosed && <GiClosedDoors className="nav__close-icon slide-bottom" onClick={() => {setIsMenuClosed(true)}} />}
      </div>
    </nav>
  )
};

export default Navbar;
