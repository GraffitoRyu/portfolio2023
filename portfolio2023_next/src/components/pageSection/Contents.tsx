"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// style components
import {
  Contents,
  ContentsMain,
  SideContents,
} from "@/styles/styled/components/PageSection";

// state
import { scrollRefState } from "@/states/scroll";
import { screenSizeState } from "@/states/screen";

// type
import { ScreenSizeTypes, ScrollRefStateTypes } from "@/types/state";

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
  const { headerHeight } = useRecoilValue<ScreenSizeTypes>(screenSizeState);
  const [hdHeight, setHdHeight] = useState<number>(0);

  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLElement | null) => {
      if (!code) return;
      setScrollRef(prev => ({ ...prev, [code]: node }));
    },
    [code, setScrollRef]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    setHdHeight(headerHeight);
  }, [headerHeight]);

  return (
    <Contents className={`${sectionClassName ?? ""}`} ref={updateScrollRef}>
      <SideContents className={`${sideClassName ?? ""}`} $hdHeight={hdHeight}>
        {sideContents ?? null}
      </SideContents>
      <ContentsMain className={`${sideClassName ?? ""}`}>
        {children}
      </ContentsMain>
    </Contents>
  );
}
