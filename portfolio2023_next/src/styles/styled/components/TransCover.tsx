"use client";

import { styled } from "styled-components";

// style
import { easing } from "../preset/easing";
import { flex, font, position, size } from "../preset/mixins";
import { transTime } from "../preset/transTime";

export const TransitionCover = styled.div`
  ${position({ type: "fixed", left: 0, top: 0, z: 3000 })}
  ${size({ w: "100%", h: 0 })}
  background-color: ${({ theme }) => theme.transCover.bg};
  overflow: clip;
  transition: height ${transTime.common.coverUp / 1000}s ${easing.expo};
  &.loading {
    height: 100%;
    top: auto;
    bottom: 0;
    .transCoverBox {
      top: auto;
      bottom: 0;
    }
  }
`;

export const TransBox = styled.div`
  ${position({ top: 0, left: 0 })}
  ${flex({ std: "flex-start" })}
  ${size({ w: "100%", h: `var(--wh)`, p: [0, 80] })}
`;

export const TransTitle = styled.h1`
  color: ${({ theme }) => theme.transCover.title};
  ${font({
    size: 160,
    weight: 500,
    family: `var(--serif-kr)`,
    height: "1em",
    spacing: 0,
    transform: "capitalize",
  })}
`;
