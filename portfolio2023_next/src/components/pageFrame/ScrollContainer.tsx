"use client";

import { useCallback } from "react";
import { useSetAtom } from "jotai";

// style components
import { StyledScrollContainer } from "@/styles/styled/components/Page";

// state
import { scrollPageSectionRefState } from "@/jotai/interaction/scroll.state";

/**
 * 스크롤 컨테이너
 * @component
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export default function ScrollContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const setScrollRef = useSetAtom(scrollPageSectionRefState("container"));

  const updateScrollRef = useCallback(
    (node: HTMLDivElement | null) => {
      setScrollRef(node);
    },
    [setScrollRef],
  );

  return (
    <StyledScrollContainer ref={updateScrollRef}>
      {children}
    </StyledScrollContainer>
  );
}
