"use client";

import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// components
import ProfileExperienceItem from "./Item";

// state
import { viewportState } from "@/jotai/viewport.state";
import {
  scrollPageHeightState,
  scrollPageSectionRefState,
} from "@/jotai/interaction/scroll.state";

// style components
import {
  StyledExpList,
  StyledExpScrollContainer,
} from "@/styles/styled/components/ProfileExperience";

// hooks
import useResizeObserver from "@/hooks/layout/useResizeObserver";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

// fetch
import { useQueryProfileExperienceData } from "@/lib/query";

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

  // 화면 사이즈 상태
  const { windowWidth } = useAtomValue(viewportState);
  const scrollHeight = useAtomValue(scrollPageHeightState);
  // 경험 리스트 ref
  const expListRef = useRef<HTMLUListElement | null>(null);
  // 스크롤 참조 ref 상태
  const scrollContainer = useAtomValue(scrollPageSectionRefState("container"));
  const scrollTrigger = useAtomValue(
    scrollPageSectionRefState("sectionExperience"),
  );

  // 경험 섹션의 모바일 모드 전환을 위한 상태관리
  const [isMobileView, setMobileView] = useState<boolean>(windowWidth < 640);

  const updateMobileView = useCallback(
    (width: number) => {
      if (isMobileView !== width < 640) setMobileView(width < 640);
    },
    [isMobileView],
  );

  // 좌우 리스트 너비
  const [listWidth, setListWidth] = useState<number>(0);
  // 경험 리스트 총 스크롤 너비 업데이트
  useResizeObserver({
    ref: expListRef,
    delay: 300,
    callback: ({ width }) => {
      setListWidth(width);
      updateMobileView(width);
    },
  });

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
    if (listWidth <= 0 || expLength <= 0) return 0;
    return listWidth * ((expLength - 1) / expLength);
  }, [expLength, listWidth]);

  const horizontalScrollEnd = useMemo(
    () => `+=${scrollRange * (isMobileView ? 2 : 1)} bottom`,
    [isMobileView, scrollRange],
  );

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer || !scrollTrigger) return;

    const scrollTarget = expListRef.current;
    if (!scrollTarget) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      normalize: true,
      timeline: true,
      tweenArr: [
        {
          target: scrollTarget,
          direction: "fromTo",
          options: [
            {
              opacity: 0,
            },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: scrollTarget,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
              },
            },
          ],
        },
        {
          target: scrollTarget,
          options: [
            {
              x: -scrollRange,
              ease: "none",
              scrollTrigger: {
                trigger: scrollTrigger,
                start: `top top`, // trigger, view
                end: () => horizontalScrollEnd,
                scrub: true,
                pin: scrollTrigger,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                // markers: true,
                onUpdate: onChangeActiveIndex,
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [
    scrollHeight,
    horizontalScrollEnd,
    onChangeActiveIndex,
    scrollContainer,
    scrollRange,
    scrollTrigger,
  ]);

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
