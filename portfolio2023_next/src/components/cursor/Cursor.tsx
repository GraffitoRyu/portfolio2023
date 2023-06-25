"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

// types
import { CursorTypes } from "@/types/state";

// state
import { cursorState } from "@/states/cursor";

// styled components
import { CursorStyle } from "@/styles/styled/components/Cursor";

export default function Cursor() {
  const [hide, setHide] = useState<string>("hide");
  const [cursor, setCursor] = useRecoilState<CursorTypes>(cursorState);

  const updateCursor = useCallback(
    (e: MouseEvent | PointerEvent) => {
      if (e?.target instanceof HTMLElement || e?.target instanceof SVGElement) {
        let targetElement = "";
        if (e.target.closest("a,button")) targetElement = "link";
        else if (
          e?.target instanceof HTMLElement &&
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
    if (typeof window === "undefined") return;
    setHide(matchMedia("(pointer:fine)").matches ? "" : "hide");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !matchMedia("(pointer:fine)").matches)
      return;
    window.addEventListener("mousemove", updateCursor, false);
    return () => window.removeEventListener("mousemove", updateCursor, false);
  }, [updateCursor]);

  return (
    <CursorStyle
      className={`cursor-container ${hide} ${cursor.hover}`}
      style={{ left: cursor.x, top: cursor.y }}
    >
      <figure className="cursor"></figure>
    </CursorStyle>
  );
}
