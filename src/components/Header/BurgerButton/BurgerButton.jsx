import {useDispatch, useSelector} from 'react-redux';
import {toggleMenu} from '../../../features/burgerMenuSlice';

import './BurgerButton.scss';

const BurgerButton = () => {
  const dispatch = useDispatch();
  const isOpenMenu = useSelector(state => state.burgerMenu.isOpen);

  return (
    <button
      onClick={() => dispatch(toggleMenu())}
      className={`burger-button ${isOpenMenu ? 'active' : ''}`}>
      <span className={isOpenMenu ? 'active' : ''}></span>
    </button>
  );
};

export default BurgerButton;
