import React from 'react';

import './ContactsPage.scss';

import PageBanner from '../../components/PageBanner/PageBanner';
import ContactsAside from './elements/ContactsAside/ContactsAside';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactLinks from './elements/ContactLinks/ContactLinks';
import ContactsMap from './elements/ContactsMap/ContactsMap';

import BGImage from './images/contacts-bg.jpg';

const ContactsPage = () => {

    return (
        <main class="contacts">
            <PageBanner page='contacts' title="Contact us" />
            <ContactsAside />
            <section class="contact-form">
                    <div class="contact-form__bg-image">
                        <img src={BGImage} alt="contacts background" />
                    </div>
                    <div class="contact-form__wrapper">
                        <ContactForm />
                        <div class="contact-form__container">
                            <ContactLinks/>
                            <ContactsMap/>
                        </div>
                    </div>

            </section>
        </main>
    )
}

export default ContactsPage;