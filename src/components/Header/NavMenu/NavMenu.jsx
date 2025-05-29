import './NavMenu.scss';
import {NavLink} from 'react-router-dom';

const NavMenu = () => {
  const navLinks = [
    {to: '/', text: 'Home'},
    {to: '/rooms', text: 'Rooms & Suites'},
    {to: '/facilities', text: 'Facilities'},
    {to: '/offers', text: 'Offers'},
    {to: '/contacts', text: 'Contacts'},
  ];

  return (
    <ul className="menu__list">
      {navLinks.map(({to, text}, i) => (
        <li key={i}>
          <NavLink
            to={to}
            className={({isActive}) => (isActive ? 'menu__link-active' : 'menu__link')}>
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
