"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ThemeProvider, styled } from "styled-components";

import { CursorTypes, cursorState } from "@/states/cursor";
import { themeState } from "@/states/theme";

type CursorColorTypes = {
  basic: string;
  hover: string;
};
type CursorModeTypes = {
  [key: string]: CursorColorTypes;
  light: CursorColorTypes;
  dark: CursorColorTypes;
};
const CursorColors: CursorModeTypes = {
  light: {
    basic: "#1a1a1a",
    hover: "rgba(26,26,26,0.1)",
  },
  dark: {
    basic: "#fff",
    hover: "rgba(255,255,255,0.1)",
  },
};

const CursorStyle = styled.div`
  width: 1px;
  height: 1px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999999;
  pointer-events: none;
  backface-visibility: visible;
  .cursor {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.basic};
    background: ${({ theme }) => theme.basic};
    transition: width 0.4s, height 0.4s, background-color 0.4s;
  }
  &.link {
    .cursor {
      width: 64px;
      height: 64px;
      background: ${({ theme }) => theme.hover};
    }
  }
  &.text {
    mix-blend-mode: difference;
    .cursor {
      width: 4px;
      height: 40px;
      border-radius: 2px;
    }
  }
`;

export default function Cursor(): JSX.Element {
  const { theme } = useRecoilValue(themeState);
  const [colors, setColors] = useState<CursorColorTypes>(CursorColors.light);
  const [cursor, setCursor] = useRecoilState(cursorState);
  const cursorRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const updateCursor = (e: MouseEvent | PointerEvent) => {
    if (e?.target instanceof HTMLElement) {
      let targetElement = "";
      if (e.target.closest("a")) targetElement = "link";
      else if (e.target.closest("button")) targetElement = "link";
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
  };

  useEffect(() => {
    if (matchMedia("(pointer:fine)").matches) {
      window.addEventListener("mousemove", e => updateCursor(e));
      return () =>
        window.removeEventListener("mousemove", e => updateCursor(e));
    }
  }, []);

  useEffect(() => {
    setColors(CursorColors[theme]);
  }, [theme]);

  return (
    <ThemeProvider theme={colors}>
      <CursorStyle
        className={`cursor-container ${cursor.hover}`}
        ref={cursorRef}
        style={{ left: cursor.x, top: cursor.y }}
      >
        <figure className="cursor"></figure>
      </CursorStyle>
    </ThemeProvider>
  );
}
