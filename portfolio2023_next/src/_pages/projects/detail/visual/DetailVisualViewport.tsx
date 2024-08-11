"use client";

import { useCallback } from "react";
import { useSetAtom } from "jotai";

// style components
import { StyledPDVisualViewport } from "@/styles/styled/components/ProjectDetail";

// state
import { scrollDetailRefState } from "@/jotai/interaction/scroll.state";

export default function DetailVisualViewport({
  children,
}: {
  children: React.ReactNode;
}) {
  const setScrollRef = useSetAtom(scrollDetailRefState);

  const updateScrollRef = useCallback(
    (node: HTMLDivElement | null) => {
      setScrollRef(prev => ({ ...prev, visual: node }));
    },
    [setScrollRef],
  );

  return (
    <StyledPDVisualViewport ref={updateScrollRef}>
      {children}
    </StyledPDVisualViewport>
  );
}
