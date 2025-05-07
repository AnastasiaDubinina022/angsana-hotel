import react from "react";
import { NavLink } from "react-router-dom";

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
                                <NavLink 
                                    to="/"
                                    className={({isActive}) => (isActive ? "menu__link-active" : "menu__link")}
                                    >Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/rooms"
                                    className={({isActive}) => (isActive ? "menu__link-active" : "menu__link")}>
                                    Rooms & Suites
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/facilities"
                                    className={({isActive}) => (isActive ? "menu__link-active" : "menu__link")}>
                                    Facilities
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/offers"
                                    className={({isActive}) => (isActive ? "menu__link-active" : "menu__link")}>
                                    Offers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/contacts"
                                    className={({isActive}) => (isActive ? "menu__link-active" : "menu__link")}>
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;