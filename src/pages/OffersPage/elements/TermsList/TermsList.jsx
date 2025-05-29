import react from 'react';

import './TermsList.scss';

const TermsList = () => {
  const termsData = [
    'Rates are quoted in Thai Baht (THB) on a per room/suite/villa per night basis.',
    'Rates are exclusive of 10% Service Charge, 7% Government Tax, and 1% Provincial Tax.',
    'Check-in time is 15:00 hrs. and Check-out time is 12:00 hrs.',
    'Early check-in and late check-out are subject to availability.',
    'Late check out from 12:00 hrs. to 18:00 hrs. will be charged 50% of the room rate.',
    'Late check out after 18:00 hrs. will be charged 100% of the room rate.',
    'In the event of no-show, the total rate of the confirmed room nights for entire stay shall be chargeable.',
    'For early departure, the resort will charge according to the cancellation policy.',
    'Reservations will be cancelled at the resort’s discretion without prior notice should an invalid credit card be submitted.',
    'Extra person charge with breakfast is THB 1,400 nett - Inclusive of 10% Service Charge, 7% Government Tax, and 1% Provincial Tax.',
  ];

  const terms = termsData.map((term, i) => {
    return <li key={i}>{term}</li>;
  });

  return (
    <section className="general-terms">
      <div className="container">
        <h3>General Terms and Conditions:</h3>
        <ul className="general-terms__list">{terms}</ul>
      </div>
    </section>
  );
};

export default TermsList;
