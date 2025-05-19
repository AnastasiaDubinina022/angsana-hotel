import react from 'react';

import './ContactForm.scss';

const ContactForm = () => {
    return (
        <form action="#" method="get" enctype="multipart/form-data">
            <div class="contact-form__form">
                <div class="contact-form__input">
                    <select name="type" required>
                        <option value="empty" selected disabled hidden>Type of enquiry *</option>
                        <option value="general">General enquiries</option>
                        <option value="guest-service">Guest service enquiries</option>
                        <option value="bookings">Reservations and bookings</option>
                        <option value="website">Website enquiries</option>
                        <option value="spa">Spa enquiries</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="contact-form__input">
                    <input
                        type="text"
                        name="username"
                        value=""
                        placeholder="Your name *"
                        tabindex="1"
                    />
                </div>
                <div class="contact-form__input">
                    <input
                        type="email"
                        name="usermail"
                        value=""
                        placeholder="Your email *"
                        tabindex="2"
                    />
                </div>
                <div class="contact-form__input">
                    <textarea name="text" placeholder="Your message *" tabindex="3"></textarea>
                </div>
                <div class="contact-form__button yellow-button blocked">
                    <button type="submit" tabindex="4">Send message</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;