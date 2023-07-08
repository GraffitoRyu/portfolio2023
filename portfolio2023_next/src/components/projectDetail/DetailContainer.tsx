"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

// components
import DetailHeader from "@/components/projectDetail/header/DetailHeader";
import DetailBackground from "@/components/projectDetail/visual/DetailBackground";
import DetailSection from "@/components/projectDetail/section/DetailSection";
import DetailVisual from "@/components/projectDetail/visual/DetailVisual";
import DetailInfoContainer from "@/components/projectDetail/info/DetailInfo";
import DetailMediaContainer from "@/components/projectDetail/media/DetailMedia";

// style components
import { PDContainer } from "@/styles/styled/components/ProjectDetail";

// types
import {
  DetailLayoutStateTypes,
  DetailScrollRefStateTypes,
  ScreenSizeTypes,
} from "@/types/state";
import { DetailTypes } from "@/types/projectDetails";

// state
import { detailScrollRefState } from "@/states/scroll";
import { detailData, detailLayoutState } from "@/states/detail";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// hooks
import useGetDetailByCodeQuery from "@/hooks/useGetDetailQuery";
import { screenSizeState } from "@/states/screen";

export default function ProjectDetail() {
  const { windowHeight } = useRecoilValue<ScreenSizeTypes>(screenSizeState);

  // 프로젝트 상세 열림 상태 관리
  const [{ category, open }, setLayoutState] =
    useRecoilState<DetailLayoutStateTypes>(detailLayoutState);
  const [openClass, setOpen] = useState<string>("");

  // 프로젝트 스크롤 인터렉션 참조 요소 상태 관리
  const setDetailScrollRef =
    useSetRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);
  const detailRef = useRef<HTMLElement | null>(null);

  // 프로젝트 데이터 상태관리
  const setDetailData = useSetRecoilState<DetailTypes>(detailData);
  const { status, data } = useGetDetailByCodeQuery(category);

  // 스크롤 참조 데이터 업데이트
  const setRef = useCallback(
    (node: HTMLElement | null) => {
      detailRef.current = node;
      setDetailScrollRef(prev => ({ ...prev, container: node }));
    },
    [setDetailScrollRef]
  );

  // 데이터 조회 상태
  useEffect(() => {
    if (category) {
      console.log(`get [${category}] data status: `, status);
      setLayoutState(prev => ({ ...prev, dataStatus: status }));
      if (status === "success") {
        console.log(`[Detail Container :: React Query] Data is ready.`, data);
        setDetailData(prev => ({ ...prev, [category]: data }));
      }
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
      <DetailHeader />
      <DetailBackground $windowHeight={windowHeight} />
      <DetailSection className="detail-visual" $windowHeight={windowHeight}>
        <DetailVisual $windowHeight={windowHeight} />
      </DetailSection>
      <DetailSection className="detail-info side-padding">
        <DetailInfoContainer />
      </DetailSection>
      <DetailSection className="detail-media">
        <DetailMediaContainer />
      </DetailSection>
    </PDContainer>
  );
}
