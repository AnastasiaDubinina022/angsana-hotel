import React from 'react';
import {Link} from 'react-router-dom';

import './Footer.scss';

import MainLogo from '../../assets/icons/main-logo.svg';
import TwitterIcon from './icons/twitter-icon.svg';
import FacebookIcon from './icons/facebook-icon.svg';
import InstagramIcon from './icons/instagram-icon.svg';
import SnapchatIcon from './icons/snapchat-icon.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer__body">
          <div className="footer__info">
            <div className="footer__logo">
              <div className="footer__icon">
                <img
                  src={MainLogo}
                  alt="Angsana logo"
                />
              </div>
              <div className="footer__slogan">
                <p>will give you the comfort you deserve</p>
              </div>
            </div>
            <div className="footer__contact">
              <p className="footer__adress">
                Adress:
                <a href="#"> 394 Moo 4 Cherngtalay, Amphoe Thalang, Chang Wat Phuket 83110</a>
              </p>
              <p className="footer__phone">
                Phone number: <a href="#">+66 (0)76 362 333 </a>
              </p>
              <p className="footer__mail">
                Email: <a href="#">info@lagunaproperty.com</a>
              </p>
            </div>
          </div>
          <div className="footer__mobile-adaptive-wrapper">
            <div className="footer__links">
              <div className="footer__column">
                <Link
                  to="/"
                  className="footer__link">
                  About us
                </Link>
                <Link
                  to="/contacts"
                  className="footer__link">
                  Contact us
                </Link>
                <Link
                  to="/rooms"
                  className="footer__link">
                  Rooms & Rates
                </Link>
                <Link
                  to="/facilities"
                  className="footer__link">
                  Facilities
                </Link>
              </div>
              <div className="footer__column">
                <div className="footer__socials-wrapper">
                  <div className="footer__socials-icon">
                    <img
                      src={FacebookIcon}
                      alt="facebook icon"
                    />
                  </div>
                  <a
                    href="#"
                    className="footer__link">
                    Facebook
                  </a>
                </div>
                <div className="footer__socials-wrapper">
                  <div className="footer__socials-icon">
                    <img
                      src={InstagramIcon}
                      alt="Instagram icon"
                    />
                  </div>
                  <a
                    href="#"
                    className="footer__link">
                    Instagram
                  </a>
                </div>
                <div className="footer__socials-wrapper">
                  <div className="footer__socials-icon">
                    <img
                      src={TwitterIcon}
                      alt="teitter icon"
                    />
                  </div>
                  <a
                    href="#"
                    className="footer__link">
                    Twitter
                  </a>
                </div>
                <div className="footer__socials-wrapper">
                  <div className="footer__socials-icon">
                    <img
                      src={SnapchatIcon}
                      alt="Snapchat icon"
                    />
                  </div>
                  <a
                    href="#"
                    className="footer__link">
                    Snap Chat
                  </a>
                </div>
              </div>
            </div>
            <div className="footer__subscribe">
              <p>Subscribe to our newsletter</p>

              <form
                action="#"
                method="get"
                encType="multipart/form-data">
                <div className="footer__input-wrapper">
                  <div className="footer__input">
                    <input
                      type="email"
                      name="usermail"
                      value=""
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="footer__button">
                    <button type="submit">ok</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
