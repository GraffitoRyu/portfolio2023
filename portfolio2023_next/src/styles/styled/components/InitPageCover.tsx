"use client";

import { keyframes, styled } from "styled-components";

import { easing } from "../preset/easing";
import { transTime } from "../preset/transTime";
import { SvgFill, flex, font, position, size } from "../preset/mixins";
import { img } from "../preset/img";
import { rem } from "@/util/unit";

export const InitCoverContainer = styled.div`
  ${position({ type: "fixed", left: 0, top: 0, z: 4000 })}
  ${size({ w: "100%", h: 0 })}
  background-color:${({ theme }) => theme.initCover.bg};
  overflow: clip;
  transition: height ${transTime.common.coverUp / 1000}s ${easing.expo};
  &.initiating {
    height: 100%;
  }
`;

export const InitCoverBox = styled.div`
  ${size({
    w: "100%",
    h: typeof window != "undefined" ? `${window.innerHeight}px` : "100vh",
    p: [0, 80],
  })}
  ${flex({ dir: "column" })}
`;

const loadingRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const InitIconContainer = styled.div`
  position: relative;
  ${size({ w: 80, h: 80, mb: 40 })}

  .loading-icon {
    animation: ${loadingRotate} 1.6s infinite linear;
  }

  &.loading {
    .complete-icon {
      opacity: 0;
    }
  }
  &:not(.loading) {
    .loading-icon {
      opacity: 0;
    }
    .complete-icon {
      transition-delay: 0.2s;
    }
  }
`;

export const InitIconFigure = styled.figure`
  ${position({ type: "absolute" })}
  ${size({ w: 80, h: 80 })}
  transition: opacity 0.4s;

  svg {
    ${position({ type: "absolute" })}
    ${img({})}
    ${({ theme }) => SvgFill(theme.initCover.icon)}
  }
`;

export const InitCoverTItle = styled.div`
  color: ${({ theme }) => theme.initCover.text};
  ${flex({ dir: "column" })}
  ${font({
    size: 24,
    weight: 500,
    height: "1em",
    spacing: 0,
  })}
  span {
    margin-top: ${rem(8)};
  }
`;
