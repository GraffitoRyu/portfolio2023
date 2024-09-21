"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// style components
import { StyledPDVisualSubtitle } from "@/styles/styled/components/ProjectDetail";

// hook
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";

// state
import { pageDetailLoadState } from "@/jotai/load.state";
import { scrollDetailSectionRefState } from "@/jotai/interaction/scroll.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

export default function DetailVisualSubTitle() {
  const { data, title } = useProjectCategoryDetailData();

  const { openComplete } = useAtomValue(pageDetailLoadState);

  const scrollContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  const desc = useMemo(
    (): string => (data?.summary?.desc ? data.summary.desc : ""),
    [data],
  );

  const delayIndex = useMemo((): number => (title ? title.length : 0), [title]);

  const isHide = useMemo((): boolean => !openComplete, [openComplete]);
  const [isInit, setInit] = useState<boolean>(true);

  useEffect(() => {
    if (!openComplete) {
      setInit(true);
      return;
    }

    const DELAY = delayIndex * 200 + 1600;
    setTimeout(() => {
      setInit(false);
    }, DELAY);
  }, [delayIndex, isInit, openComplete]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const subtitle = subtitleRef.current;
    if (!subtitle) return;

    if (isInit) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [
        {
          target: subtitle,
          options: [
            {
              opacity: 0,
              scrollTrigger: {
                trigger: subtitle,
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
  }, [isInit, scrollContainer]);

  return (
    <StyledPDVisualSubtitle
      className={`${isHide ? "hide" : ""} ${isInit ? "init-hide" : ""}`}
      $index={delayIndex}
      ref={subtitleRef}
    >
      {desc}
    </StyledPDVisualSubtitle>
  );
}
