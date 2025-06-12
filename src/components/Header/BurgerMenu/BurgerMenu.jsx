import {useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AnimatePresence, motion} from 'framer-motion';

import './BurgerMenu.scss';

import {closeMenu} from '../../../features/burgerMenuSlice';

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const isOpen = useSelector(state => state.burgerMenu.isOpen);

  const navLinks = [
    {to: '/', text: 'Home'},
    {to: '/rooms', text: 'Rooms & Suites'},
    {to: '/facilities', text: 'Facilities'},
    {to: '/offers', text: 'Offers'},
    {to: '/contacts', text: 'Contacts'},
  ];

  const handleClickOutside = event => {
    if (event.target.closest('.burger-button')) return;

    if (menuRef.current && !menuRef.current.contains(event.target)) {
      dispatch(closeMenu());
    }
  };
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      dispatch(closeMenu());
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{opacity: 0, y: -100, x: 25}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -100}}
          transition={{duration: 0.3, ease: 'easeInOut'}}>
          <div
            ref={menuRef}
            className="burger-menu">
            <ul className="burger-list">
              {navLinks.map(({to, text}, i) => (
                <li key={i}>
                  <NavLink
                    to={to}
                    className={({isActive}) => (isActive ? 'burger-link-active' : 'burger-link')}>
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BurgerMenu;
