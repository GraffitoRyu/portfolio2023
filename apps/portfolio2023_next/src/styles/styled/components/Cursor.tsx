"use client";

import styled from "styled-components";

// style
import { position, size } from "../preset/mixins";
import { sizePreset } from "../preset/size";

export const StyledCursor = styled.div`
  ${size({ w: "1px", h: "1px" })};
  ${position({ type: "fixed", top: "0rem", left: "0rem", z: 9999 })}
  pointer-events: none;
  backface-visibility: visible;
  mix-blend-mode: difference;
  &.hide {
    display: none;
  }
  .cursor {
    ${size({
      w: sizePreset.cursor.basic,
      h: sizePreset.cursor.basic,
      r: "50%",
    })};
    ${position({ center: true })}
    border: 1px solid ${({ theme }) => theme.cursor.basic};
    background: ${({ theme }) => theme.cursor.basic};
    transition:
      width 0.4s,
      height 0.4s,
      background-color 0.4s;
  }
  &.clickable {
    .cursor {
      ${size({
        w: sizePreset.cursor.clickable,
        h: sizePreset.cursor.clickable,
      })}
      background: ${({ theme }) => theme.cursor.hover};
    }
  }
  &.text {
    .cursor {
      ${size({
        w: sizePreset.cursor.basic / 2,
        h: sizePreset.cursor.text,
        r: 2,
      })}
    }
  }
`;
