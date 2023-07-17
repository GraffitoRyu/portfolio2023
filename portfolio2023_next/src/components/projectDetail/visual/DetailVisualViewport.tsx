"use client";

import { ReactNode, useCallback } from "react";
import { useSetRecoilState } from "recoil";

// style components
import { PDVisualViewport } from "@/styles/styled/components/ProjectDetail";

// type
import { DetailScrollRefStateTypes } from "@/types/state";

// state
import { detailScrollRefState } from "@/states/scroll";

export default function DetailVisualViewport({
  children,
}: {
  children: ReactNode;
}) {
  const setScrollRef =
    useSetRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLDivElement | null) => {
      setScrollRef(prev => ({ ...prev, visual: node }));
    },
    [setScrollRef]
  );

  return <PDVisualViewport ref={updateScrollRef}>{children}</PDVisualViewport>;
}
