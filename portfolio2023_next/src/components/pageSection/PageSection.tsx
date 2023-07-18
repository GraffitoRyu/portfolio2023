"use client";

import { ReactNode, useCallback } from "react";
import { useSetRecoilState } from "recoil";

// style components
import { PageSectionContainer } from "@/styles/styled/components/PageSection";

// state
import { scrollRefState } from "@/states/scroll";

// types
import { ScrollRefStateTypes } from "@/types/state";

export default function PageSection({
  page,
  code,
  children,
  className,
}: {
  page: string;
  code: string;
  children: ReactNode;
  className?: string;
}) {
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLElement | null) => {
      setScrollRef(prev => ({ ...prev, [`${code}Section`]: node }));
    },
    [code, setScrollRef]
  );

  return (
    <PageSectionContainer
      className={`section-${page} section-${code} ${
        className ? className : ""
      }`}
      ref={updateScrollRef}
    >
      {children}
    </PageSectionContainer>
  );
}
