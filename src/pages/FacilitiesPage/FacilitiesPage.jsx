import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import './FacilitiesPage.scss';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageBanner from '../../components/PageBanner/PageBanner';
import ServicesList from './elements/ServicesList/ServicesList';
import FacilitiesList from './elements/FacilitiesList/FacilitiesList';

import {fetchFacilities} from '../../features/facilitiesSlice';

const FacilitiesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFacilities());
  }, []);

  return (
    <PageWrapper>
      <main className="main">
        <PageBanner
          page="facilities"
          title="Our facilities"
        />
        <ServicesList />
        <section className="facilities">
          <div className="container">
            <div className="facilities__container">
              <FacilitiesList />
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default FacilitiesPage;
