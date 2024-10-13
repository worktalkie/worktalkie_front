"use client";

import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

type CarouselLayoutType = {
  slides: ReactNode[];
};
export const CarouselLayout = ({ slides }: CarouselLayoutType) => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {slides?.map((slide) => {
        return <SwiperSlide>{slide}</SwiperSlide>;
      })}
    </Swiper>
  );
};
