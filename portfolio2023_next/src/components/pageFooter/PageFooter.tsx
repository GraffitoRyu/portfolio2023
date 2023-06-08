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
import { scrollState } from "@/states/scroll";
import { ScrollStateTypes } from "@/types/state";

export default function PageFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const setScroll = useSetRecoilState<ScrollStateTypes>(scrollState);

  useEffect(() => {
    if (footerRef.current) setScroll(prev => ({ ...prev, footer: footerRef }));
  }, [setScroll]);

  return (
    <FooterContainer className="pager-footer" ref={footerRef}>
      <FooterWrap>
        <FooterUpperContainer />
        <FooterLowerContainer />
      </FooterWrap>
    </FooterContainer>
  );
}
