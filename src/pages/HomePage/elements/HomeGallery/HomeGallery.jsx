import {useState, useEffect} from 'react';
import axios from 'axios';

import './HomeGallery.scss';

import DefaultSlider from '../../../../components/DefaultSlider/DefaultSlider';

const HomeGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/homeGallerySlider`)
      .then(response => {
        const imageUrls = response.data.map(item => item.url);
        setImages(imageUrls);
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="home-gallery">
      <div className="home-gallery__title">
        <h3>Our gallery</h3>
      </div>
      <div className="home-gallery__slider">
        <DefaultSlider
          images={images}
          slidesPerView={3}
          effect="coverflow"
          effectSettings={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            850: {
              slidesPerView: '3',
            },
          }}
          loop={true}
          className="coverflow-slider"
        />
      </div>
    </div>
  );
};

export default HomeGallery;
