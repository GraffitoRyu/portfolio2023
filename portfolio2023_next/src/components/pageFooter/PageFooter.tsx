"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const [wh, setWh] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") setWh(window.innerHeight);
  }, []);

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      footerRef.current = node;
      setScrollRef(prev => ({ ...prev, footer: node }));
    },
    [setScrollRef]
  );

  return (
    <FooterContainer className="pager-footer" ref={setRef} $wh={wh}>
      <FooterWrap>
        <FooterUpperContainer />
        <FooterLower />
      </FooterWrap>
    </FooterContainer>
  );
}
