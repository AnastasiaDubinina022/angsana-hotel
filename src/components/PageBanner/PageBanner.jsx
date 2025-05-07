import react from 'react';

import './PageBanner.scss';

import RoomsImage from './images/rooms-banner.jpg'

const PageBanner = ({page, title, subtitle = null }) => {

    return (
        <section class="upper-block">
            <div class="upper-block__title-wrapper">
                <div class="upper-block__title">
                    <div class="container">
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>

            <div class="upper-block__image fullscreen-image">
                <img src={RoomsImage} alt="rooms-upper-block" />
            </div>
        </section>
    )
}

export default PageBanner;