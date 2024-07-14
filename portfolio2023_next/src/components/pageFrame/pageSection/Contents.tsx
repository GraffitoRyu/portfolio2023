"use client";

import { useCallback } from "react";
import { useSetAtom } from "jotai";

// style components
import {
  Contents,
  ContentsMain,
  SideContents,
} from "@/styles/styled/components/PageSection";

// state
import { scrollPageRefState } from "@/jotai/interaction/scroll.state";

// util
import { capitalize } from "@/util/unit.util";

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
    <Contents className={`${sectionClassName ?? ""}`} ref={updateScrollRef}>
      <SideContents className={`${sideClassName ?? ""}`}>
        {sideContents ?? null}
      </SideContents>
      <ContentsMain className={`${sideClassName ?? ""}`}>
        {children}
      </ContentsMain>
    </Contents>
  );
}
