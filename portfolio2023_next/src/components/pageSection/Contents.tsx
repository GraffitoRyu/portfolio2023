"use client";

import { ReactNode, useEffect, useState } from "react";

// style components
import {
  Contents,
  ContentsMain,
  SideContents,
} from "@/styles/styled/components/PageSection";
import { useRecoilValue } from "recoil";
import { screenSizeState } from "@/states/screen";
import { ScreenSizeTypes } from "@/types/state";

export default function SectionContents({
  children,
  sideContents,
  sectionClassName,
  sideClassName,
}: {
  children: ReactNode;
  sideContents?: ReactNode;
  sectionClassName?: string;
  sideClassName?: string;
}) {
  const { headerHeight } = useRecoilValue<ScreenSizeTypes>(screenSizeState);
  const [hdHeight, setHdHeight] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setHdHeight(headerHeight);
  }, [headerHeight]);

  return (
    <Contents className={`${sectionClassName ?? ""}`}>
      <SideContents className={`${sideClassName ?? ""}`} $hdHeight={hdHeight}>
        {sideContents ?? null}
      </SideContents>
      <ContentsMain className={`${sideClassName ?? ""}`}>
        {children}
      </ContentsMain>
    </Contents>
  );
}
