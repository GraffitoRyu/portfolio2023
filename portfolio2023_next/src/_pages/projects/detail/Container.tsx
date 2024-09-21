"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useAtom, useSetAtom } from "jotai";

// components
import DetailHeaderContainer from "./0_header/Container";
import DetailVisualContainer from "./1_visual/Container";
import DetailSubVisual from "./2_subVisual/Container";
import DetailExperience from "./3_experience/Container";
import DetailMediaContainer from "./4_media/Container";

// style components
import { StyledPDContainer } from "@/styles/styled/components/ProjectDetail";

// state
import { pageDetailLoadState } from "@/jotai/load.state";
import {
  scrollDetailHeightState,
  scrollDetailSectionRefState,
} from "@/jotai/interaction/scroll.state";
import { projectCategoryDetailDataState } from "@/jotai/pages/project.detail.state";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// hooks
import useResizeObserver from "@/hooks/layout/useResizeObserver";

// fetch
import { useQueryProjectsDetailData } from "@/lib/query";

/**
 * 프로젝트 > 프로젝트 상세; bottom sheet container
 * @component
 */
export default function ProjectDetailContainer() {
  // 프로젝트 상세 열림 상태 관리
  const [{ category, open }, setLayoutState] = useAtom(pageDetailLoadState);

  // 프로젝트 스크롤 인터렉션 참조 요소 상태 관리
  const setDetailScrollRef = useSetAtom(
    scrollDetailSectionRefState("container"),
  );
  const detailRef = useRef<HTMLElement | null>(null);
  const scrollWrapRef = useRef<HTMLDivElement | null>(null);

  // 프로젝트 데이터 상태관리
  const setCategoryDetailData = useSetAtom(
    projectCategoryDetailDataState(category),
  );
  const { status, data: detailData } = useQueryProjectsDetailData(category);

  // 스크롤 참조 데이터 업데이트
  const setRef = useCallback(
    (node: HTMLElement | null) => {
      detailRef.current = node;
      setDetailScrollRef(node);
    },
    [setDetailScrollRef],
  );

  // 프로젝트 상세 스크롤 높이 업데이트
  const setScrollHeight = useSetAtom(scrollDetailHeightState);
  useResizeObserver({
    ref: scrollWrapRef,
    delay: 300,
    callback: ({ height }) => {
      setScrollHeight(height || 0);
    },
  });

  // 데이터 조회 상태
  useEffect(() => {
    if (typeof category !== "string") return;
    // console.log(`get [${category}] data status: `, status);

    setLayoutState(prev => ({ ...prev, dataStatus: status }));

    if (status !== "success") return;

    // console.log(`[Detail Container :: React Query] Data is ready.`, data);

    setCategoryDetailData(detailData);
  }, [category, detailData, setCategoryDetailData, setLayoutState, status]);

  const [openActive, setOpenActive] = useState<boolean>(false);
  // 열림 상태 적용
  useEffect(() => {
    if (open !== openActive) setOpenActive(open);
  }, [openActive, open]);

  // 상세 페이지 오픈 슬라이드 완료 상태 업데이트
  useEffect(() => {
    if (category && openActive) {
      const timer = setTimeout(() => {
        setLayoutState(prev => ({ ...prev, openComplete: true }));
      }, transTime.detail.sheetSlide);

      return () => clearTimeout(timer);
    }
  }, [category, openActive, setLayoutState]);

  return (
    <StyledPDContainer className={`${open ? "open" : ""}`} ref={setRef}>
      <div className="detail-scroll-wrap" ref={scrollWrapRef}>
        <DetailHeaderContainer />
        <DetailVisualContainer />
        <DetailSubVisual />
        <DetailExperience />
        <DetailMediaContainer />
      </div>
    </StyledPDContainer>
  );
}
