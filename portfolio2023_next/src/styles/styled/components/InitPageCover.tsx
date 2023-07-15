"use client";

import { keyframes, styled } from "styled-components";

// style
import { img } from "../preset/img";
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

export const InitCoverBox = styled.div<{ $wh: number }>`
  position: relative;
  ${({ $wh }) =>
    size({
      w: "100%",
      h: $wh !== 0 ? `${$wh}px` : "100vh",
      p: [0, 80],
    })}
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

const loadingRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loadingLine = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
`;

export const InitIconContainer = styled.div`
  ${position({ type: "absolute", bottom: 80, right: 80 })}
  ${size({ w: 40, h: 40 })}
`;

export const InitIconFigure = styled.figure`
  ${size({ w: 40, h: 40 })}

  svg {
    ${img({})}
    transform-origin: center;
    animation: ${loadingRotate} 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: ${({ theme }) => theme.initCover.icon};
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: ${loadingLine} 1.5s ease-in-out infinite;
  }
`;
