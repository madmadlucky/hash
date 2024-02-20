import { forwardRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { MediaAbove } from "@/styles/mixins";

export const setSectionPaddingY = (option = { top: true, bottom: true }) => css`
  padding-top: ${option.top ? 40 : 0}px;
  padding-bottom: ${option.bottom ? 40 : 0}px;

  ${MediaAbove("md")} {
    padding-top: ${option.top ? 60 : 0}px;
    padding-bottom: ${option.bottom ? 60 : 0}px;
  }

  ${MediaAbove("lg")} {
    padding-top: ${option.top ? 80 : 0}px;
    padding-bottom: ${option.bottom ? 80 : 0}px;
  }

  ${MediaAbove("xxl")} {
    padding-top: ${option.top ? 100 : 0}px;
    padding-bottom: ${option.bottom ? 100 : 0}px;
  }
`;

export const Section = styled(motion.section)`
  position: relative;
  width: 100%;
  height: 100%;

  ${({ $paddingY }) => setSectionPaddingY($paddingY)};
`;

export default forwardRef(
  (
    {
      paddingY = { top: true, bottom: true },
      children = null,
      id = "",
      ...props
    },
    ref
  ) => (
    <Section id={id} ref={ref} $paddingY={paddingY} {...props}>
      {children}
    </Section>
  )
);
