import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useFollowPointer } from "./useFollowPointer";

const bg_animation = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
      <StyledMotionSpan ref={ref} animate={{ x, y }} /> {/* motion.span */}
    </>
  );
};

export default bg_animation;

const StyledMotionSpan = styled(motion.span)`
  @media (min-width: 768px) {
    display: block;
  }

  background: linear-gradient(
    236.22deg,
    #ffdb70 39.32%,
    #13afaf83 10.21%,
    #f7f7f7 73.4%
  );
  border: 122px solid #b3b0b1;
  filter: blur(187px);
  width: 110px;
  height: 19px;
  position: absolute;
  left: -1000px;

  @media (min-width: 1280px) {
    width: 1000px;
    height: 1000px;
    left: -1309px;
  }

  top: -709px;
`;
