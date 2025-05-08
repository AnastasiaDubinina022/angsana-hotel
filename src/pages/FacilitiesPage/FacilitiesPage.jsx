import React from 'react';

import './FacilitiesPage.scss';

import PageBanner from '../../components/PageBanner/PageBanner';
import Services from './elements/Services/Services';

const FacilitiesPage = () => {

    return (
        <main class="main">
            <PageBanner page="facilities" title="Our facilities" />
            <Services/>
        </main>
    )
}

export default FacilitiesPage;