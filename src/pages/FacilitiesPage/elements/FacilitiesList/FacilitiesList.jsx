import React from 'react';
import {useSelector} from 'react-redux';

import './FacilitiesList.scss';

import FacilitiesCard from '../FacilitiesCard/FacilitiesCard';

const FacilitiesList = () => {
  const facilitiesData = useSelector(state => state.facilities.facilities);

  const renderItems = arr => {
    return arr.map(item => {
      return (
        <FacilitiesCard
          key={item.id}
          item={item}
        />
      );
    });
  };

  const elements = renderItems(facilitiesData);

  return <section className="facilities__list">{elements}</section>;
};

export default FacilitiesList;
