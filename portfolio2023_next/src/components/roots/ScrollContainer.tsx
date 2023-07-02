"use client";

import { ReactNode, useCallback } from "react";
import { useSetRecoilState } from "recoil";

// types
import { ScrollRefStateTypes } from "@/types/state";

// style components
import { StyledScrollContainer } from "@/styles/styled/components/Page";

// style
import { scrollRefState } from "@/states/scroll";
import useResizeObserver from "@/hooks/useResizeObserver";

export default function ScrollContainer({ children }: { children: ReactNode }) {
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      setScrollRef(prev => ({
        ...prev,
        container: node,
        height: node ? node.scrollHeight : 0,
      }));
    },
    [setScrollRef]
  );
  const scrollContainerRef = useResizeObserver(setRef);

  return (
    <StyledScrollContainer ref={scrollContainerRef}>
      {children}
    </StyledScrollContainer>
  );
}
