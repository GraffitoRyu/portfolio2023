"use client";

import { useCallback } from "react";
import { useSetAtom } from "jotai";

// style components
import {
  StyledSectionContents,
  StyledSectionContentsMain,
  StyledSectionSideContents,
} from "@/styles/styled/components/PageSection";

// state
import { scrollPageRefState } from "@/jotai/interaction/scroll.state";

// util
import { capitalize } from "@/utils/data/convert.util";

export default function SectionContents({
  code,
  children,
  sideContents,
  sectionClassName,
  sideClassName,
}: {
  code?: string;
  children: React.ReactNode;
  sideContents?: React.ReactNode;
  sectionClassName?: string;
  sideClassName?: string;
}) {
  const setScrollRef = useSetAtom(scrollPageRefState);

  const updateScrollRef = useCallback(
    (node: HTMLElement | null) => {
      if (!code) return;
      setScrollRef(prev => ({ ...prev, [`section${capitalize(code)}`]: node }));
    },
    [code, setScrollRef],
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
