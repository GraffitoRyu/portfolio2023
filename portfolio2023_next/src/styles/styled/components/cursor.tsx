"use client";

import styled from "styled-components";

// style
import { position, size } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

export const CursorStyle = styled.div`
  ${size({ width: "1px", height: "1px" })};
  ${position({ type: "fixed", top: "0rem", left: "0rem", z: 9999 })}
  pointer-events: none;
  backface-visibility: visible;
  .cursor {
    ${size({ width: rem(8), height: rem(8) })};
    ${position({ center: true })}
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.cursor.basic};
    background: ${({ theme }) => theme.cursor.basic};
    transition: width 0.4s, height 0.4s, background-color 0.4s;
  }
  &.link {
    .cursor {
      ${size({ width: rem(64), height: rem(64) })}
      background: ${({ theme }) => theme.cursor.hover};
    }
  }
  &.text {
    mix-blend-mode: difference;
    .cursor {
      ${size({ width: rem(4), height: rem(40) })}
      border-radius: 2px;
    }
  }
`;
