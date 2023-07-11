"use client";

import { ReactNode } from "react";
import { useRecoilValue } from "recoil";

// style components
import { PDVisualViewport } from "@/styles/styled/components/ProjectDetail";

// type
import { ScreenSizeTypes } from "@/types/state";

// state
import { screenSizeState } from "@/states/screen";

export default function DetailVisualViewport({
  children,
}: {
  children: ReactNode;
}) {
  const { windowHeight, detailHeaderHeight } =
    useRecoilValue<ScreenSizeTypes>(screenSizeState);
  return (
    <PDVisualViewport $wh={windowHeight} $hdHeight={detailHeaderHeight}>
      {children}
    </PDVisualViewport>
  );
}
