"use client";

import { useCallback } from "react";
import { useSetAtom } from "jotai";

// hook
import useResizeObserver from "@graffitoryu/ui/product/hooks/layout/useResizeObserver";

// state
import { viewportState } from "@graffitoryu/ui/product/jotai/viewport.state";

// util
import { remToPx } from "@graffitoryu/ui/product/utils/style.util";

/**
 * Root/Library; viewport 크기 상태 업데이트
 * @component
 */
export default function ViewportSizeObserver() {
  const setViewportSize = useSetAtom(viewportState);

  /**
   * 화면 리사이즈에 따른 전역 상태 업데이트 콜백
   * @param {ResizeObserverCallbackPropsType}
   */
  const updateViewportSize = useCallback(
    ({ width, height }: ResizeObserverCallbackPropsType) => {
      const w = width || window.innerWidth || 0;
      const h = height || window.innerHeight || 0;
      const padding = {
        section: remToPx(80),
        column: remToPx(20),
      };

      const htmlElement = document.documentElement;
      htmlElement.style.setProperty("--ww", w ? `${w}px` : "100%");
      htmlElement.style.setProperty("--wh", h ? `${h}px` : "100%");

      setViewportSize(prev => ({
        ...prev,
        windowWidth: w,
        windowHeight: h,
        columnWidth: (w - padding.section * 2 - padding.column * 2) / 12,
      }));
    },
    [setViewportSize],
  );

  useResizeObserver({
    delay: 50,
    callback: updateViewportSize,
  });

  return null;
}
