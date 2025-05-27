import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard , Autoplay } from 'swiper/modules';

import './DefaultSlider.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DefaultSlider = ({
  images = [],
  className = '',
  autoplay = true,
  delay = 5000,
  loop = true,
  slidesPerView = 1,
  navigation = true,
  pagination = true,
  mousewheel = true,
  keyboard = true,
  cssMode = false,
}) => {
    return (
    <>
        <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            autoplay={autoplay ? { delay, disableOnInteraction: false } : false}
            loop={loop}
            slidesPerView={slidesPerView}
            navigation={navigation}
            pagination={pagination}
            mousewheel={mousewheel}
            keyboard={keyboard}
            cssMode={cssMode}
            className={className}
        >   
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <img src={src} alt={`slide-${index}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    </>
  );
}

export default DefaultSlider;