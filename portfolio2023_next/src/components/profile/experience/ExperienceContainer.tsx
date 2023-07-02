"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

// state
import { scrollRefState } from "@/states/scroll";

// types
import { ScrollRefStateTypes } from "@/types/state";

// style components
import {
  ExpList,
  ExpScrollContainer,
} from "@/styles/styled/components/ProfileExperience";

// util
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

export default function ExperienceContainer({
  children,
  $length,
}: {
  children: ReactNode;
  $length: number;
}) {
  const {
    container: scrollContainer,
    experience: scrollTrigger,
    stickyHeight,
  } = useRecoilValue<ScrollRefStateTypes>(scrollRefState);
  const expListRef = useRef<HTMLUListElement | null>(null);

  const [listWidth, setListWidth] = useState<number>(0);

  const updateListWidth = useCallback(() => {
    if (expListRef.current) setListWidth(expListRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    updateListWidth();

    window.addEventListener("resize", updateListWidth);
    return () => window.removeEventListener("resize", updateListWidth);
  }, [updateListWidth]);

  useEffect(() => {
    if (!scrollContainer || !scrollTrigger) return;

    const scrollTarget = expListRef.current;
    if (!scrollTarget) return;

    const scrollRange = listWidth * (($length - 1) / $length);

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [
        {
          direction: "fromTo",
          target: scrollTarget,
          options: [
            { x: 0 },
            {
              x: -scrollRange,
              ease: "none",
              scrollTrigger: {
                trigger: scrollTrigger,
                start: `top top`, // trigger, view
                end: () => `+=${scrollRange}`,
                scrub: true,
                pin: scrollTrigger,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            },
          ],
        },
      ],
    });

    return () => ctx?.revert();
  }, [$length, listWidth, scrollContainer, scrollTrigger, stickyHeight]);

  return (
    <ExpScrollContainer>
      <ExpList ref={expListRef} $length={$length}>
        {children}
      </ExpList>
    </ExpScrollContainer>
  );
}
