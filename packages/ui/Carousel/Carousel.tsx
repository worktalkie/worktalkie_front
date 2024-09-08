import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperProps = {
  modules: [Navigation, Pagination],
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
};

export const Carousel = () => {
  return (
    <Swiper
      modules={swiperProps.modules}
      loop={swiperProps.loop}
      pagination={swiperProps.pagination}
      navigation={swiperProps.navigation}
      scrollbar={swiperProps.scrollbar}
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
    </Swiper>
  );
};
