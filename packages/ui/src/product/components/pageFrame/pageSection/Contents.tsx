"use client";

import { useCallback } from "react";
import { useSetAtom } from "jotai";

// style components
import {
  StyledSectionContents,
  StyledSectionContentsMain,
  StyledSectionSideContents,
} from "@graffitoryu/ui/product/styles/styled/components/PageSection";

// state
import { scrollPageSectionRefState } from "@graffitoryu/ui/product/jotai/interaction/scroll.state";

/**
 * 페이지 본문 공통 요소; Section Contents
 * @component
 * @param {PageSectionContainerProps} props
 * @param {string} props.page
 * @param {string} props.code
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
export default function PageSectionContents({
  code,
  children,
  sideContents,
  sectionClassName,
  sideClassName,
}: PageSectionContentsProps) {
  const setScrollRef = useSetAtom(scrollPageSectionRefState(code));

  const updateScrollRef = useCallback(
    (node: HTMLElement | null) => {
      setScrollRef(node);
    },
    [setScrollRef],
  );

  return (
    <StyledSectionContents
      className={`${sectionClassName ?? ""}`}
      ref={updateScrollRef}
    >
      <StyledSectionSideContents className={`${sideClassName ?? ""}`}>
        {sideContents ?? null}
      </StyledSectionSideContents>
      <StyledSectionContentsMain className={`${sideClassName ?? ""}`}>
        {children}
      </StyledSectionContentsMain>
    </StyledSectionContents>
  );
}
