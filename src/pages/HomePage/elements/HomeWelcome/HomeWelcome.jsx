import react from "react";

import './HomeWelcome.scss';

import HomeBG from './images/home-welcome-hd.jpg';

const HomeWelcome = () => {

    return (
        <section className="home-welcome">
            <div className="home-welcome__image fullscreen-image">
                <img src={HomeBG} alt="Background" />
            </div>
            <div className="home-welcome__body">
                <div className="home-welcome__content">
                    <div className="container">
                        <p>Welcome to</p>
                        <h1>Angsana Oceanview Laguna Phuket</h1>

                        <h2>Book your stay and enjoy Luxury redefined at the most affordable rates.</h2>
                    </div>
                </div>

                <div className="home-welcome__button-wrapper">
                    <a href="#" className="home-welcome__button blue-button blocked">Book now</a>
                </div>
            </div>
        </section>
    )
}

export default HomeWelcome;