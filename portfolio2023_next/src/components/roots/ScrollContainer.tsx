"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

// types
import { ScrollRefStateTypes } from "@/types/state";

// style components
import { StyledScrollContainer } from "@/styles/styled/components/Page";

// style
import { scrollRefState } from "@/states/scroll";

export default function ScrollContainer({ children }: { children: ReactNode }) {
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      setScrollRef(prev => ({ ...prev, container: scrollContainerRef }));
    }
  }, [scrollContainerRef, setScrollRef]);

  return (
    <StyledScrollContainer ref={scrollContainerRef}>
      {children}
    </StyledScrollContainer>
  );
}
