import {useDispatch} from 'react-redux';
import {openModal} from '../../../../features/modalSlice';

import './OffersCard.scss';

const OffersCard = ({offer}) => {
  const dispatch = useDispatch();
  const {title, description, image, reverse} = offer;
  const innerStyle = reverse ? 'offers-card__inner-reverse' : 'offers-card__inner';
  const imageStyle = reverse
    ? 'content-image offers-card__image_reverse'
    : 'offers-card__image content-image';
  const bgStyle = reverse ? 'bg-yellow' : '';

  return (
    <div className={`${bgStyle} offers__offers-card`}>
      <div className="container">
        <div className={innerStyle}>
          <div className="offers-card__body">
            <h3>{title}</h3>
            <p>{description}</p>
            <button
              onClick={() => dispatch(openModal())}
              className="offers-card__button yellow-button blocked">
              Read More
            </button>
          </div>
          <div className={imageStyle}>
            <img
              src={image}
              alt="offers-card-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersCard;
