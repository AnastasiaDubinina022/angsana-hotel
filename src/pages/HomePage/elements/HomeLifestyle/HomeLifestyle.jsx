import { useDispatch } from 'react-redux';
import { openModal } from '../../../../features/modalSlice';

import './HomeLifestyle.scss';

import FirstImage from './images/home-lifestyle-1.jpg';
import SecondImage from './images/home-lifestyle-2.jpg';

const HomeLifestyle = () => {
    const dispatch = useDispatch();

    return (
        <section className="home-lifestyle">
            <div className="container">
                <div className="home-lifestyle__wrapper">
                    <div className="home-lifestyle__row">
                        <div className="home-lifestyle__image content-image">
                            <img src={FirstImage} alt="home-lifestyle-1" />
                        </div>
                        <div className="home-lifestyle__info">
                            <h3>Own destination lifestyle</h3>
                            <p>
                                Own a luxury lifestyle in breathtaking destinations, experience local
                                culture and access to exceptional hospitality, amenities and services from
                                our inspirational network worldwide with 24 hour concierge awaits to take
                                care of all your needs.
                            </p>
                            <p>
                                Property owners enjoy not only top quality design home but also luxury
                                lifestyle with special privileges and discounts from resorts, spa, golf
                                courses and retail galleries within the Group worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="home-lifestyle__row home-lifestyle__row_reverse">
                        <div className="home-lifestyle__image content-image">
                            <img src={SecondImage} alt="home-lifestyle-2" />
                        </div>
                        <div className="home-lifestyle__info home-lifestyle__info_reverse">
                            <p>
                                Sanctuary Club members receive preferential treatment across the Banyan Tree
                                Group’s network of heritage hideaways, urban pied-à-terres and tropical
                                getaways
                            </p>
                            <p>
                                Owners whose properties are managed under a hotel branded rental scheme are
                                allowed to exchange part of their annual entitlement for a complimentary
                                stay at any destination within The Sanctuary Club network.
                            </p>
                            <div className="home-lifestyle__button-wrapper">
                                <button 
                                    onClick={() => dispatch(openModal())}
                                    className="home-lifestyle__button blue-button blocked">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeLifestyle;