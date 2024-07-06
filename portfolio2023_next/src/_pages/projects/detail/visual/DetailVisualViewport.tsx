"use client";

import { useCallback } from "react";

// style components
import { PDVisualViewport } from "@/styles/styled/components/ProjectDetail";

// state
import { detailScrollRefState } from "@/states/scroll";

export default function DetailVisualViewport({
  children,
}: {
  children: React.ReactNode;
}) {
  const setScrollRef =
    useSetRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLDivElement | null) => {
      setScrollRef(prev => ({ ...prev, visual: node }));
    },
    [setScrollRef],
  );

  return <PDVisualViewport ref={updateScrollRef}>{children}</PDVisualViewport>;
}
