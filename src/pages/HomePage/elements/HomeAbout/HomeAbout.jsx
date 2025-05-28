import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import './HomeAbout.scss';

import { openModal } from './../../../../features/modalSlice';
import DefaultSlider from '../../../../components/DefaultSlider/DefaultSlider';

const HomeAbout = () => {
    const dispatch = useDispatch();

    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/homeAboutSlider')
        .then((response) => {
            const imageUrls = response.data.map(item => item.url);
            setImages(imageUrls);
        })
        .catch((error) => console.error('Error fetching images:', error));
    }, [])

    return (
        <section className="home-about">
                        <div className="container">
                            <div className="home-about__wrapper">
                                <div className="home-about__info">
                                    <h3>About an island within an island</h3>
                                    <p>
                                        Escape to paradise at Angsana Laguna Phuket beachfront resort! Immerse yourself
                                        in Asia’s first integrated resort located on the tranquil shores of Bang Tao Bay
                                        and the blue waters of the Andaman Sea.
                                    </p>
                                    <p>
                                        Indulge in the ultimate getaway at this 5-star resort in Phuket with picturesque
                                        views, lush gardens and a wide selection of indoor or outdoor dining options.
                                    </p>

                                    <p>
                                        Enjoy savings on stays, spa sessions and dining along with exclusive benefits
                                        like late checkouts, free use of non-motorised watersports and much more. Click
                                        below for more info and start planning your dream vacation today!
                                    </p>

                                    <div className="home-about__info-button-wrapper">
                                        <button
                                        onClick={() => dispatch(openModal())}
                                        className="home-about__info-button blue-button blocked">Read more</button>
                                    </div>
                                </div>
                                <div className="slider-container">
                                    <DefaultSlider images={images}/>
                                </div>
                            </div>
                        </div>
                    </section>
    )
}

export default HomeAbout;