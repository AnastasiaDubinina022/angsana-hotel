import React from 'react';

import './ContactsPage.scss';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageBanner from '../../components/PageBanner/PageBanner';
import ContactsAside from './elements/ContactsAside/ContactsAside';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactLinks from './elements/ContactLinks/ContactLinks';
import ContactsMap from './elements/ContactsMap/ContactsMap';

import BGImage from './images/contacts-bg.jpg';

const ContactsPage = () => {
  return (
    <PageWrapper>
      <main className="contacts">
        <PageBanner
          page="contacts"
          title="Contact us"
        />
        <ContactsAside />
        <section className="contact-form">
          <div className="contact-form__bg-image">
            <img
              src={BGImage}
              alt="contacts background"
            />
          </div>
          <div className="contact-form__wrapper">
            <div className="form-wrapper">
              <ContactForm />
            </div>
            <div className="contact-form__container">
              <ContactLinks />
              <ContactsMap />
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default ContactsPage;
