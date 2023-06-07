"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// types
import { ScrollStateTypes, pageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";

// style components
import { StyledScrollContainer } from "@/styles/styled/components/Page";
import { scrollState } from "@/states/scroll";

export default function ScrollContainer({ children }: { children: ReactNode }) {
  const { loaded } = useRecoilValue<pageStateTypes>(pageState);
  const setScroll = useSetRecoilState<ScrollStateTypes>(scrollState);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current)
      setScroll(prev => ({ ...prev, container: scrollContainerRef }));
  }, [setScroll]);

  useEffect(() => {
    if (scrollContainerRef.current && loaded) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [loaded, scrollContainerRef]);

  return (
    <StyledScrollContainer ref={scrollContainerRef}>
      {children}
    </StyledScrollContainer>
  );
}
