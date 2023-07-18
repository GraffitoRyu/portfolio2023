"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

// components
import PageHeader from "../pageHeader/PageHeader";

// style components
import { StickyContainer } from "@/styles/styled/components/Page";

// state
import { scrollRefState } from "@/states/scroll";

// type
import { ScrollRefStateTypes } from "@/types/state";

// util
import debounce from "@/util/debounceEvent";

export default function PageStickyContainer({
  children,
}: {
  children: ReactNode;
}) {
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);
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
      }, 400)
    );

    ob.observe(container);

    return () => {
      ob.disconnect();
    };
  }, [setScrollRef]);

  return (
    <StickyContainer className="sticky-container" ref={containerRef}>
      <PageHeader />
      {children}
    </StickyContainer>
  );
}
