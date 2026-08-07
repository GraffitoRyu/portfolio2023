"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// components
import ProfileExperienceItem from "./Item";

// state
import { scrollPageSectionRefState } from "@graffitoryu/ui/product/jotai/interaction/scroll.state";

// style components
import {
  StyledExpList,
  StyledExpScrollContainer,
} from "@graffitoryu/ui/product/styles/styled/components/ProfileExperience";

// hooks
import useCheckView from "@graffitoryu/ui/product/hooks/layout/useCheckView";
import useGSAPAnimation from "@graffitoryu/ui/product/hooks/interaction/useGSAPAnimation";

// fetch
import { useQueryProfileExperienceData } from "@graffitoryu/ui/product/lib/query";

/**
 * 프로필 > 경험; 리스트 컨텐츠 컴포넌트
 * @component
 * @route /
 */
export default function ProfileExperienceContents() {
  // 경험 데이터 요청
  const { data: expData = [] } = useQueryProfileExperienceData();

  // 항목 개수
  const expLength = useMemo(() => expData.length, [expData]);

  // 스크롤 참조 ref 상태
  const sectionExperience = useAtomValue(
    scrollPageSectionRefState("sectionExperience"),
  );
  // 경험 리스트 ref
  const expListRef = useRef<HTMLUListElement | null>(null);

  // 경험 섹션의 모바일 모드 전환을 위한 상태관리
  const { isCustomView } = useCheckView(640);

  // 현재 활성화된 항목 인덱스
  const [onIndex, setOnIndex] = useState<number>(0);

  // 진행 정도에 따른 활성화 인덱스 추출
  const getActiveIndex = useCallback(
    (progress: number): number => {
      const ratio = progress * 100;
      const unit = 100 / expLength;

      if (ratio < unit) return 0;
      else if (unit <= ratio && ratio < unit * 2) return 1;
      else if (unit * 2 <= ratio && ratio < unit * 3) return 2;
      else if (unit * 3 <= ratio && ratio < unit * 4) return 3;
      else if (unit * 4 <= ratio && ratio < unit * 5) return 4;
      return 4;
    },
    [expLength],
  );

  // 스크롤 동작에 따른 활성화 인덱스 업데이트
  const onChangeActiveIndex = useCallback(
    ({ progress }: { progress: number }) => {
      setOnIndex(getActiveIndex(progress));
    },
    [getActiveIndex],
  );

  const scrollRange = useMemo((): number => {
    if (expListRef.current === null || expLength <= 0) return 0;
    return (
      Math.floor(
        expListRef.current.offsetWidth * ((expLength - 1) / expLength) * 10000,
      ) / 10000
    );
  }, [expLength]);

  const horizontalScrollEnd = useCallback(
    () => `+=${scrollRange * (isCustomView ? 2 : 1)}`,
    [isCustomView, scrollRange],
  );

  const fadeInOption = useCallback(
    (): UseGSAPAnimationHookOptions => ({
      target: expListRef.current,
      direction: "fromTo",
      animation: [
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: expListRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      ],
    }),
    [],
  );

  const horizontalScrollOption = useCallback(
    (): UseGSAPAnimationHookOptions => ({
      target: expListRef.current,
      animation: [
        {
          x: () => -scrollRange,
          ease: "none",
          scrollTrigger: {
            trigger: sectionExperience,
            start: "top top", // trigger, view
            end: () => horizontalScrollEnd(),
            scrub: true,
            pin: sectionExperience,
            invalidateOnRefresh: true,
            // markers: true,
            onUpdate: onChangeActiveIndex,
          },
        },
      ],
    }),
    [horizontalScrollEnd, onChangeActiveIndex, scrollRange, sectionExperience],
  );

  useGSAPAnimation(
    {
      key: "profile/experience/interaction",
      elements: [expListRef.current, sectionExperience],
      options: [fadeInOption(), horizontalScrollOption()],
    },
    [fadeInOption, horizontalScrollOption],
  );

  return (
    <StyledExpScrollContainer>
      <StyledExpList ref={expListRef} $length={expLength}>
        {expData.map((ex: ExperienceAPIDataTypes, i: number) => (
          <ProfileExperienceItem
            key={`profile/experience/${ex.code}`}
            {...ex}
            isActive={onIndex === i}
            $totalLength={expLength}
          />
        ))}
      </StyledExpList>
    </StyledExpScrollContainer>
  );
}
