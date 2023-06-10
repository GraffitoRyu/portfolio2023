"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// types
import { ScrollRefStateTypes, pageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";

// style components
import { StyledScrollContainer } from "@/styles/styled/components/Page";
import { scrollRefState } from "@/states/scroll";

export default function ScrollContainer({ children }: { children: ReactNode }) {
  const { loaded } = useRecoilValue<pageStateTypes>(pageState);
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      setScrollRef(prev => ({ ...prev, container: scrollContainerRef }));
    }
  }, [setScrollRef]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer && loaded) {
      scrollContainer.scrollTo(0, 0);
    }
  }, [loaded, scrollContainerRef]);

  return (
    <StyledScrollContainer ref={scrollContainerRef}>
      {children}
    </StyledScrollContainer>
  );
}
