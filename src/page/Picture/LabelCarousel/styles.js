import styled from "styled-components";
import { motion } from "framer-motion";
import { MediaAbove } from "@/styles/mixins";

export const LabelCarouselLayout = styled.div`
  position: relative;
  margin-bottom: 30px;

  .swiper {
    .swiper-wrapper {
      .swiper-slide {
        ${MediaAbove("md")} {
          width: 80px;
        }
      }
    }
  }
`;

export const PaginationDiv = styled.div`
  && {
    position: relative;
    top: 0;
    bottom: 0;

    ${MediaAbove("lg")} {
      margin-top: 40px;
    }
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.black};
    transition: all 0.2s ease;
  }
  .swiper-pagination-bullet-active {
    transform: scale(1);
  }
`;
