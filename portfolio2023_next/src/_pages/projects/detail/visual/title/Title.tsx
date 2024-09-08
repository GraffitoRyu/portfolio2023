"use client";

import { useCallback, useLayoutEffect, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";

// style components
import {
  StyledPDVisualTitle,
  StyledPDVisualTitleLine,
} from "@/styles/styled/components/ProjectDetail";

// state
import { pageDetailLoadState } from "@/jotai/load.state";
import { scrollDetailSectionRefState } from "@/jotai/interaction/scroll.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";

export default function DetailVisualTitle() {
  const { title = [""] } = useProjectCategoryDetailData();

  const scrollContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );
  const setVisualTitleRef = useSetAtom(
    scrollDetailSectionRefState("visualTitle"),
  );

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const updateScrollRef = useCallback(
    (node: HTMLHeadingElement | null) => {
      titleRef.current = node;
      setVisualTitleRef(node);
    },
    [setVisualTitleRef],
  );

  const { openComplete } =
    useAtomValue<PageDetailLoadStateTypes>(pageDetailLoadState);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const scrollTarget = titleRef.current;
    if (!scrollTarget) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [
        {
          target: scrollTarget,
          options: [
            {
              opacity: 0,
              scrollTrigger: {
                trigger: scrollTarget,
                start: `top 30%`,
                end: `top top`,
                scrub: true,
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [scrollContainer]);

  return (
    <StyledPDVisualTitle
      className={openComplete ? "" : "hide"}
      ref={updateScrollRef}
    >
      {title.map((t: string, i: number) => (
        <StyledPDVisualTitleLine key={`detailTitle_${t}_${i}`} $index={i}>
          {t}
        </StyledPDVisualTitleLine>
      ))}
    </StyledPDVisualTitle>
  );
}
