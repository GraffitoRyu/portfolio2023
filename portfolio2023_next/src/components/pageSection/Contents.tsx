"use client";

import { ReactNode, useCallback } from "react";
import { useSetRecoilState } from "recoil";

// style components
import {
  Contents,
  ContentsMain,
  SideContents,
} from "@/styles/styled/components/PageSection";

// state
import { scrollRefState } from "@/states/scroll";

// type
import { ScrollRefStateTypes } from "@/types/state";

export default function SectionContents({
  code,
  children,
  sideContents,
  sectionClassName,
  sideClassName,
}: {
  code?: string;
  children: ReactNode;
  sideContents?: ReactNode;
  sectionClassName?: string;
  sideClassName?: string;
}) {
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLElement | null) => {
      if (!code) return;
      setScrollRef(prev => ({ ...prev, [code]: node }));
    },
    [code, setScrollRef]
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
