"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { useAtomValue } from "jotai";

// components
import DetailMediaContents from "../common/media/Contents";

// style components
import {
  StyledPDSubVisual,
  StyledPDSubVisualSection,
} from "@/styles/styled/components/ProjectDetail";

// hook
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";

// state
import { scrollDetailSectionRefState } from "@/jotai/interaction/scroll.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

export default function DetailSubVisual() {
  const { category, data } = useProjectCategoryDetailData();

  const scrollContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const subVisualRef = useRef<HTMLElement | null>(null);

  const img = useMemo(
    () => (typeof data?.sub_visual === "undefined" ? null : data.sub_visual),
    [data?.sub_visual],
  );

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const scrollTarget = subVisualRef.current;
    const scrollTrigger = triggerRef.current;
    if (!scrollTarget || !scrollTrigger) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [
        {
          target: scrollTarget,
          options: [
            {
              scale: 0.8,
              scrollTrigger: {
                trigger: scrollTrigger,
                start: `top 70%`,
                end: `bottom 30%`,
                scrub: true,
                // markers: true,
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [scrollContainer]);

  return (
    <StyledPDSubVisualSection ref={triggerRef}>
      <StyledPDSubVisual ref={subVisualRef}>
        {img?.sec ? (
          <DetailMediaContents
            referType={img.referType}
            src={img.src}
            alt={typeof category === "string" ? category : "Detail SubVisual"}
          />
        ) : null}
      </StyledPDSubVisual>
    </StyledPDSubVisualSection>
  );
}
