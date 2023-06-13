"use client";

import { useCallback, useRef } from "react";

// components
import FooterUpperContainer from "./FooterUpper";
import FooterLowerContainer from "./FooterLower";

// styled components
import {
  FooterContainer,
  FooterWrap,
} from "@/styles/styled/components/PageFooter";
import { useSetRecoilState } from "recoil";
import { scrollRefState } from "@/states/scroll";
import { ScrollRefStateTypes } from "@/types/state";

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
        <FooterLowerContainer />
      </FooterWrap>
    </FooterContainer>
  );
}
