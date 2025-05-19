import react from 'react';

import './PageBanner.scss';

import RoomsImage from './images/rooms-banner.jpg';
import FacilitiesImage from './images/facilities-banner.jpg';
import OffersImage from './images/offers-banner.jpg';
import ContactsImage from './images/contacts-banner.jpg';

const PageBanner = ({page, title, subtitle = null, color = null }) => {
    const images = {
        rooms: RoomsImage,
        facilities: FacilitiesImage,
        offers: OffersImage,
        contacts: ContactsImage
    }

    const bannerImage = images[page] || RoomsImage;
    const colorClass = color ? 'upper-block__title_blue' : 'upper-block__title';

    return (
        <section className="upper-block">
            <div className="upper-block__title-wrapper">
                <div className={colorClass}>
                    <div className="container">
                        <h1>{title}</h1>
                        {subtitle && <p className='upper-block__subtitle'>{subtitle}</p>}
                    </div>
                </div>
            </div>

            <div className="upper-block__image fullscreen-image">
                <img src={bannerImage} alt="background" />
            </div>
        </section>
    )
}

export default PageBanner;