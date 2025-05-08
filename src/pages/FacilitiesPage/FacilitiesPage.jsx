import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './FacilitiesPage.scss';

import PageBanner from '../../components/PageBanner/PageBanner';
import Services from './elements/Services/Services';
import FacilitiesList from './elements/FacilitiesList/FacilitiesList';

import { fetchFacilities } from '../../features/facilitiesSlice';

const FacilitiesPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchFacilities());
        }, [])

    return (
        <main className="main">
            <PageBanner page="facilities" title="Our facilities" />
            <Services/>
            <section className="facilities">
                    <div className="container">
                        <div className="facilities__container">
                            <FacilitiesList/>
                        </div>
                    </div>
                </section>
        </main>
    )
}

export default FacilitiesPage;