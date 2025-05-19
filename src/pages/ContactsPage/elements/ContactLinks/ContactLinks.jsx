import react from "react";

import './ContactLinks.scss';

import PhoneIcon from '../../../../assets/icons/phone-icon.svg';
import EmailIcon from '../../../../assets/icons/email-icon.svg';
import LocationIcon from '../../../../assets/icons/location-icon.svg';

const ContactLinks = () => {
    return (
        <div class="contact-form__row">
            <div class="contact-form__column">
                <img src={PhoneIcon} alt="phone-icon" />
                <a href="tel:+66076362333">+66 (0)76 362 333</a>
            </div>
            <div class="contact-form__column">
                <img src={EmailIcon} alt="email-icon" />
                <a href="mailto:info@lagunaproperty.com">info@lagunaproperty.com</a>
            </div>
            <div class="contact-form__column">
                <img src={LocationIcon} alt="location-icon" />
                <p>394 Moo 4 Cherngtalay, Amphoe Thalang, Chang Wat Phuket 83110</p>
            </div>
        </div>
    )
}

export default ContactLinks;