"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// components
import ExperienceItem from "./ExperienceItem";

// state
import { scrollRefState } from "@/states/scroll";

// types
import { ScreenSizeTypes, ScrollRefStateTypes } from "@/types/state";
import { ExperienceTypes } from "@/types/profile";

// style components
import { ExpList } from "@/styles/styled/components/ProfileExperience";

// util
import debounce from "@/util/debounceEvent";
import { screenSizeState } from "@/states/screen";

export default function ExperienceList({ data }: { data: ExperienceTypes[] }) {
  const [expData, setExpData] = useState<ExperienceTypes[]>([]);
  const [length, setLength] = useState<number>(0);

  const {
    container: scrollContainer,
    experience: scrollTrigger,
    stickyHeight,
  } = useRecoilValue<ScrollRefStateTypes>(scrollRefState);
  const expListRef = useRef<HTMLUListElement | null>(null);

  const [listWidth, setListWidth] = useState<number>(0);

  const { columnWidth } = useRecoilValue<ScreenSizeTypes>(screenSizeState);
  const [offset, setOffset] = useState({ start: 0, end: 0 });

  const [onIndex, setOnIndex] = useState<number>(0);

  useLayoutEffect(() => {
    if (data?.length > 0) {
      setExpData(data);
      setLength(data.length);
    }
  }, [data]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setOffset({
      start: columnWidth * 10,
      end: columnWidth * 5,
    });
  }, [columnWidth]);

  // 경험 리스트 총 스크롤 너비 업데이트
  useEffect(() => {
    const list = expListRef.current;
    if (!list) return;

    const observer = new ResizeObserver(
      debounce((entries: ResizeObserverEntry[]) => {
        const ctx = entries[0].contentRect;
        setListWidth(ctx.width);
      }, 300)
    );

    observer.observe(list);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer || !scrollTrigger) return;

    const scrollTarget = expListRef.current;
    if (!scrollTarget) return;

    const scrollRange = listWidth * ((length - 1) / length);

    const ctx = gsap.context(() => {
      // Scroll Trigger 플러그인 사용 시작
      gsap.registerPlugin(ScrollTrigger);

      // 스크롤 영역 설정
      ScrollTrigger.defaults({
        scroller: scrollContainer,
        invalidateOnRefresh: true,
      });

      // const items = gsap.utils.toArray(".exp-item");

      gsap.to(scrollTarget, {
        x: -scrollRange,
        ease: "none",
        scrollTrigger: {
          trigger: scrollTrigger,
          start: `top top`, // trigger, view
          end: () => `+=${scrollRange}`,
          scrub: true,
          pin: scrollTrigger,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers: true,
          onUpdate: ({ progress }) => {
            // console.log(`activeIndex:`, activeIndex);
            setOnIndex(getActiveIndex(progress, length));
          },
        },
      });

      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh();
    });

    return () => ctx?.revert();
  }, [
    length,
    listWidth,
    offset.end,
    offset.start,
    scrollContainer,
    scrollTrigger,
    stickyHeight,
  ]);

  return (
    <ExpList ref={expListRef} $length={expData.length}>
      {expData.map((ex: ExperienceTypes, i: number) => (
        <ExperienceItem
          key={`exp_${ex.code}_${i}`}
          {...ex}
          $activeIndex={onIndex}
          $totalLength={expData.length}
          $itemIndex={i}
        />
      ))}
    </ExpList>
  );
}

function getActiveIndex(progress: number, length: number): number {
  const ratio = progress * 100;
  const unit = 100 / length;
  // console.log(`progress: `, ratio, ` / unit:`, unit);
  if (ratio < unit) return 0;
  else if (unit <= ratio && ratio < unit * 2) return 1;
  else if (unit * 2 <= ratio && ratio < unit * 3) return 2;
  else if (unit * 3 <= ratio && ratio < unit * 4) return 3;
  else if (unit * 4 <= ratio && ratio < unit * 5) return 4;
  return 4;
}
