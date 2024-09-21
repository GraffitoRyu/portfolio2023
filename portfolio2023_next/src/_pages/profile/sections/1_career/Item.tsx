"use client";

import { useCallback, useRef, useState } from "react";
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
  careerEachOpenState,
  scrollCareerEachItemRefState,
  scrollPageSectionRefState,
} from "@/jotai/interaction/scroll.state";
import { careerExpandHeightState } from "@/jotai/viewport.state";

// hooks
import useGSAPAnimation from "@/hooks/interaction/useGSAPAnimation";

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
  const careerContents = useAtomValue(
    scrollPageSectionRefState("careerContents"),
  );

  // 커리어 각 ref 관리
  const setCareerItems = useSetAtom(scrollCareerEachItemRefState(code));
  // 커리어 각 상태 토글상태 관리
  const [isOpen, setCareerOpen] = useAtom(careerEachOpenState(code));
  const expandHeight = useAtomValue(careerExpandHeightState(code));

  const itemRef = useRef<HTMLLIElement | null>(null);
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  const [hide, setHide] = useState<boolean>(true);

  // 확장 영역 요소 업데이트
  const updateExpendRef = useCallback(
    (node: HTMLDetailsElement | null) => {
      detailsRef.current = node;
      setCareerItems(node);
    },
    [setCareerItems],
  );

  // 스크롤 다시 되돌아갈때 확장 상태 초기화
  const onResetDetail = useCallback(() => {
    setHide(true);
    setCareerOpen(false);

    if (detailsRef.current === null) return;
    detailsRef.current.open = false;
  }, [setCareerOpen]);

  // 경력 리스트 스크롤 인터랙션
  useGSAPAnimation(
    {
      key: `profile/career/${code}/item/container`,
      elements: [itemRef.current],
      scrollCreate: {
        trigger: itemRef.current,
        start: "top 80%",
        end: "top top",
        invalidateOnRefresh: true,
        // markers: true,
        onEnter: () => {
          setHide(false);
        },
      },
    },
    [code, hide],
  );

  // 초기화; 섹션이 뷰포트 아래로 내려갔을 때
  useGSAPAnimation(
    {
      key: `profile/career/${code}/item/detail`,
      elements: [careerContents, detailsRef.current],
      scrollCreate: {
        trigger: careerContents,
        start: "top bottom",
        end: "top bottom",
        // markers: true,
        onLeaveBack: onResetDetail,
      },
    },
    [code, hide, onResetDetail],
  );

  return (
    <StyledCareerItem className={hide ? "hide" : ""} ref={itemRef}>
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
