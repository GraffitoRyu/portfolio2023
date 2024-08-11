"use client";

import { useLayoutEffect, useRef } from "react";
import { useAtomValue } from "jotai";

// components
import StackLevelGauge from "./Level";

// style components
import {
  StyledStackLegendContainer,
  StyledStackLegendFigure,
  StyledStackLegendItem,
  StyledStackLegendLabel,
  StyledStackLegendTitle,
} from "@/styles/styled/components/ProfileStacks";

// state
import { scrollPageRefState } from "@/jotai/interaction/scroll.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

// data
import legendData from "@/data/stackLegend";

export default function StackLegend() {
  const { container: scrollContainer } =
    useAtomValue<ScrollRefStateTypes>(scrollPageRefState);
  const legendRef = useRef<HTMLDListElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const scrollTarget = legendRef.current;
    if (!scrollTarget) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      normalize: true,
      tweenArr: [
        {
          target: scrollTarget,
          options: [
            {
              opacity: 1,
              scrollTrigger: {
                trigger: scrollTarget,
                start: `top 80%`,
                end: `top 50%`,
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
    <StyledStackLegendContainer ref={legendRef}>
      <StyledStackLegendTitle>
        <span>경험 단계</span>
      </StyledStackLegendTitle>
      {legendData.map(({ label, level }: StackLegendTypes) => (
        <StyledStackLegendItem key={`stackLegend_${level}`}>
          <StyledStackLegendLabel>{label}</StyledStackLegendLabel>
          <StyledStackLegendFigure>
            <StackLevelGauge level={level} />
          </StyledStackLegendFigure>
        </StyledStackLegendItem>
      ))}
    </StyledStackLegendContainer>
  );
}
