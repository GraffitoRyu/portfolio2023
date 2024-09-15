"use client";

import { useCallback, useRef } from "react";
import { useSetAtom } from "jotai";

// components
import PageHeader from "./pageHeader/PageHeader";

// style components
import { StyledStickyContainer } from "@/styles/styled/components/Page";

// hook
import useResizeObserver from "@/hooks/layout/useResizeObserver";

// // state
import {
  scrollPageHeightState,
  scrollPageSectionRefState,
} from "@/jotai/interaction/scroll.state";

/**
 * 페이지 공통 요소; Sticky Header를 위한 컨테이너
 * @component
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export default function PageStickyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const setBodyRef = useSetAtom(scrollPageSectionRefState("body"));
  const containerRef = useRef<HTMLElement | null>(null);

  const updateRef = useCallback(
    (node: HTMLElement | null) => {
      containerRef.current = node;
      setBodyRef(node);
    },
    [setBodyRef],
  );

  const setScrollHeight = useSetAtom(scrollPageHeightState);

  useResizeObserver({
    ref: containerRef,
    delay: 300,
    callback: ({ height }) => {
      setScrollHeight(height || 0);
    },
  });

  return (
    <StyledStickyContainer className="sticky-container" ref={updateRef}>
      <PageHeader />
      {children}
    </StyledStickyContainer>
  );
}
