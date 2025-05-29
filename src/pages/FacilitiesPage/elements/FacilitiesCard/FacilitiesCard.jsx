import {useDispatch} from 'react-redux';
import {openModal} from '../../../../features/modalSlice';

import './FacilitiesCard.scss';

const FacilitiesCard = ({item}) => {
  const dispatch = useDispatch();
  const {id, path, alt, title, descr, addition, btn} = item;

  return (
    <div
      key={id}
      className="facilities-item">
      <div className="facilities-item__image content-image">
        <img
          src={path}
          alt={alt}
        />
      </div>
      <div className="facilities-item__info">
        <div className="facilities-item__title">
          <h3>{title}</h3>
        </div>
        <div className="facilities-item__text">
          <p>{descr}</p>
          {addition && <p>{addition}</p>}
        </div>
        <button
          onClick={() => dispatch(openModal())}
          className="facilities-item__button yellow-button blocked">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default FacilitiesCard;
