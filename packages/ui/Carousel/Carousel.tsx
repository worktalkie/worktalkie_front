"use client";

import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

type CarouselType = {
  slides: ReactNode[];
};
export const Carousel = ({ slides }: CarouselType) => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {slides?.map((slide) => {
        return <SwiperSlide>{slide}</SwiperSlide>;
      })}
    </Swiper>
  );
};
