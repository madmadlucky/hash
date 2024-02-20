import styled, { css } from "styled-components";
import { MediaAbove, HeadlineSizeStyle, FontSize } from "@/styles/mixins";

export const PuzzleLayout = styled.div`
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

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
`;

export const Head = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
  ${FontSize(24, 32)};
`;

export const SubHead = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Description = styled.div``;

export const InstructionImg = styled.img`
  display: block;
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
`;

export const GridLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  width: 100%;

  ${MediaAbove("lg")} {
    margin-bottom: 160px;
  }
`;

const GridTemplateAreaStyle = (n = 30) => {
  const array = [];

  let labelCol = "empty";

  for (let i = 1; i <= n; i++) {
    labelCol += ` label-col-${i}`;
  }

  array.push(labelCol);

  let main = "";

  for (let i = 1; i <= n; i++) {
    main += " .";
  }

  for (let i = 1; i <= n; i++) {
    array.push(`label-row-${i}${main}`);
  }

  const wrappedInQuotes = array.map((d) => `'${d}'`);
  const withSpaceInBetween = wrappedInQuotes.join(" ");

  return css`
    grid-template-areas: ${withSpaceInBetween};
  `;
};

export const GridDiv = styled.div`
  display: grid;
  max-width: 100%;
  width: 100%;
  aspect-ratio: 1 / 1;
  grid-template-columns: 8fr repeat(${({ $n }) => $n}, minmax(0, 1fr));
  grid-template-rows: 8fr repeat(${({ $n }) => $n}, minmax(0, 1fr));
  justify-content: center;
  align-items: stretch;
  font-weight: 700;
  ${GridTemplateAreaStyle(30)};
  ${FontSize(7, 9)};

  ${MediaAbove("sm")} {
    ${FontSize(10, 12)};
  }

  ${MediaAbove("lg")} {
    width: 1000px;
    ${FontSize(13, 15)};
  }
`;

export const Tile = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  box-sizing: border-box;

  border-right: ${({ $index, theme }) =>
    `${$index % 5 === 0 ? 2 : 1}px solid ${theme.colors.black}`};
  border-bottom: ${({ $index, theme }) =>
    `${$index % 150 === 0 || $index % 150 > 120 ? 2 : 1}px solid ${
      theme.colors.black
    }`};

  color: ${({ theme, $clicked }) =>
    $clicked ? theme.colors.white : theme.colors.black};
  background: ${({ theme, $clicked }) =>
    $clicked ? theme.colors.black : "transparent"};

  transition: all 0.3s ease;
`;

export const LabelRow = styled.div`
  grid-area: ${({ $index }) => `label-row-${$index}`};
  text-align: right;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;
  column-gap: 3px;

  ${MediaAbove("sm")} {
    column-gap: 5px;
  }

  ${MediaAbove("lg")} {
    column-gap: 10px;
  }

  border-bottom: ${({ $index, theme }) =>
    `${$index % 5 === 0 ? 2 : 1}px solid ${theme.colors.black}`};
  border-right: 2px solid ${({ theme }) => theme.colors.black};
`;

export const LabelCol = styled.div`
  grid-area: ${({ $index }) => `label-col-${$index}`};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 5px;
  row-gap: 3px;

  ${MediaAbove("sm")} {
    row-gap: 5px;
  }

  ${MediaAbove("lg")} {
    row-gap: 10px;
  }

  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  border-right: ${({ $index, theme }) =>
    `${$index % 5 === 0 ? 2 : 1}px solid ${theme.colors.black}`};
`;

export const Empty = styled.div`
  grid-area: empty;

  border-right: 2px solid ${({ theme }) => theme.colors.black};
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`;
