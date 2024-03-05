import styled from "styled-components";
import { motion } from "framer-motion";
import { MediaAbove } from "@/styles/mixins";

export const LinkLayout = styled(motion.div)`
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

export const Img = styled.img`
  display: block;
  width: 150px;

  ${MediaAbove("lg")} {
    // width: 200px;
    width: 300px;
  }
`;
