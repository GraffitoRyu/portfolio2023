"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

// components
import CareerSummary from "./details/CareerSummary";
import CareerDetail from "./details/CareerDetail";

// style components
import {
  StyledCareerBorder,
  StyledCareerItem,
  StyledCareerDetailWrap,
} from "@/styles/styled/components/ProfileCareer";

// state
import {
  careerOpenState,
  scrollCareerRefState,
  scrollPageSectionRefState,
} from "@/jotai/interaction/scroll.state";
import { viewportState } from "@/jotai/viewport.state";

// utils
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

/**
 * 프로필 > 커리어; 각 커리어 항목 아이템
 * @component
 * @param {CareerItemProps} props
 * @param {string} props.code
 * @param {CareerSummaryTypes} props.summary
 * @param {CareerDetailsTypes} props.details
 * @param {boolean} [props.last]
 */
export default function CareerItem({
  code,
  summary,
  details,
  last,
}: CareerItemProps) {
  const scrollContainer = useAtomValue(scrollPageSectionRefState("container"));
  const careerContents = useAtomValue(
    scrollPageSectionRefState("careerContents"),
  );

  // 커리어 각 ref 관리
  const setCareerItems = useSetAtom(scrollCareerRefState);
  // 커리어 각 상태 토글상태 관리
  const [{ [code]: isOpen }, setCareerOpen] = useAtom(careerOpenState);

  const itemRef = useRef<HTMLLIElement | null>(null);
  const [hide, setHide] = useState<string>("hide");

  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  const { careerExpandHeight } =
    useAtomValue<ViewportStateTypes>(viewportState);
  const [expandHeight, setExpandHeight] = useState<number>(0);

  // 확장 영역 요소 업데이트
  const updateExpendRef = useCallback(
    (node: HTMLDetailsElement | null) => {
      detailsRef.current = node;
      setCareerItems(prev => ({
        ...prev,
        [code]: node,
      }));
    },
    [code, setCareerItems],
  );

  // 확장 영역 업데이트
  useEffect(() => {
    if (careerExpandHeight[code] !== 0)
      setExpandHeight(careerExpandHeight[code]);
  }, [careerExpandHeight, code]);

  const onToggleDetail = useCallback(
    (state: boolean) => {
      setCareerOpen(prev => ({
        ...prev,
        [code]: state,
      }));
    },
    [code, setCareerOpen],
  );

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

    if (!scrollContainer || !careerContents) return;

    const detailTag = detailsRef.current;
    if (!detailTag) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      normalize: true,
      create: {
        trigger: careerContents,
        start: `top bottom`,
        end: `top bottom`,
        // markers: true,
        onLeaveBack: () => {
          setHide("hide");
          // 스크롤 다시 되돌아갈때 확장 상태 초기화
          if (detailTag instanceof HTMLDetailsElement) {
            detailTag.open = false;
            onToggleDetail(false);
          }
        },
      },
    });

    return () => ctx.revert();
  }, [careerContents, onToggleDetail, scrollContainer]);

  return (
    <StyledCareerItem className={`${hide}`} ref={itemRef}>
      <StyledCareerBorder className="top" />
      <StyledCareerDetailWrap
        ref={updateExpendRef}
        className={isOpen ? "open" : ""}
        $height={expandHeight}
      >
        <CareerSummary code={code} {...summary} />
        <CareerDetail code={code} {...details} />
      </StyledCareerDetailWrap>
      {last ? <StyledCareerBorder className="bottom" /> : null}
    </StyledCareerItem>
  );
}
