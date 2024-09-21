"use client";

import { useCallback } from "react";
import { useSetAtom } from "jotai";

// style components
import { StyledPDVisualViewport } from "@/styles/styled/components/ProjectDetail";

// state
import { scrollDetailSectionRefState } from "@/jotai/interaction/scroll.state";

export default function DetailVisualViewport({
  children,
}: {
  children: React.ReactNode;
}) {
  const setScrollRef = useSetAtom(scrollDetailSectionRefState("sectionVisual"));

  const updateScrollRef = useCallback(
    (node: HTMLDivElement | null) => {
      setScrollRef(node);
    },
    [setScrollRef],
  );

  return (
    <StyledPDVisualViewport ref={updateScrollRef}>
      {children}
    </StyledPDVisualViewport>
  );
}
