"use client";

import { useCallback, useRef } from "react";
import { useSetRecoilState } from "recoil";

// components
import FooterUpperContainer from "./FooterUpper";
import FooterLower from "./lower/FooterLower";

// styled components
import {
  FooterContainer,
  FooterWrap,
} from "@/styles/styled/components/PageFooter";

// types
import { ScrollRefStateTypes } from "@/types/state";

// state
import { scrollRefState } from "@/states/scroll";

export default function PageFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  const setRef = useCallback(
    (node: HTMLElement) => {
      footerRef.current = node;
      setScrollRef(prev => ({ ...prev, footer: node }));
    },
    [setScrollRef, footerRef]
  );

  return (
    <FooterContainer className="pager-footer" ref={setRef}>
      <FooterWrap>
        <FooterUpperContainer />
        <FooterLower />
      </FooterWrap>
    </FooterContainer>
  );
}
