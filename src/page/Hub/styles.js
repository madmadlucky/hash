import styled from "styled-components";
import { Link } from "react-router-dom";
import { MediaAbove } from "@/styles/mixins";
import { ButtonStyle } from "@/component/Partials/Button";

export const HubLayout = styled.div`
  position: relative;

  .swiper {
    .swiper-wrapper {
      .swiper-slide {
        position: relative;
        display: flex;
        width: calc(100% - 30px);
        max-width: 100%;

        flex-direction: column;
        align-items: center;

        ${MediaAbove("sm")} {
          height: calc(100vh - 200px);
          height: calc(100dvh - 200px);
          object-fit: contain;
        }

        ${MediaAbove("lg")} {
          width: auto;
          height: calc(100vh - 160px);
          
        }
      }
    }
  }
`;

export const DesktopImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: center;
  height: 100%;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  margin-top: 10px;

  ${MediaAbove("lg")} {
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const LinkCTA = styled(Link)`
  ${ButtonStyle}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  text-decoration-line: none;
`;

export const LinkKR = styled.u`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-underline-position : under;
`;

export const LinkENG = styled.p`
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;

export const ImgDiv = styled.div`
  position: relative;
`;

export const DesktopSwiperWrapper = styled.div`
  transition: opacity 0.3s ease;
`;
