import {useState} from 'react';
import {NavLink} from 'react-router-dom';

import './Header.scss';

import MainLogo from '../../assets/icons/main-logo.svg';
import NavMenu from './NavMenu/NavMenu';
import BurgerButton from './BurgerButton/BurgerButton';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img
              src={MainLogo}
              alt="Main logo"
            />
          </div>
          <nav className="header__menu">
            <NavMenu />
          </nav>
          <BurgerButton />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
