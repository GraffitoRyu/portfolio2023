"use client";

import { ReactNode, useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// style components
import { StyledScrollContainer } from "@/styles/styled/components/Page";

// types
import { ScreenSizeTypes, ScrollRefStateTypes } from "@/types/state";

// style
import { scrollRefState } from "@/states/scroll";
import { screenSizeState } from "@/states/screen";

export default function ScrollContainer({ children }: { children: ReactNode }) {
  const { windowHeight } = useRecoilValue<ScreenSizeTypes>(screenSizeState);
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLDivElement | null) => {
      setScrollRef(prev => ({ ...prev, container: node }));
    },
    [setScrollRef]
  );

  return (
    <StyledScrollContainer ref={updateScrollRef} $wh={windowHeight}>
      {children}
    </StyledScrollContainer>
  );
}
