"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

// state
import { pageState, pageStateTypes } from "@/states/page";

// style components
import { StyledScrollContainer } from "@/styles/styled/components/Page";

export default function ScrollContainer({ children }: { children: ReactNode }) {
  const { loaded } = useRecoilValue<pageStateTypes>(pageState);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
