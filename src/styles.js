import styled, { css } from "styled-components";
import { setConfiguration } from "react-grid-system";
import { breakpoints, containerWidths, gutterWidth } from "@/styles/vars";
import { body } from "@/styles/types";

setConfiguration({
  breakpoints: [...Object.values(breakpoints)],
  containerWidths: [...Object.values(containerWidths)],
  gutterWidth,
  gridColumns: 12,
  maxScreenClass: "xxl",
});

const checkUrl = (path)=>{
  if(path.includes('/hub')){
    return '/hub'
  }
  return path
}

const colorStyle = (pathname) => css`
  background: ${({ theme }) => {
    switch (checkUrl(pathname)) {
      case "/hub":
        return theme.colors.black;
      case "/picture":
        return `linear-gradient(180deg, #F3FFFB 0%, #F7EBEB 100%)`;
      case "/bingo":
        return `linear-gradient(180deg, #FEF0FF 0%, #F9FFF3 100%)`;
      case "/puzzle":
        return `linear-gradient(180deg, #FFFDF1 0%, #EEECFF 100%)`;
      default:
        return theme.colors.white;
    }
  }};

  color: ${({ theme }) => {
    switch (checkUrl(pathname)) {
      case "/hub":
        return theme.colors.white;

      default:
        return theme.colors.black;
    }
  }};
`;

const overflowHiddenCSS = css`
  overflow: hidden;
`;

const positionFixedCSS = css`
  position: fixed;
`;

export const AppLayout = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: 1px;

  ${({ $pathname }) => colorStyle($pathname)};
  ${({ $pathname }) => $pathname === "/" && overflowHiddenCSS};
  ${({ $pathname }) => $pathname === "/hub" && positionFixedCSS};

  & {
    ${body}
  }

  a {
    &,
    &:link,
    &:active,
    &:visited {
      /* text-decoration: none; */
      color: inherit;
    }
  }

  sup {
    font-size: 0.6em;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
