import React from 'react';
import {useSelector} from 'react-redux';

import './OffersList.scss';

import OffersCard from '../OffersCard/OffersCard';

const OffersList = () => {
  const offersData = useSelector(state => state.offers.offers);

  const renderItems = arr => {
    return arr.map(item => {
      return (
        <OffersCard
          key={item.id}
          offer={item}
        />
      );
    });
  };

  const elements = renderItems(offersData);

  return <section className="offers">{elements}</section>;
};

export default OffersList;
