import styled from "styled-components";
import { MediaAbove, HeadlineSizeStyle } from "@/styles/mixins";

export const PictureLayout = styled.div`
  position: relative;
`;

export const HeadlineImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  ${HeadlineSizeStyle};

  ${MediaAbove("lg")} {
    margin-bottom: 100px;
  }
`;

export const PictureBaseDiv = styled.div`
  position: relative;
`;

export const PictureImg = styled.img`
  display: block;
  width: 100%;
`;

export const HiddenButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;

  ${MediaAbove("md")} {
    width: 60px;
    height: 60px;
  }

  ${MediaAbove("lg")} {
    width: 80px;
    height: 80px;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const CompleteModalLayout = styled.div``;
