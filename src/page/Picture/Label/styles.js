import styled from "styled-components";
import { FontSize } from "@/styles/mixins";

export const LabelLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px 0;
  text-align: center;
`;

export const LabelImgDiv = styled.div`
  position: relative;
`;

export const CheckImgDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const CheckImg = styled.img`
  display: block;
  width: 40px;
`;

export const LabelImg = styled.img`
  display: block;
  width: 50px;
`;

export const LabelName = styled.div`
  ${FontSize(16, 20)};
  font-weight: 700;
`;

export const LabelNameEnglish = styled.div`
  ${FontSize(12, 16)};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
`;
