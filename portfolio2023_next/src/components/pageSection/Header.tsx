"use client";

import React from "react";
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
  const { headerHeight } = useRecoilValue<ScreenSizeTypes>(screenSizeState);
  return (
    <SectionHeaderContainer
      className="section-header"
      $headerHeight={headerHeight}
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
