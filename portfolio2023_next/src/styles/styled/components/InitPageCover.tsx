"use client";

import { styled } from "styled-components";
import { flex, font, position, size } from "../preset/mixins";
import { easing } from "../preset/easing";
import { transTime } from "../preset/transTime";

export const InitCoverContainer = styled.div`
  ${position({ type: "fixed", left: 0, top: 0, z: 4000 })}
  ${size({ w: "100%", h: 0 })}
  background-color:${({ theme }) => theme.transCover.bg};
  overflow: clip;
  transition: height ${transTime.common.transCover / 1000 + "s"} ${easing.expo};
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
  ${flex({})}
`;

export const InitCoverTItle = styled.div`
  color: ${({ theme }) => theme.transCover.title};
  ${font({
    size: 40,
    weight: 700,
  })}
`;
