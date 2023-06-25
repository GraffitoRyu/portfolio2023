"use client";

import React from "react";
import { useRecoilValue } from "recoil";

// style components
import { PageSectionContainer } from "@/styles/styled/components/PageSection";

// state
import { screenSizeState } from "@/states/screen";

// types
import { ScreenSizeTypes } from "@/types/state";

export default function PageSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { windowHeight, headerHeight } =
    useRecoilValue<ScreenSizeTypes>(screenSizeState);

  return (
    <PageSectionContainer
      className={className ? className : ""}
      $wh={windowHeight}
      $headerHeight={headerHeight}
    >
      {children}
    </PageSectionContainer>
  );
}
