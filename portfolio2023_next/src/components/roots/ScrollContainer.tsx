"use client";

import { ReactNode, useCallback } from "react";
import { useSetRecoilState } from "recoil";

// style components
import { StyledScrollContainer } from "@/styles/styled/components/Page";

// types
import { ScrollRefStateTypes } from "@/types/state";

// style
import { scrollRefState } from "@/states/scroll";

export default function ScrollContainer({ children }: { children: ReactNode }) {
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLDivElement | null) => {
      setScrollRef(prev => ({ ...prev, container: node }));
    },
    [setScrollRef],
  );

  return (
    <StyledScrollContainer ref={updateScrollRef}>
      {children}
    </StyledScrollContainer>
  );
}
