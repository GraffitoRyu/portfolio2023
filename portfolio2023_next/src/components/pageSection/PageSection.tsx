"use client";

import React, { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// style components
import { PageSectionContainer } from "@/styles/styled/components/PageSection";

// state
import { screenSizeState } from "@/states/screen";

// types
import { ScreenSizeTypes, ScrollRefStateTypes } from "@/types/state";
import { scrollRefState } from "@/states/scroll";

export default function PageSection({
  code,
  children,
  className,
}: {
  code: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { windowHeight, headerHeight } =
    useRecoilValue<ScreenSizeTypes>(screenSizeState);
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLElement | null) => {
      setScrollRef(prev => ({ ...prev, [code]: node }));
    },
    [code, setScrollRef]
  );

  return (
    <PageSectionContainer
      className={className ? className : ""}
      $wh={windowHeight}
      $headerHeight={headerHeight}
      ref={updateScrollRef}
    >
      {children}
    </PageSectionContainer>
  );
}
