"use client";

import { useLayoutEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

// components
import StackLevelGauge from "./StackLevel";

// style components
import {
  StackLegendContainer,
  StackLegendFigure,
  StackLegendItem,
  StackLegendLabel,
  StackLegendTitle,
} from "@/styles/styled/components/ProfileStacks";

//types
import { StackLegendTypes } from "@/types/profile";
import { ScrollRefStateTypes } from "@/types/state";

// state
import { scrollRefState } from "@/states/scroll";

// util
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

// data
import legendData from "@/data/stackLegend";

export default function StackLegend() {
  const { container: scrollContainer, stickyHeight } =
    useRecoilValue<ScrollRefStateTypes>(scrollRefState);
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
  }, [scrollContainer, stickyHeight]);

  return (
    <StackLegendContainer ref={legendRef}>
      <StackLegendTitle>
        <span>경험 단계</span>
      </StackLegendTitle>
      {legendData.map(({ label, level }: StackLegendTypes) => (
        <StackLegendItem key={`stackLegend_${level}`}>
          <StackLegendLabel>{label}</StackLegendLabel>
          <StackLegendFigure>
            <StackLevelGauge level={level} />
          </StackLegendFigure>
        </StackLegendItem>
      ))}
    </StackLegendContainer>
  );
}
