import { useDispatch } from 'react-redux';
import { openModal } from './../../../../features/modalSlice';

import './HomeAbout.scss';

import DefaultSlider from '../../../../components/DefaultSlider/DefaultSlider';

const HomeAbout = () => {
    const dispatch = useDispatch();

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
                                    <DefaultSlider 
                                    images ={[ './../../../../../public/images/homeAboutSlider/home-about-image-5.webp', './../../../../../public/images/homeAboutSlider/home-about-image-3.webp', './../../../../../public/images/homeAboutSlider/home-about-image-1.jpg', './../../../../../public/images/homeAboutSlider/home-about-image-2.webp']}
                                    className="custom-swiper"/>
                                </div>
                            </div>
                        </div>
                    </section>
    )
}

export default HomeAbout;