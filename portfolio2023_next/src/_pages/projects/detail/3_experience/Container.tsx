"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  StyledPDExpContainer,
  StyledPDExpDesc,
  StyledPDExpList,
  StyledPDExpSection,
  StyledPDExpTitle,
} from "@/styles/styled/components/ProjectDetail";

// hook
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";

// state
import { scrollDetailSectionRefState } from "@/jotai/interaction/scroll.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

export default function DetailExperience() {
  const scrollContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLLIElement[]>([]);

  const { category, data } = useProjectCategoryDetailData();

  const experienceData = useMemo(
    (): string[] =>
      typeof data?.experience?.desc === "undefined" ||
      !Array.isArray(data.experience.desc)
        ? []
        : data.experience.desc,
    [data?.experience?.desc],
  );

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const scrollTitle = titleRef.current;
    if (!scrollTitle) return;

    const tweenOptions = [
      {
        target: scrollTitle,
        direction: "fromTo",
        options: [
          { opacity: 0, xPercent: 20 },
          {
            opacity: 1,
            xPercent: 0,
            // duration: 1.6,
            // ease: Expo.easeOut,
            scrollTrigger: {
              trigger: scrollTitle,
              start: `top 90%`,
              end: `bottom 50%`,
              scrub: true,
            },
          },
        ],
      },
    ];

    const scrollDesc = descRef.current;
    const descOptions: CustomTweenType[] = [];
    if (scrollDesc?.length > 0) {
      scrollDesc.forEach(descRef =>
        descOptions.push({
          target: descRef,
          options: [
            {
              opacity: 1,
              scrollTrigger: {
                trigger: descRef,
                start: `top 80%`,
                end: `bottom 50%`,
                scrub: true,
              },
            },
          ],
        }),
      );
    }

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [...tweenOptions, ...descOptions],
    });

    return () => ctx.revert();
  }, [experienceData, scrollContainer]);

  return (
    <StyledPDExpSection className="detail-section-exp">
      <StyledPDExpContainer>
        <StyledPDExpTitle ref={titleRef}>
          <span>Experience</span>
        </StyledPDExpTitle>
        <StyledPDExpList>
          {experienceData.map((exp: string, i: number) => (
            <StyledPDExpDesc
              key={`detailExp_${category}_${i}`}
              ref={(node: HTMLLIElement) => {
                descRef.current[i] = node;
              }}
            >
              <span>{exp}</span>
            </StyledPDExpDesc>
          ))}
        </StyledPDExpList>
      </StyledPDExpContainer>
    </StyledPDExpSection>
  );
}
