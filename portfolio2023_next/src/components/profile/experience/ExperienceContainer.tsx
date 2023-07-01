"use client";

import { ReactNode, useCallback } from "react";
import { useSetRecoilState } from "recoil";

// state
import { scrollRefState } from "@/states/scroll";

// types
import { ScrollRefStateTypes } from "@/types/state";
import {
  ExpList,
  ExpScrollContainer,
} from "@/styles/styled/components/ProfileExperience";

export default function ExperienceContainer({
  children,
  $length,
}: {
  children: ReactNode;
  $length: number;
}) {
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLDivElement | null) => {
      setScrollRef(prev => ({ ...prev, experience: node }));
    },
    [setScrollRef]
  );

  return (
    <ExpScrollContainer ref={updateScrollRef}>
      <ExpList $length={$length}>{children}</ExpList>
    </ExpScrollContainer>
  );
}
