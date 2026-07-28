"use client";

import { keyframes, styled } from "styled-components";
import { media, typography, zIndex } from "@graffitoryu/ui";

// style
import { transTime } from "../preset/transTime";
import { flex, font, position, size } from "../preset/mixins";

export const StyledInitCoverContainer = styled.div`
  ${position({
    type: "fixed",
    left: 0,
    top: 0,
    z: zIndex.initializationCover,
  })}
  ${size({ w: "100%", h: "100%" })}
  opacity:0;
  transition: opacity ${transTime.common.initFade / 1000}s;
  display: none;
  &.initializing {
    display: block;
  }
  &.show {
    opacity: 1;
  }
`;

export const StyledInitCoverBox = styled.div`
  position: relative;
  ${size({ w: "100%", h: `100vh`, p: [0, 80] })}
  ${flex({ dir: "column" })}
`;

const initTitleBreathing = keyframes`
  0% {opacity:1}
  23% {opacity:0.7}
  50% {opacity:0.2}
  73% {opacity:0.7}
  100% {opacity:1}
`;

export const StyledInitCoverTItle = styled.div`
  color: ${({ theme }) => theme.initCover.text};
  ${flex({ dir: "column" })}
  ${font({
    size: 40,
    weight: 500,
    height: "1em",
    family: typography.family.serifKorean,
  })}
  span {
    ${size({ mt: 8 })}
    ${font({ spacing: 0 })}
  }
  opacity: 1;
  animation: ${initTitleBreathing} 1.6s infinite linear;
  transition: none;

  @media only screen and ${media.min.compact} {
    ${font({ size: 24 })}
  }
  @media only screen and ${media.min.desktop} {
    ${font({ size: 32 })}
  }
  @media only screen and ${media.min.wide} {
    ${font({ size: 24 })}
  }
`;
