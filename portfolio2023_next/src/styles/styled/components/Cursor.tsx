"use client";

import styled from "styled-components";

// style
import { position, size } from "../preset/mixins";

export const CursorStyle = styled.div`
  ${size({ w: "1px", h: "1px" })};
  ${position({ type: "fixed", top: "0rem", left: "0rem", z: 9999 })}
  pointer-events: none;
  backface-visibility: visible;
  &.hide {
    display: none;
  }
  .cursor {
    ${size({ w: 8, h: 8, r: "50%" })};
    ${position({ center: true })}
    border: 1px solid ${({ theme }) => theme.cursor.basic};
    background: ${({ theme }) => theme.cursor.basic};
    transition:
      width 0.4s,
      height 0.4s,
      background-color 0.4s;
  }
  &.link {
    .cursor {
      ${size({ w: 64, h: 64 })}
      background: ${({ theme }) => theme.cursor.hover};
    }
  }
  &.text {
    mix-blend-mode: difference;
    .cursor {
      ${size({ w: 4, h: 40, r: 2 })}
    }
  }
`;
