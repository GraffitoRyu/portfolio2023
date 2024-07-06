"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { useAtom } from "jotai";

// components
import DetailHeader from "./header/DetailHeader";
import DetailVisualContainer from "./visual/DetailVisualContainer";
import DetailSubVisual from "./subVisual/DetailSubVisual";
import DetailExperience from "./exp/DetailExperience";
import DetailMediaContainer from "./media/DetailMedia";

// style components
import { PDContainer } from "@/styles/styled/components/ProjectDetail";

// state
import { detailData } from "@/states/detail";
import { detailScrollRefState } from "@/states/scroll";
import { pageDetailLoadState } from "@/jotai/pages/load";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// hooks
import useResizeObserver from "@/hooks/layout/useResizeObserver";

// fetch
import { useQueryProjectsDetailData } from "@/lib/query";

export default function ProjectDetail() {
  // 프로젝트 상세 열림 상태 관리
  const [{ category, open }, setLayoutState] = useAtom(pageDetailLoadState);
  const [openClass, setOpen] = useState<string>("");

  // 프로젝트 스크롤 인터렉션 참조 요소 상태 관리
  const setDetailScrollRef =
    useSetRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);
  const detailRef = useRef<HTMLElement | null>(null);
  const scrollWrapRef = useRef<HTMLDivElement | null>(null);

  // 프로젝트 데이터 상태관리
  const setDetailData = useSetRecoilState<DetailTypes>(detailData);
  const { status, data } = useQueryProjectsDetailData(category);

  // 스크롤 참조 데이터 업데이트
  const setRef = useCallback(
    (node: HTMLElement | null) => {
      detailRef.current = node;
      setDetailScrollRef(prev => ({ ...prev, container: node }));
    },
    [setDetailScrollRef],
  );

  // 프로젝트 상세 스크롤 높이 업데이트
  useResizeObserver({
    ref: scrollWrapRef,
    callback: ({ height }) => {
      setDetailScrollRef(prev => ({
        ...prev,
        scrollHeight: height || 0,
      }));
    },
  });

  // 데이터 조회 상태
  useEffect(() => {
    if (typeof category !== "string") return;
    // console.log(`get [${category}] data status: `, status);
    setLayoutState(prev => ({ ...prev, dataStatus: status }));
    if (status === "success") {
      // console.log(`[Detail Container :: React Query] Data is ready.`, data);
      setDetailData(prev => ({ ...prev, [category]: data }));
    }
  }, [category, data, setDetailData, setLayoutState, status]);

  // 열림 상태 적용
  useEffect(() => {
    setOpen(open ? "open" : "");
  }, [open]);

  // 상세 페이지 오픈 슬라이드 완료 상태 업데이트
  useEffect(() => {
    if (category && openClass === "open") {
      const timer = setTimeout(() => {
        setLayoutState(prev => ({ ...prev, openComplete: true }));
      }, transTime.detail.sheetSlide);

      return () => clearTimeout(timer);
    }
  }, [category, openClass, setLayoutState]);

  return (
    <PDContainer className={`${openClass}`} ref={setRef}>
      <div className="detail-scroll-wrap" ref={scrollWrapRef}>
        <DetailHeader />
        <DetailVisualContainer />
        <DetailSubVisual />
        <DetailExperience />
        <DetailMediaContainer />
      </div>
    </PDContainer>
  );
}
