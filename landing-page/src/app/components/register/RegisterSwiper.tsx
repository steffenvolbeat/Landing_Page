// components/RegisterSwiper.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Register from "./Register";

const RegisterSwiper: React.FC = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
      spaceBetween={30}
      slidesPerView={1}
    >
      <SwiperSlide>
        <Register />
      </SwiperSlide>
      <SwiperSlide>
        <Register />
      </SwiperSlide>
      <SwiperSlide>
        <Register />
      </SwiperSlide>
    </Swiper>
  );
};

export default RegisterSwiper;