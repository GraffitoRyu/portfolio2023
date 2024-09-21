"use client";

import { useRef } from "react";
import { useSetAtom } from "jotai";

// style components
import {
  StyledCareerDetailContainer,
  StyledCareerDetailItem,
  StyledCareerDetailItemDesc,
  StyledCareerDetailItemTitle,
  StyledCareerDetailList,
} from "@/styles/styled/components/ProfileCareer";

// state
import { careerExpandHeightState } from "@/jotai/viewport.state";

// hooks
import useResizeObserver from "@/hooks/layout/useResizeObserver";

export default function CareerDetail({
  code,
  task,
  stacks,
  projects,
}: CareerDetailProps) {
  const detailRef = useRef<HTMLDivElement | null>(null);
  const setExpandHeightSize = useSetAtom(careerExpandHeightState(code));

  useResizeObserver({
    ref: detailRef,
    delay: 100,
    callback: ({ height }) => {
      setExpandHeightSize(height || 0);
    },
  });

  return (
    <StyledCareerDetailContainer>
      <StyledCareerDetailList ref={detailRef}>
        <StyledCareerDetailItem>
          <StyledCareerDetailItemTitle>
            <span>담당 업무</span>
          </StyledCareerDetailItemTitle>
          {task.map((t: string, i: number) => (
            <StyledCareerDetailItemDesc key={`careerTask_${code}_${i}`}>
              <span>{t}</span>
            </StyledCareerDetailItemDesc>
          ))}
        </StyledCareerDetailItem>
        <StyledCareerDetailItem>
          <StyledCareerDetailItemTitle>
            <span>주요 활용기술</span>
          </StyledCareerDetailItemTitle>
          <StyledCareerDetailItemDesc>
            <span>{stacks.join(", ")}</span>
          </StyledCareerDetailItemDesc>
        </StyledCareerDetailItem>
        <StyledCareerDetailItem>
          <StyledCareerDetailItemTitle>
            <span>참여 프로젝트</span>
          </StyledCareerDetailItemTitle>
          {projects.map((project: string, i: number) => (
            <StyledCareerDetailItemDesc key={`careerProjects_${code}_${i}`}>
              <span>{project}</span>
            </StyledCareerDetailItemDesc>
          ))}
        </StyledCareerDetailItem>
      </StyledCareerDetailList>
    </StyledCareerDetailContainer>
  );
}
