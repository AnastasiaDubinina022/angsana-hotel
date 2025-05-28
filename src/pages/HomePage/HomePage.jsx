import React from 'react';

import './HomePage.scss';

import HomeWelcome from './elements/HomeWelcome/HomeWelcome';
import HomeAbout from './elements/HomeAbout/HomeAbout';
import HomeEvents from './elements/HomeEvents/HomeEvents';
import HomeLifestyle from './elements/HomeLifestyle/HomeLifestyle';
import HomeGallery from './elements/HomeGallery/HomeGallery';

const HomePage = () => {

    return (
        <main className="main">
            <div className='"main-wrapper"'>
                <HomeWelcome />
                <HomeAbout/>
                <HomeEvents/>
                <HomeLifestyle/>
                <HomeGallery/>
            </div>
        </main>
    )
}

export default HomePage;
