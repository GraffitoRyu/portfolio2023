"use client";

import { useCallback, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

// style components
import {
  CareerDetailContainer,
  CareerDetailItem,
  CareerDetailItemDesc,
  CareerDetailItemTitle,
  CareerDetailList,
} from "@/styles/styled/components/ProfileCareer";

// types
import { ScreenSizeTypes } from "@/types/state";
import { CareerDetailsTypes } from "@/types/profile";

// state
import { screenSizeState } from "@/states/screen";

interface CareerDetailProps extends CareerDetailsTypes {
  code: string;
}

export default function CareerDetail({
  code,
  task,
  stacks,
  projects,
}: CareerDetailProps) {
  const detailRef = useRef<HTMLDivElement | null>(null);
  const setScreenSize = useSetRecoilState<ScreenSizeTypes>(screenSizeState);

  const updateExpandHeight = useCallback(() => {
    const expandBox = detailRef.current;
    if (!expandBox) return;

    setScreenSize(prev => ({
      ...prev,
      careerExpandHeight: {
        ...prev.careerExpandHeight,
        [code]: expandBox.offsetHeight,
      },
    }));
  }, [code, setScreenSize]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    updateExpandHeight();

    window.addEventListener("resize", updateExpandHeight);
    return () => window.addEventListener("resize", updateExpandHeight);
  }, [updateExpandHeight]);

  return (
    <CareerDetailContainer>
      <CareerDetailList ref={detailRef}>
        <CareerDetailItem>
          <CareerDetailItemTitle>
            <span>담당 업무</span>
          </CareerDetailItemTitle>
          {task.map((t: string, i: number) => (
            <CareerDetailItemDesc key={`careerTask_${code}_${i}`}>
              <span>{t}</span>
            </CareerDetailItemDesc>
          ))}
        </CareerDetailItem>
        <CareerDetailItem>
          <CareerDetailItemTitle>
            <span>주요 활용기술</span>
          </CareerDetailItemTitle>
          <CareerDetailItemDesc>
            <span>{stacks.join(", ")}</span>
          </CareerDetailItemDesc>
        </CareerDetailItem>
        <CareerDetailItem>
          <CareerDetailItemTitle>
            <span>참여 프로젝트</span>
          </CareerDetailItemTitle>
          {projects.map((project: string, i: number) => (
            <CareerDetailItemDesc key={`careerProjects_${code}_${i}`}>
              <span>{project}</span>
            </CareerDetailItemDesc>
          ))}
        </CareerDetailItem>
      </CareerDetailList>
    </CareerDetailContainer>
  );
}
