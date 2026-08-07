"use client";

import { useCallback, useMemo, useRef } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  StyledPDExpContainer,
  StyledPDExpDesc,
  StyledPDExpList,
  StyledPDExpSection,
  StyledPDExpTitle,
} from "@graffitoryu/ui/product/styles/styled/components/ProjectDetail";

// hook
import useProjectCategoryDetailData from "@graffitoryu/ui/product/hooks/data/useProjectCategoryDetailData";

// state
import { scrollDetailSectionRefState } from "@graffitoryu/ui/product/jotai/interaction/scroll.state";

// util
import useGSAPAnimation from "@graffitoryu/ui/product/hooks/interaction/useGSAPAnimation";

export default function DetailExperience() {
  const detailContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLLIElement[]>([]);

  const { category, data, openComplete } = useProjectCategoryDetailData();

  const experienceData = useMemo(
    () =>
      typeof data?.experience?.desc === "undefined" ||
      !Array.isArray(data.experience.desc)
        ? []
        : data.experience.desc,
    [data?.experience?.desc],
  );

  const titleOption = useCallback(
    (): UseGSAPAnimationHookOptions => ({
      target: titleRef.current,
      direction: "fromTo",
      animation: [
        { opacity: 0, xPercent: 20 },
        {
          opacity: 1,
          xPercent: 0,
          // duration: 1.6,
          // ease: Expo.easeOut,
          scrollTrigger: {
            trigger: titleRef.current,
            start: `top 90%`,
            end: `bottom 50%`,
            scrub: true,
          },
        },
      ],
    }),
    [],
  );

  const descOption = useCallback(
    (): UseGSAPAnimationHookOptions[] =>
      descRef.current.map(target => ({
        target,
        animation: [
          {
            opacity: 1,
            scrollTrigger: {
              trigger: target,
              start: "top 80%",
              end: "bottom 50%",
              scrub: true,
            },
          },
        ],
      })),
    [],
  );

  useGSAPAnimation(
    {
      key: "projects/detail/experience",
      container: detailContainer,
      disabled: !openComplete,
      elements: [titleRef.current, ...descRef.current],
      options: [titleOption(), ...descOption()],
    },
    [openComplete, titleOption, descOption],
  );

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
