"use client";

import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  SectionHeaderContainer,
  HeaderDesc,
  HeaderTitle,
} from "@/styles/styled/components/PageSection";

// util components
import ParseDescNewLine from "@/components/util/ParseDescNewLine";

// type
import { ScreenSizeTypes } from "@/types/state";
import { SectionHeaderTypes } from "@/types/profile";

// state
import { screenSizeState } from "@/states/screen";

export default function SectionHeader({
  empty,
  title,
  desc,
}: SectionHeaderTypes) {
  const { windowHeight, headerHeight } =
    useRecoilValue<ScreenSizeTypes>(screenSizeState);
  const [hdHeight, setHdHeight] = useState<number>(0);
  const [wh, setWh] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setHdHeight(headerHeight);
  }, [headerHeight]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setWh(windowHeight);
  }, [windowHeight]);

  return (
    <SectionHeaderContainer
      className="section-header"
      $headerHeight={hdHeight}
      $wh={wh}
    >
      {empty ? (
        ""
      ) : (
        <>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderDesc>
            <ParseDescNewLine data={desc} />
          </HeaderDesc>
        </>
      )}
    </SectionHeaderContainer>
  );
}
