// components/RegisterSwiper.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Register from "./Register";

const RegisterSwiper: React.FC = () => {
  return (
    <div className="w-full py-8 bg-[var(--main-background)]">
      <div className="max-w-7xl mx-auto px-5">
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
      </div>
    </div>
  );
};

export default RegisterSwiper;
