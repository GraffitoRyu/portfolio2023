"use client";

import { useCallback, useRef } from "react";

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

// hooks
import useGSAPAnimation from "@/hooks/interaction/useGSAPAnimation";

// data
import legendData from "@/data/stackLegend";

export default function StackLegend() {
  const legendRef = useRef<HTMLDListElement | null>(null);

  const fadeInOption = useCallback(
    (): UseGSAPAnimationHookOptions => ({
      target: legendRef.current,
      animation: [
        {
          opacity: 1,
          scrollTrigger: {
            trigger: legendRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        },
      ],
    }),
    [],
  );

  useGSAPAnimation(
    {
      key: "profile/techStacks/legend",
      elements: [legendRef.current],
      options: [fadeInOption()],
    },
    [],
  );

  return (
    <StyledStackLegendContainer ref={legendRef}>
      <StyledStackLegendTitle>
        <span>경험 단계</span>
      </StyledStackLegendTitle>
      {legendData.map(({ label, level }: StackLegendTypes) => (
        <StyledStackLegendItem key={`profile/techStack/legend/${label}`}>
          <StyledStackLegendLabel>{label}</StyledStackLegendLabel>
          <StyledStackLegendFigure>
            <StackLevelGauge level={level} />
          </StyledStackLegendFigure>
        </StyledStackLegendItem>
      ))}
    </StyledStackLegendContainer>
  );
}
