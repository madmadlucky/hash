import styled from "styled-components";
import { MediaAbove } from "@/styles/mixins";

export const Nav = styled.nav`
  position: sticky;
  left: 0;
  top: 0;
  color: inherit;
  z-index: 10;
  padding: 20px 0;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  -moz-backdrop-filter: blur(5px);

  ${MediaAbove("lg")} {
    padding: 15px 0;
  }
`;

export const Title = styled.div`
  svg {
    display: block;
    width: 200px;
    height: auto;

    path {
      fill: currentColor;
    }
  }
`;

export const NavLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 20px;

  a {
    font-size: 12px;
    line-height: 25px;
    text-align: right;
  }
`;

export const Link = styled.a``;
