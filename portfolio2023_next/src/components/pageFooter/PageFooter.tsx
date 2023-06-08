"use client";

import { useEffect, useRef } from "react";

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
  const footerRef = useRef<HTMLElement>(null);
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  useEffect(() => {
    if (footerRef.current)
      setScrollRef(prev => ({ ...prev, footer: footerRef }));
  }, [setScrollRef]);

  return (
    <FooterContainer className="pager-footer" ref={footerRef}>
      <FooterWrap>
        <FooterUpperContainer />
        <FooterLowerContainer />
      </FooterWrap>
    </FooterContainer>
  );
}
