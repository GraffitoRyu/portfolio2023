"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";

// components
import CareerSummary from "./details/CareerSummary";
import CareerDetail from "./details/CareerDetail";

// style components
import {
  CareerBorder,
  CareerItemContainer,
  CareerWrap,
} from "@/styles/styled/components/ProfileCareer";

// type
import { CareerTypes } from "@/types/profile";
import { ScreenSizeTypes, ScrollRefStateTypes } from "@/types/state";

// state
import { scrollRefState } from "@/states/scroll";
import { screenSizeState } from "@/states/screen";

interface CareerItemProps extends CareerTypes {
  last?: boolean;
}

export default function CareerItem({
  code,
  summary,
  details,
  last,
}: CareerItemProps) {
  const [
    { container: scrollContainer, stickyHeight, careerOpen },
    setScrollRef,
  ] = useRecoilState<ScrollRefStateTypes>(scrollRefState);
  const itemRef = useRef<HTMLLIElement | null>(null);
  const [hide, setHide] = useState<string>("hide");

  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const [open, setOpen] = useState<string>("");

  const { careerExpandHeight } =
    useRecoilValue<ScreenSizeTypes>(screenSizeState);
  const [expandHeight, setExpandHeight] = useState<number>(0);

  // 확장 영역 요소 업데이트
  const updateExpendRef = useCallback(
    (node: HTMLDetailsElement | null) => {
      detailsRef.current = node;
      setScrollRef(prev => ({
        ...prev,
        careerItems: {
          ...prev.careerItems,
          [code]: node,
        },
      }));
    },
    [code, setScrollRef]
  );

  // 확장 영역 업데이트
  useEffect(() => {
    if (careerExpandHeight[code] !== 0)
      setExpandHeight(careerExpandHeight[code]);
  }, [careerExpandHeight, code]);

  // 열림 상태 업데이트
  useEffect(() => {
    // 확장 모션을 위해, 내장 기능이 아닌 별도 클릭 이벤트 생성 후 상태 업데이트
    if (typeof careerOpen[code] === "boolean")
      setOpen(careerOpen[code] ? "open" : "");
  }, [careerOpen, code]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (!scrollContainer) return;

    const careerItemContainer = itemRef.current;
    if (!careerItemContainer) return;

    const ctx = gsap.context(() => {
      if (scrollContainer instanceof Element) {
        // Scroll Trigger 플러그인 사용 시작
        gsap.registerPlugin(ScrollTrigger);

        // 스크롤 영역 설정
        ScrollTrigger.defaults({
          scroller: scrollContainer,
          invalidateOnRefresh: true,
        });

        ScrollTrigger.create({
          trigger: careerItemContainer,
          start: `top 80%`,
          end: `top top`,
          invalidateOnRefresh: true,
          // markers: true,
          onEnter: () => {
            setHide("");
          },
          onLeaveBack: () => {
            setHide("hide");
          },
        });
      }
    });

    return () => ctx.revert();
  }, [scrollContainer, stickyHeight]);

  return (
    <CareerItemContainer className={`${hide}`} ref={itemRef}>
      <CareerBorder className="top" />
      <CareerWrap
        ref={updateExpendRef}
        className={`${open}`}
        $height={expandHeight}
      >
        <CareerSummary code={code} {...summary} />
        <CareerDetail code={code} {...details} />
      </CareerWrap>
      {last ? <CareerBorder className="bottom" /> : null}
    </CareerItemContainer>
  );
}
