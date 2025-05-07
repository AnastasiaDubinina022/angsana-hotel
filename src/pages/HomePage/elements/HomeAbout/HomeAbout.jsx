import react from 'react';

import './HomeAbout.scss';

const HomeAbout = () => {

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
                                        <a href="#" className="home-about__info-button blue-button blocked">Read more</a>
                                    </div>
                                </div>
                                <div className="tabcontainer">
                                    <div className="tabcontent content-image">
                                        <img src="./images/home-about-image-1.jpg" alt="Not found" />
                                    </div>
                                    <div className="tabcontent content-image">
                                        <img src="./images/home-about-image-33.webp" alt="Not found" />
                                    </div>
                                    <div className="tabcontent content-image">
                                        <img src="./images/home-about-image-5.webp" alt="Not found" />
                                    </div>
                                    <div className="tabcontent content-image">
                                        <img src="./images/about-image.webp" alt="Not found" />
                                    </div>
                                    <div className="tabheader">
                                        <div className="tabheader__item">Overwiew</div>
                                        <div className="tabheader__item">Overwiew</div>
                                        <div className="tabheader__item">Overwiew</div>
                                        <div className="tabheader__item">Overwiew</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    )
}

export default HomeAbout;