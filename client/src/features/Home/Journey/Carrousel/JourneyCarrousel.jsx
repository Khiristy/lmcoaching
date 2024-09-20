// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "./JourneyCarrousel.scss";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const JourneyCarrousel = () => {
  const images = [
    "/media/journey/jouney_img-1.webp",
    "/media/journey/jouney_img-2.webp",
    "/media/journey/jouney_img-3.webp",
    "/media/journey/jouney_img-4.webp",
    "/media/journey/jouney_img-5.webp",
  ];

  return (
    <div className="carousel-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        spaceBetween={100}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default JourneyCarrousel;
