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
  const { windowHeight } = useRecoilValue<ScreenSizeTypes>(screenSizeState);
  const [wh, setWh] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setWh(windowHeight);
  }, [windowHeight]);

  return (
    <Contents className={`${sectionClassName ?? ""}`}>
      <SideContents className={`${sideClassName ?? ""}`} $wh={wh}>
        {sideContents ?? null}
      </SideContents>
      <ContentsMain className={`${sideClassName ?? ""}`}>
        {children}
      </ContentsMain>
    </Contents>
  );
}
