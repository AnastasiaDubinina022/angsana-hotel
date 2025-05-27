import {useState} from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../features/modalSlice";

import './HomeWelcome.scss';

import HomeBG from './images/home-welcome-hd.jpg';

const HomeWelcome = () => {
    const dispatch = useDispatch();

    return (
        <section className="home-welcome">
            <div className="home-welcome__image fullscreen-image">
                <img src={HomeBG} alt="Background" />
            </div>
            <div className="home-welcome__body">
                <div className="home-welcome__content">
                    <div className="container">
                        <p>Welcome to</p>
                        <h1>Angsana Oceanview <br/>Laguna Phuket</h1>

                        <h2>Book your stay and enjoy Luxury redefined at the most affordable rates.</h2>
                    </div>
                </div>

                <div className="home-welcome__button-wrapper">
                    <button 
                        onClick={() => dispatch(openModal())}
                        className="home-welcome__button blue-button blocked">Book now</button>
                </div>
            </div>
        </section>
    )
}

export default HomeWelcome;