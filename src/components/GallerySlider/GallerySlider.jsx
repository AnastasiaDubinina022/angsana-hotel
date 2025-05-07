import react from "react";

import './GallerySlider.scss';

const GallerySlider = () => {

    return (
        <section class="home-gallery">
                        <div class="container">
                            <h3>Our galleries</h3>
                            <div class="home-gallery__slider-wrapper">
                                <div class="home-gallery__gallery-slider">
                                    <div>
                                        <img src="/images/home/home-gallery-slider-1.jpg" alt="image not found"></img>
                                    </div>
                                    <div>
                                        <img src="/images/home/home-gallery-slider-2.webp" alt="image not found"></img>
                                    </div>
                                    <div>
                                        <img src="/images/home/home-gallery-slider-3.jpg" alt="image not found"></img>
                                    </div>
                                    <div>
                                        <img src="/images/home/home-gallery-slider-4.jpg" alt="image not found"></img>
                                    </div>
                                    <div>
                                        <img src="/images/home/home-gallery-slider-5.jpeg" alt="image not found"></img>
                                    </div>
                                    <div>
                                        <img src="/images/home/home-gallery-slider-6.webp" alt="image not found"></img>
                                    </div>
                                    <div>
                                        <img src="/images/home/home-gallery-slider-7.webp" alt="image not found"></img>
                                    </div>
                                    <div>
                                        <img src="/images/home/home-gallery-slider-8.jpg" alt="image not found"></img>
                                    </div>
                                </div>
                                <ul class="gallery-slider__control" id="gallery-slider-control">
                                    <li class="gallery-slider__prev-btn">
                                        <i>⮜</i>
                                    </li>
                                    <li class="gallery-slider__next-btn">
                                        <i>⮞</i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
    )
}

export default GallerySlider;