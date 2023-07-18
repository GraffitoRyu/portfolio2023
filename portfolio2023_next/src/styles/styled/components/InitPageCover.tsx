"use client";

import { keyframes, styled } from "styled-components";

// style
import { transTime } from "../preset/transTime";
import { flex, font, position, size } from "../preset/mixins";

export const InitCoverContainer = styled.div`
  ${position({ type: "fixed", left: 0, top: 0, z: 4000 })}
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

export const InitCoverBox = styled.div`
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

export const InitCoverTItle = styled.div`
  color: ${({ theme }) => theme.initCover.text};
  ${flex({ dir: "column" })}
  ${font({
    size: 40,
    weight: 500,
    height: "1em",
    family: "var(--serif-kr)",
  })}
  span {
    ${size({ mt: 8 })}
    ${font({ spacing: 0 })}
  }
  opacity: 1;
  animation: ${initTitleBreathing} 1.6s infinite linear;
  transition: none;

  @media only screen and (min-width: 560px) {
    ${font({ size: 24 })}
  }
  @media only screen and (min-width: 1024px) {
    ${font({ size: 32 })}
  }
  @media only screen and (min-width: 1280px) {
    ${font({ size: 24 })}
  }
`;
