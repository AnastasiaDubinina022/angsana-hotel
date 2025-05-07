import react from 'react';

import './RoomsCard.scss';

const RoomsCard = ({ room }) => {
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
                        <a href="#" target="_blank" className="blocked">show more details...</a>
                    </li>
                </ul>
                <div className="rooms-item__row">
                    <div className="rooms-item__item">
                        <p>{room.price}</p>
                    </div>
                    <div className="rooms-item__button blue-button blocked">
                        <a href="#">Book now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomsCard;