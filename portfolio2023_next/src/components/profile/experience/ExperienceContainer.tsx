"use client";

import { ReactNode, useCallback } from "react";
import { useSetRecoilState } from "recoil";

// state
import { scrollRefState } from "@/states/scroll";

// types
import { ScrollRefStateTypes } from "@/types/state";
import { ExpContainer } from "@/styles/styled/components/ProfileExperience";

export default function ExperienceContainer({
  children,
}: {
  children: ReactNode;
}) {
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLUListElement | null) => {
      setScrollRef(prev => ({ ...prev, experience: node }));
    },
    [setScrollRef]
  );

  return <ExpContainer ref={updateScrollRef}>{children}</ExpContainer>;
}
