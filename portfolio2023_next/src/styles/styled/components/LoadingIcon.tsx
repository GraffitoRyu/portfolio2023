import { keyframes, styled } from "styled-components";

import { position, size } from "../preset/mixins";
import { img } from "../preset/img";

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

export const LoadingIconContainer = styled.div`
  ${position({ type: "absolute", bottom: 80, right: 80 })}
  ${size({ w: 40, h: 40 })}
`;

export const LoadingIconFigure = styled.figure`
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
