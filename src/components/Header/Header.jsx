import react from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

import MainLogo from "../../assets/icons/main-logo.svg";

const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={MainLogo} alt="Main logo" />
                    </div>
                    <nav className="header__menu">
                        <ul className="menu__list">
                            <li>
                                <a href="#" className="menu__link-active">Home</a>
                            </li>
                            <li>
                                <a href="./pages/rooms.html" className="menu__link">Rooms & Suites</a>
                            </li>
                            <li>
                                <a href="./pages/facilities.html" className="menu__link">Facilities</a>
                            </li>
                            <li>
                                <a href="./pages/offers.html" className="menu__link">Offers</a>
                            </li>
                            <li>
                                <a href="./pages/contacts.html" className="menu__link">Contacts</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;