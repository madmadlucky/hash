import { css } from "styled-components";
import { MediaAbove, FontSize } from "./mixins";

export const HyundaiSans = css`
  font-family: "Hyundai Sans", Arial, sans-serif;

  @font-face {
    font-family: "Hyundai Sans";
    src: url("/font/KR/HyundaiSansTextBold.woff2") format("woff2"),
      url("/font/KR/HyundaiSansTextBold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Hyundai Sans";
    src: url("/font/KR/HyundaiSansTextMedium.woff2") format("woff2"),
      url("/font/KR/HyundaiSansTextMedium.woff") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Hyundai Sans";
    src: url("/font/KR/HyundaiSansTextRegular.woff2") format("woff2"),
      url("/font/KR/HyundaiSansTextRegular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Hyundai Sans";
    src: url("/font/Latin/HyundaiSansTextBold.woff2") format("woff2"),
      url("/font/Latin/HyundaiSansTextBold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Hyundai Sans";
    src: url("/font/Latin/HyundaiSansTextMedium.woff2") format("woff2"),
      url("/font/Latin/HyundaiSansTextMedium.woff") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Hyundai Sans";
    src: url("/font/Latin/HyundaiSansTextRegular.woff2") format("woff2"),
      url("/font/Latin/HyundaiSansTextRegular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

export const body = css`
  ${HyundaiSans};
  ${FontSize(16, 24)};

  ${MediaAbove("lg")} {
    ${FontSize(18, 24)}
  }
`;
