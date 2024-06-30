"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useAtomValue } from "jotai";
import { useRecoilState } from "recoil";

// components
import CareerSummary from "./details/CareerSummary";
import CareerDetail from "./details/CareerDetail";

// style components
import {
  CareerBorder,
  CareerItemContainer,
  CareerWrap,
} from "@/styles/styled/components/ProfileCareer";

// state
import { scrollRefState } from "@/states/scroll";
import { viewportState } from "@/jotai/viewport";

// utils
import { ctxScrollTrigger } from "@/util/interactions/presetScrollTrigger";

export default function CareerItem({
  code,
  summary,
  details,
  last,
}: CareerItemProps) {
  const [{ container: scrollContainer, careerOpen, career }, setScrollRef] =
    useRecoilState<ScrollRefStateTypes>(scrollRefState);
  const itemRef = useRef<HTMLLIElement | null>(null);
  const [hide, setHide] = useState<string>("hide");

  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const [open, setOpen] = useState<string>("");

  const { careerExpandHeight } =
    useAtomValue<ViewportStateTypes>(viewportState);
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
    [code, setScrollRef],
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

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      create: {
        trigger: careerItemContainer,
        start: `top 80%`,
        end: `top top`,
        invalidateOnRefresh: true,
        // markers: true,
        onEnter: () => {
          setHide("");
        },
      },
    });

    return () => ctx.revert();
  }, [scrollContainer]);

  // 초기화; 섹션이 뷰포트 아래로 내려갔을 때
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer || !career) return;

    const detailTag = detailsRef.current;
    if (!detailTag) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      normalize: true,
      create: {
        trigger: career,
        start: `top bottom`,
        end: `top bottom`,
        // markers: true,
        onLeaveBack: () => {
          setHide("hide");
          // 스크롤 다시 되돌아갈때 확장 상태 초기화
          if (detailTag instanceof HTMLDetailsElement) {
            detailTag.open = false;
            setOpen("");
            setScrollRef(prev => ({
              ...prev,
              careerOpen: { ...careerOpen, [code]: false },
            }));
          }
        },
      },
    });

    return () => ctx.revert();
  }, [career, careerOpen, code, scrollContainer, setScrollRef]);

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
