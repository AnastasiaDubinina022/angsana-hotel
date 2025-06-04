import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import './OffersPage.scss';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageBanner from '../../components/PageBanner/PageBanner';
import OffersList from './elements/OffersList/OffersList';
import TermsList from './elements/TermsList/TermsList';

import {fetchOffers} from '../../features/offersSlice';

const OffersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  });

  return (
    <PageWrapper>
      <main className="main">
        <PageBanner
          page="offers"
          title="Offers"
          subtitle="Explore our range of exclusive offers to inspire you as you plan your next trip."
        />
        <OffersList />
        <TermsList />
      </main>
    </PageWrapper>
  );
};

export default OffersPage;
