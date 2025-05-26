import { useDispatch } from 'react-redux';
import { openModal } from '../../../../features/modalSlice';

import './RoomsCard.scss';

const RoomsCard = ({ room }) => {
    const dispatch = useDispatch();

    return (
        <div className="rooms-details__rooms-item">
            <div className="rooms-item__inner">
                <div className="rooms-item__image content-image">
                    <img src={room.image} alt={room.alt} />
                </div>
                <div className="rooms-item__title">
                    <h3>{room.title}</h3>
                </div>
                <ul className="rooms-item__list">
                    {room.details.map((detail, index) => (
                        <li key={index}>
                            <span>➤</span>{detail}
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => dispatch(openModal())} 
                            className="blocked">show more details...</button>
                    </li>
                </ul>
                <div className="rooms-item__row">
                    <div className="rooms-item__item">
                        <p>{room.price}</p>
                    </div>
                    
                        <button 
                            onClick={() => dispatch(openModal())}
                            className="rooms-item__button blue-button blocked">Book now</button>
                    
                </div>
            </div>
        </div>
    );
};

export default RoomsCard;