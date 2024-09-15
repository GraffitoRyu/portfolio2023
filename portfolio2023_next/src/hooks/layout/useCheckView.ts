"use client";

import { viewportState } from "@/jotai/viewport.state";
import { useAtomValue } from "jotai";
import { useMemo } from "react";

/**
 * 뷰포트 사이즈에 따른 레이아웃 처리를 위한 hook
 * @hook
 */
export default function useCheckView(standard: number) {
  const { windowWidth } = useAtomValue(viewportState);

  const isCustomMobileView = useMemo(
    (): boolean => windowWidth < standard,
    [standard, windowWidth],
  );

  return { isCustomMobileView };
}
