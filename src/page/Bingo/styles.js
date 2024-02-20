import styled, { css } from "styled-components";
import { MediaAbove, HeadlineSizeStyle, FontSize } from "@/styles/mixins";

export const BingoLayout = styled.div`
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

export const ContentLayout = styled.div`
  position: relative;
  padding: 15px 0;

  ${MediaAbove("lg")} {
    padding: 60px 40px;
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
`;

export const Head = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Description = styled.div``;

export const InstructionTitleImg = styled.img`
  display: block;
  width: 240px;
  margin: 0 auto 40px auto;

  ${MediaAbove("lg")} {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    margin: unset;
  }
`;

export const GridLayout = styled.div`
  max-width: 100%;
  margin-bottom: 80px;

  ${MediaAbove("lg")} {
    margin-bottom: 160px;
  }
`;

export const GridDiv = styled.div`
  display: grid;
  max-width: 100%;
  aspect-ratio: 1 / 1;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
  grid-auto-flow: row;
  justify-content: center;
  align-items: stretch;

  border-top: 1px solid ${({ theme }) => theme.colors.black};
  border-left: 1px solid ${({ theme }) => theme.colors.black};

  width: 700px;

  ${MediaAbove("lg")} {
    width: 950px;
  }
`;

const TileStyle = css`
  padding: 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  font-weight: 700;

  cursor: ${({ $clicked }) => ($clicked ? "auto" : "pointer")};
  color: ${({ theme, $clicked }) =>
    $clicked ? theme.colors.white : theme.colors.black};
  background: ${({ theme, $clicked }) =>
    $clicked ? theme.colors.black : "transparent"};

  transition: all 0.3s ease;
  font-size: 5px;
  line-height: 1.1;
  padding: 4px;

  ${MediaAbove("sm")} {
    font-size: 7px;
  }

  ${MediaAbove("md")} {
    font-size: 10px;
  }

  ${MediaAbove("lg")} {
    font-size: 12px;
    padding: 10px;
  }

  ${MediaAbove("xxl")} {
    font-size: 13px;
  }
`;

export const Tile = styled.button`
  ${TileStyle};
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3px 0;

  ${MediaAbove("sm")} {
    gap: 5px 0;
  }

  ${MediaAbove("lg")} {
    gap: 15px 0;
  }
`;

export const IconTile = styled.div`
  ${TileStyle};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
    height: auto;
    width: 50px;

    ${MediaAbove("md")} {
      width: 70px;
    }

    ${MediaAbove("lg")} {
      width: 110px;
    }
  }
`;
