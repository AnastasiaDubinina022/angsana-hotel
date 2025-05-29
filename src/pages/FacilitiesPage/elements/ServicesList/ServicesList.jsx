import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './ServicesList.scss';

const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <section className="services">
      <div className="container">
        <div className="services__title">
          <h3>Services and facilities</h3>
        </div>
        <div className="services__row">
          <ul className="services__list">
            {services.map(service => (
              <li
                key={service.id}
                className="services__list-item">
                <div className="services__list-icon">
                  <img
                    src={`${service.icon}`}
                    alt={service.title}
                  />
                </div>
                <span>{service.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
