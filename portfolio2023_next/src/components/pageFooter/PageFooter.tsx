"use client";

import { useCallback, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// components
import FooterUpperContainer from "./FooterUpper";
import FooterLower from "./lower/FooterLower";

// styled components
import {
  FooterContainer,
  FooterWrap,
} from "@/styles/styled/components/PageFooter";

// types
import { ScreenSizeTypes, ScrollRefStateTypes } from "@/types/state";

// state
import { scrollRefState } from "@/states/scroll";
import { screenSizeState } from "@/states/screen";

export default function PageFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);
  const { windowHeight } = useRecoilValue<ScreenSizeTypes>(screenSizeState);

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      footerRef.current = node;
      setScrollRef(prev => ({ ...prev, footer: node }));
    },
    [setScrollRef]
  );

  return (
    <FooterContainer className="pager-footer" ref={setRef} $wh={windowHeight}>
      <FooterWrap>
        <FooterUpperContainer />
        <FooterLower />
      </FooterWrap>
    </FooterContainer>
  );
}
