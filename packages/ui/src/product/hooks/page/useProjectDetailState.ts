"use client";

import { useEffect } from "react";
import { useAtom, useSetAtom } from "jotai";

// states
import { pageDetailLoadState } from "@graffitoryu/ui/product/jotai/load.state";
import { projectCategoryDetailDataState } from "@graffitoryu/ui/product/jotai/pages/project.detail.state";

// style
import { transTime } from "@graffitoryu/ui/product/styles/styled/preset/transTime";

// fetch
import { useQueryProjectsDetailData } from "@graffitoryu/ui/product/lib/query";

export default function useProjectDetailState() {
  // 프로젝트 상세 열림 상태 관리
  const [{ category, open }, setLayoutState] = useAtom(pageDetailLoadState);

  // 프로젝트 데이터 상태관리
  const { status, data: detailData } = useQueryProjectsDetailData(category);
  const setCategoryDetailData = useSetAtom(
    projectCategoryDetailDataState(category),
  );

  // 데이터 조회 상태
  useEffect(() => {
    if (typeof category !== "string") return;
    setLayoutState(prev => ({ ...prev, dataStatus: status }));
    if (status === "success") setCategoryDetailData(detailData);
  }, [category, detailData, setCategoryDetailData, setLayoutState, status]);

  // 상세 페이지 오픈 슬라이드 완료 상태 업데이트
  useEffect(() => {
    if (!category || !open) return;

    const timer = setTimeout(() => {
      setLayoutState(prev => ({ ...prev, openComplete: true }));
    }, transTime.detail.sheetSlide);

    return () => clearTimeout(timer);
  }, [category, open, setLayoutState]);

  return { open };
}
