"use client";

import { useCallback, useRef } from "react";
import { useSetAtom } from "jotai";

// components
import FooterUpperContainer from "./FooterUpper";
import FooterLower from "./lower/FooterLower";

// styled components
import {
  StyledFooterContainer,
  StyledFooterWrap,
} from "@/styles/styled/components/PageFooter";

// state
import { scrollPageRefState } from "@/jotai/interaction/scroll.state";

export default function PageFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const setScrollRef = useSetAtom(scrollPageRefState);

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      footerRef.current = node;
      setScrollRef(prev => ({ ...prev, footer: node }));
    },
    [setScrollRef],
  );

  return (
    <StyledFooterContainer className="page-footer" ref={setRef}>
      <StyledFooterWrap>
        <FooterUpperContainer />
        <FooterLower />
      </StyledFooterWrap>
    </StyledFooterContainer>
  );
}
