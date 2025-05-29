import {Swiper, SwiperSlide} from 'swiper/react';
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';

import './DefaultSlider.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DefaultSlider = ({
  images = [],
  className = '',
  effect = '',
  effectSettings = {},
  autoplay = true,
  delay = 5000,
  loop = false,
  //   slidesPerView = 1,
  breakpoints = null,
  grabCursor = true,
  centeredSlides = true,
  navigation = true,
  pagination = true,
  mousewheel = true,
  keyboard = true,
  cssMode = false,
}) => {
  return (
    <>
      <Swiper
        effect={effect}
        autoplay={autoplay ? {delay, disableOnInteraction: false} : false}
        loop={loop}
        // slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        grabCursor={grabCursor}
        centeredSlides={centeredSlides}
        navigation={navigation}
        pagination={pagination}
        mousewheel={mousewheel}
        keyboard={keyboard}
        cssMode={cssMode}
        className={className}
        {...(effect === 'coverflow' && {coverflowEffect: effectSettings})}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay, EffectCoverflow]}>
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DefaultSlider;
