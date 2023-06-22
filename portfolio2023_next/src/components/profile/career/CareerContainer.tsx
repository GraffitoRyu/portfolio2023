"use client";

import { ReactNode, useCallback } from "react";
import { useSetRecoilState } from "recoil";

// style components
import { CareerContainerList } from "@/styles/styled/components/ProfileCareer";

// types
import { ScrollRefStateTypes } from "@/types/state";

// state
import { scrollRefState } from "@/states/scroll";

export default function CareerContainer({ children }: { children: ReactNode }) {
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLUListElement | null) => {
      setScrollRef(prev => ({ ...prev, career: node }));
    },
    [setScrollRef]
  );
  return (
    <CareerContainerList ref={updateScrollRef}>{children}</CareerContainerList>
  );
}
