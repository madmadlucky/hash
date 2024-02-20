import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import { useTheme } from "styled-components";

import Label from "../Label";

import "swiper/css";
import "swiper/css/pagination";

import { LabelCarouselLayout, PaginationDiv } from "./styles";

export default ({ data = [] }) => {
  const theme = useTheme();

  return (
    <LabelCarouselLayout>
      <Swiper
        className="swiper"
        loop={false}
        freeMode={true}
        slidesPerView={4}
        breakpoints={{
          [`${theme.breakpoints.sm}`]: {
            slidesPerView: 5,
          },
          [`${theme.breakpoints.md}`]: {
            slidesPerView: "auto",
          },
        }}
        spaceBetween={10}
        modules={[A11y, Pagination]}
        a11y={true}
        speed={450}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        }}
      >
        {data.map((item, i) => {
          const { found, id, name } = item;

          return (
            <SwiperSlide key={i}>
              <Label id={id} found={found} name={name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <PaginationDiv className="swiper-pagination" />
    </LabelCarouselLayout>
  );
};
