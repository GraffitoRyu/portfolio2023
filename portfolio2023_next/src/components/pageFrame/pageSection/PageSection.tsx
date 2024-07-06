"use client";

import { useCallback } from "react";
import { useSetAtom } from "jotai";

// style components
import { PageSectionContainer } from "@/styles/styled/components/PageSection";

// state
import { scrollPageRefState } from "@/jotai/interaction/scroll";

export default function PageSection({
  page,
  code,
  children,
  className,
}: {
  page: string;
  code: string;
  children: React.ReactNode;
  className?: string;
}) {
  const setScrollRef = useSetAtom(scrollPageRefState);

  const updateScrollRef = useCallback(
    (node: HTMLElement | null) => {
      setScrollRef(prev => ({
        ...prev,
        [`section${code.toUpperCase()}`]: node,
      }));
    },
    [code, setScrollRef],
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
