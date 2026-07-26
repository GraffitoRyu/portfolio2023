"use client";

import { useCallback } from "react";
import { useSetAtom } from "jotai";

// style components
import { StyledPageSectionContainer } from "@/styles/styled/components/PageSection";

// state
import { scrollPageSectionRefState } from "@/jotai/interaction/scroll.state";

// util
import { capitalize } from "@portfolio/utils";

/**
 * 페이지 본문 공통 요소; Section Container
 * @component
 * @param {PageSectionContainerProps} props
 * @param {string} props.page
 * @param {string} props.code
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
export default function PageSectionContainer({
  page,
  code,
  children,
  className,
}: PageSectionContainerProps) {
  const setScrollRef = useSetAtom(
    scrollPageSectionRefState(`section${capitalize(code)}`),
  );

  const updateScrollRef = useCallback(
    (node: HTMLElement | null) => {
      setScrollRef(node);
    },
    [setScrollRef],
  );

  return (
    <StyledPageSectionContainer
      className={`section-${page} section-${code} ${
        className ? className : ""
      }`}
      ref={updateScrollRef}
    >
      {children}
    </StyledPageSectionContainer>
  );
}
