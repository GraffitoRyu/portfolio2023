"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

// style components
import { StyledScrollContainer } from "@/styles/styled/components/Page";

// types
import { ScrollRefStateTypes } from "@/types/state";

// style
import { scrollRefState } from "@/states/scroll";

export default function ScrollContainer({ children }: { children: ReactNode }) {
  const [{ header }, setScrollRef] =
    useRecoilState<ScrollRefStateTypes>(scrollRefState);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      scrollContainerRef.current = node;
      setScrollRef(prev => ({ ...prev, container: node }));
    },
    [setScrollRef]
  );

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const smoothScroller = Scrollbar.init(scrollContainer, {
        delegateTo: scrollContainer,
      });

      // 초기화
      smoothScroller.setPosition(0, 0);

      // smooth-scrollbar & gsap scrollTrigger 연결
      ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(v) {
          if (arguments.length && typeof v === "number") {
            smoothScroller.scrollTop = v;
          }
          return smoothScroller.scrollTop;
        },
      });

      if (header)
        smoothScroller.addListener(status => {
          gsap.set(header, { y: status.offset.y });
        });
      smoothScroller.addListener(ScrollTrigger.update);
    }); // end ctx

    return () => ctx.revert();
  }, [header]);

  return (
    <StyledScrollContainer className="scroll-container" ref={setRef}>
      {children}
    </StyledScrollContainer>
  );
}
