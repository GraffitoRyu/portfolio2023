"use client";

import { ReactNode, useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// style components
import { PageSectionContainer } from "@/styles/styled/components/PageSection";

// state
import { scrollRefState } from "@/states/scroll";
import { screenSizeState } from "@/states/screen";

// types
import { ScreenSizeTypes, ScrollRefStateTypes } from "@/types/state";

export default function PageSection({
  page,
  code,
  children,
  className,
}: {
  page: string;
  code: string;
  children: ReactNode;
  className?: string;
}) {
  const { windowHeight, headerHeight } =
    useRecoilValue<ScreenSizeTypes>(screenSizeState);
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLElement | null) => {
      if (code === "experience")
        setScrollRef(prev => ({ ...prev, [`${code}Section`]: node }));
    },
    [code, setScrollRef]
  );

  return (
    <PageSectionContainer
      className={`section-${page} section-${code} ${
        className ? className : ""
      }`}
      $wh={windowHeight}
      $hdHeight={headerHeight}
      ref={updateScrollRef}
    >
      {children}
    </PageSectionContainer>
  );
}
