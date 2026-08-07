"use client";

import { useCallback, useEffect, useState } from "react";

// styled components
import { StyledCursor } from "@graffitoryu/ui/product/styles/styled/components/Cursor";
import { sizePreset } from "@graffitoryu/ui/product/styles/styled/preset/size";

/**
 * 커서 컴포넌트
 * @component
 */
export default function Cursor() {
  // 마우스 포인터 환경에서만 활성화
  const [hide, setHide] = useState<boolean>(true);
  // SSR 불일치 이슈로 useEffect 적용
  useEffect(() => {
    if (typeof window === "undefined") return;
    setHide(matchMedia("(pointer:fine)").matches ? false : true);
  }, []);

  // 커서 상태관리
  const [cursor, setCursor] = useState<CursorStateTypes>({
    x: 0, // e.clientX
    y: 0, // e.clientY
    hover: "", // "", "text", "clickable"
    height: sizePreset.cursor.text,
  });

  // 커서 상태 업데이트
  const updateCursor = useCallback(
    (e: MouseEvent | PointerEvent) => {
      if (!e) return;

      const { target, clientX, clientY } = e;

      const isElement = target instanceof HTMLElement;
      const isSvg = target instanceof SVGElement;

      if (!isElement && !isSvg) return;

      const c: CursorStateTypes = {
        x: clientX,
        y: clientY,
        hover: "",
        height: sizePreset.cursor.text,
      };

      // 이하 마우스오버 상태 업데이트 로직
      // 클릭가능 요소 체크
      if (
        target.closest("a,button") ||
        getComputedStyle(target)["cursor"] === "pointer"
      )
        Object.assign(c, { hover: "clickable" });
      // 텍스트 요소 체크
      else if (
        isElement &&
        target.innerText &&
        target.closest("h1,h2,h3,h4,h5,h6,p,dt,dd,time,figcaption,strong,span")
      ) {
        const lineHeight = Number.parseFloat(
          getComputedStyle(target).getPropertyValue("line-height"),
        );

        Object.assign(c, {
          hover: "text",
          height: Number.isFinite(lineHeight)
            ? lineHeight
            : sizePreset.cursor.text,
        });
      }

      setCursor(c);
    },
    [setCursor],
  );

  useEffect(() => {
    if (hide) return;

    if (typeof window === "undefined" || !matchMedia("(pointer:fine)").matches)
      return;
    window.addEventListener("mousemove", updateCursor, false);
    return () => window.removeEventListener("mousemove", updateCursor, false);
  }, [hide, updateCursor]);

  return (
    <StyledCursor
      className={`cursor-container ${hide ? "hide" : ""} ${cursor.hover}`}
      style={{
        left: cursor.x,
        top: cursor.y,
      }}
    >
      <figure
        className="cursor"
        {...(cursor.hover === "text"
          ? { style: { height: cursor.height } }
          : {})}
      ></figure>
    </StyledCursor>
  );
}
