"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";

// state
import { CursorTypes, cursorState } from "@/states/cursor";

// style
import { position, size } from "@/styles/styled/mixins";

// util
import { rem } from "@/util/unit";

const CursorStyle = styled.div`
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

export default function Cursor() {
  const [cursor, setCursor] = useRecoilState<CursorTypes>(cursorState);
  const cursorRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const updateCursor = useCallback(
    (e: MouseEvent | PointerEvent) => {
      if (e?.target instanceof HTMLElement) {
        let targetElement = "";
        if (e.target.closest("a,button")) targetElement = "link";
        else if (
          e.target.innerText &&
          e.target.closest("h1,h2,h3,h4,h5,h6,p,dt,dd,time")
        )
          targetElement = "text";

        const c: CursorTypes = {
          x: e.clientX,
          y: e.clientY,
          hover: targetElement,
        };
        setCursor(c);
      }
    },
    [setCursor]
  );

  useEffect(() => {
    if (matchMedia("(pointer:fine)").matches) {
      window.addEventListener("mousemove", updateCursor);
      return () => window.removeEventListener("mousemove", updateCursor);
    }
  }, [updateCursor]);

  return (
    <CursorStyle
      className={`cursor-container ${cursor.hover}`}
      ref={cursorRef}
      style={{ left: cursor.x, top: cursor.y }}
    >
      <figure className="cursor"></figure>
    </CursorStyle>
  );
}
