"use client";

import { useCallback, useRef } from "react";
import { useSetAtom } from "jotai";
import { Footer } from "@graffitoryu/ui";

// components
import FooterUpperContainer from "./FooterUpper";
import FooterLower from "./lower/FooterLower";

// styled components
import {
  StyledFooterContainer,
  StyledFooterWrap,
} from "@graffitoryu/ui/product/styles/styled/components/PageFooter";

// state
import { scrollPageSectionRefState } from "@graffitoryu/ui/product/jotai/interaction/scroll.state";

export default function PageFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const setScrollRef = useSetAtom(scrollPageSectionRefState("footer"));

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      footerRef.current = node;
      setScrollRef(node);
    },
    [setScrollRef],
  );

  return (
    <StyledFooterContainer as={Footer} className="page-footer" ref={setRef}>
      <StyledFooterWrap>
        <FooterUpperContainer />
        <FooterLower />
      </StyledFooterWrap>
    </StyledFooterContainer>
  );
}
