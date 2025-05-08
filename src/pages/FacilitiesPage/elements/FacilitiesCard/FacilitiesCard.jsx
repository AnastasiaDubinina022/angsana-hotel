import React from 'react';

import './FacilitiesCard.scss';

const FacilitiesCard = ({ item }) => {
    const {id, path, alt, title, descr, addition, btn} = item;

    return (
        <div key={id} className="facilities-item">
        <div className="facilities-item__image content-image">
            <img src={path} alt={alt} /> 
        </div>
        <div className="facilities-item__info">
            <div className="facilities-item__title">
                <h3>{title}</h3>
            </div>
            <div className="facilities-item__text">
                <p>{descr}</p>
                {addition && <p>{addition}</p>}
            </div>
            <div className="facilities-item__button yellow-button blocked">
                <a href="#" target="_blank">{btn}</a>
            </div>
        </div>
    </div>
    )
}

export default FacilitiesCard;

