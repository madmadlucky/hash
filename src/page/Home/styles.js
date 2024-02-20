import styled from "styled-components";
import { MediaAbove } from "@/styles/mixins";

export const HomeLayout = styled.div`
  /* position: relative; */
  display: grid;
  place-content: center;
  height: 100%;
`;

export const Headline = styled.div`
  svg {
    width: 240px;
    height: auto;

    ${MediaAbove("lg")} {
      width: 800px;
    }
  }
`;
