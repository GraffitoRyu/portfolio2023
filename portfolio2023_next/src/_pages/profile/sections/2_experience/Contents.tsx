"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// components
import ProfileExperienceItem from "./Item";

// state
import { viewportState } from "@/jotai/viewport.state";
import { scrollPageRefState } from "@/jotai/interaction/scroll.state";

// style components
import {
  StyledExpList,
  StyledExpScrollContainer,
} from "@/styles/styled/components/ProfileExperience";

// hooks
import useResizeObserver from "@/hooks/layout/useResizeObserver";

// util
import { ctxScrollTrigger } from "@/util/interactions/presetScrollTrigger";

// fetch
import { useQueryProfileExperienceData } from "@/lib/query";

export default function ProfileExperienceContents() {
  const { data: expData = [] } = useQueryProfileExperienceData();
  const expLength = useMemo(() => expData.length, [expData]);

  const { container: scrollContainer, sectionExperience: scrollTrigger } =
    useAtomValue(scrollPageRefState);
  const expListRef = useRef<HTMLUListElement | null>(null);

  const [isMobileView, setMobileView] = useState<boolean>(false);

  const [listWidth, setListWidth] = useState<number>(0);

  const { windowWidth, columnWidth } = useAtomValue(viewportState);
  const [offset, setOffset] = useState({ start: 0, end: 0 });

  const [onIndex, setOnIndex] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setOffset({
      start: columnWidth * 10,
      end: columnWidth * 5,
    });
  }, [columnWidth]);

  useEffect(() => {
    setMobileView(windowWidth < 640);
  }, [windowWidth]);

  // 경험 리스트 총 스크롤 너비 업데이트
  useResizeObserver({
    ref: expListRef,
    delay: 300,
    callback: ({ width }) => {
      setListWidth(width);
    },
  });

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer || !scrollTrigger) return;

    const scrollTarget = expListRef.current;
    if (!scrollTarget) return;

    const scrollRange = listWidth * ((expLength - 1) / expLength);

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
                end: () => `+=${scrollRange * (isMobileView ? 2 : 1)} bottom`,
                scrub: true,
                pin: scrollTrigger,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: true,
                onUpdate: ({ progress }: { progress: number }) => {
                  setOnIndex(getActiveIndex(progress, expLength));
                },
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [
    expLength,
    listWidth,
    offset.end,
    offset.start,
    scrollContainer,
    scrollTrigger,
    isMobileView,
  ]);

  return (
    <StyledExpScrollContainer>
      <StyledExpList ref={expListRef} $length={expLength}>
        {expData.map((ex: ExperienceTypes, i: number) => (
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

function getActiveIndex(progress: number, length: number): number {
  const ratio = progress * 100;
  const unit = 100 / length;

  if (ratio < unit) return 0;
  else if (unit <= ratio && ratio < unit * 2) return 1;
  else if (unit * 2 <= ratio && ratio < unit * 3) return 2;
  else if (unit * 3 <= ratio && ratio < unit * 4) return 3;
  else if (unit * 4 <= ratio && ratio < unit * 5) return 4;
  return 4;
}
