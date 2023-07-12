"use client";

import { ReactNode, useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// style components
import { PDVisualViewport } from "@/styles/styled/components/ProjectDetail";

// type
import { DetailScrollRefStateTypes, ScreenSizeTypes } from "@/types/state";

// state
import { screenSizeState } from "@/states/screen";
import { detailScrollRefState } from "@/states/scroll";

export default function DetailVisualViewport({
  children,
}: {
  children: ReactNode;
}) {
  const { windowHeight, detailHeaderHeight } =
    useRecoilValue<ScreenSizeTypes>(screenSizeState);
  const setScrollRef =
    useSetRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLDivElement | null) => {
      setScrollRef(prev => ({ ...prev, visual: node }));
    },
    [setScrollRef]
  );

  return (
    <PDVisualViewport
      $wh={windowHeight}
      $hdHeight={detailHeaderHeight}
      ref={updateScrollRef}
    >
      {children}
    </PDVisualViewport>
  );
}