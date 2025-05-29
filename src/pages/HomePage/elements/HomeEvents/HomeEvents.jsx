import react from 'react';

import './HomeEvents.scss';

import BGImage from './images/events-weddings2.webp';

const HomeEvents = () => {
  return (
    <section className="home-events">
      <div className="home-events__wrapper">
        <div className="home-events__image">
          <img
            src={BGImage}
            alt="home-events-image"
          />
        </div>

        <div className="home-events__content-wrapper">
          <div className="container">
            <div className="home-events__content">
              <h3>Events & Weddings</h3>
              <p>
                <span>Discover Romance in Phuket.</span> Whether you are getting married or
                proposing, celebrating your honeymoon or an anniversary, make memories that matter
                at Angsana Laguna Phuket.
              </p>

              <p>
                From the beachfront to the poolside, white chapel and more, our wedding venues are
                set in picturesque locations and with a wide variety of custom designing options can
                be transformed into your dream location. Choose from a variety of wedding venues,
                custom catering services, and all-inclusive packages for a truly incredible
                celebration in Phuket.
              </p>

              <p>
                <span>Extraordinary Resort Events. </span> Angsana Laguna Phuket with 11 meeting
                rooms, 4 outdoor venues, more than 2,000 sqm of event space and the largest
                convention centre 'ACES' in all of Phuket with 1500 sqm that can accommodate 1000
                people is your perfect choice for events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeEvents;
