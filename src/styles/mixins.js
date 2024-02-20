import { css } from "styled-components";
import { breakpoints } from "./vars";

export const FontSize = (size = 16, lineHeight = 24) => css`
  font-size: ${size}px;
  line-height: ${lineHeight}px;
`;

export const MediaBelow = (key) =>
  `@media (max-width: ${breakpoints[key] - 1}px)`;

export const MediaAbove = (key) => `@media (min-width: ${breakpoints[key]}px)`;

export const MediaBelowXS = (breakpoint = 375) =>
  `@media (max-width: ${breakpoint - 1}px)`;

export const MediaAboveInline = (key) =>
  `@media (minWidth: ${breakpoints[key]}px)`;

export const SetMaxWidth = () => css`
  max-width: ${({ theme }) => theme.breakpoints.max}px;
  margin: 0 auto;
`;

export const Truncate = (line = 3) => css`
  max-width: 100%;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

export const HeadlineSizeStyle = css`
  max-width: 100%;
  width: auto;
  height: 80px;
  object-fit: contain;

  ${MediaAbove("lg")} {
    height: 200px;
  }
`;
