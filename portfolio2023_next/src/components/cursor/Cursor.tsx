"use client";

import { useCallback, useEffect, useState } from "react";

// types
import { CursorTypes } from "@/types/state";

// styled components
import { CursorStyle } from "@/styles/styled/components/Cursor";

export default function Cursor() {
  const [hide, setHide] = useState<string>("hide");
  const [cursor, setCursor] = useState<CursorTypes>({ x: 0, y: 0, hover: "" });

  const updateCursor = useCallback(
    (e: MouseEvent | PointerEvent) => {
      if (e?.target instanceof HTMLElement || e?.target instanceof SVGElement) {
        let targetElement = "";
        if (
          e.target.closest("a,button") ||
          getComputedStyle(e.target)["cursor"] === "pointer"
        )
          targetElement = "link";
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
