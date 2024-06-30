"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useSetAtom } from "jotai";

// components
import PageHeader from "../pageFrame/pageHeader/PageHeader";

// style components
import { StyledStickyContainer } from "@/styles/styled/components/Page";

// state
import { scrollRefState } from "@/states/scroll";

// util
import debounce from "@/util/interactions/debounceEvent";

export default function PageStickyContainer({
  children,
}: {
  children: ReactNode;
}) {
  const setScrollRef = useSetAtom(scrollRefState);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ob = new ResizeObserver(
      debounce((entries: ResizeObserverEntry[]) => {
        const ctx = entries?.[0]?.contentRect;

        setScrollRef(prev => ({
          ...prev,
          stickyHeight: ctx ? Math.ceil(ctx.height) : 0,
        }));
      }, 400),
    );

    ob.observe(container);

    return () => {
      ob.disconnect();
    };
  }, [setScrollRef]);

  return (
    <StyledStickyContainer className="sticky-container" ref={containerRef}>
      <PageHeader />
      {children}
    </StyledStickyContainer>
  );
}
