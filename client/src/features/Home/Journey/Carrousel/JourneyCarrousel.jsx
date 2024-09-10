// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './JourneyCarrousel.scss';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const JourneyCarrousel = () => {
  const images = [
    '/media/journey_img-1.webp',
    '/media/journey_img-2.webp',
    '/media/journey_img-3.webp',
    '/media/journey_img-4.webp',
    '/media/journey_img-5.webp'
  ];

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={10}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default JourneyCarrousel;