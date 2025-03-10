import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const HomeSlider = () => {
  return (
    <Swiper
      modules={[Navigation, EffectFade, Autoplay, A11y]}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={1}
      className="h-screen"
    >
      <SwiperSlide className="flex items-center justify-center text-white text-3xl w-full h-full">
        <img src="https://backend.amarbay.com/media/images/banner/WEBBB.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center text-white text-3xl w-full h-full">
        <img src="https://backend.amarbay.com/media/images/banner/WEB-01.png" alt="" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center text-white text-3xl w-full h-full">
        <img src="https://backend.amarbay.com/media/images/banner/WEB-02.png" alt="" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center text-white text-3xl w-full h-full">
        <img src="https://backend.amarbay.com/media/images/banner/WEB-03.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
