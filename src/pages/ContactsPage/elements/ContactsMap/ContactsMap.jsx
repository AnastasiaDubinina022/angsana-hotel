import {useEffect} from 'react';
import L from 'leaflet';

import './ContactsMap.scss';

const ContactsMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([7.991574, 98.295128], 15); // координаты отеля

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([7.991574, 98.295128])
      .addTo(map)
      .bindPopup(
        `<strong>Angsana Laguna Phuket</strong><br/>394 Moo 4 Cherngtalay,<br/>Amphoe Thalang,<br/>Phuket 83110`
      )
      .openPopup();

    return () => map.remove();
  }, []);

  return (
    <div
      id="map"
      style={{width: '100%', height: '400px', borderRadius: '10px', overflow: 'hidden'}}
      className="contact-form__map content-image"
    />
  );
};

export default ContactsMap;
