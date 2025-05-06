import React from 'react';

import './HomePage.scss';

import HomeWelcome from './elements/HomeWelcome/HomeWelcome';

const HomePage = () => {

    return (
        <main className="main">
            <div className='"main-wrapper"'>
                <HomeWelcome />
            </div>
        </main>
    )
}

export default HomePage;
