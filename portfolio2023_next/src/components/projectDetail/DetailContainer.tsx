"use client";

import { useSearchParams } from "next/navigation";
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
  ScreenTypes,
} from "@/types/state";
import { DetailTypes } from "@/types/projectDetails";

// state
import { detailScrollRefState } from "@/states/scroll";
import { detailData, detailLayoutState } from "@/states/detail";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// hooks
import useGetDetailByCodeQuery from "@/hooks/useGetDetailQuery";
import { screenState } from "@/states/screen";

export default function ProjectDetail() {
  // 프로젝트 코드
  const params = useSearchParams();
  const code = params.get("code");

  const { windowHeight } = useRecoilValue<ScreenTypes>(screenState);

  // 프로젝트 상세 열림 상태 관리
  const [layoutState, setLayoutState] =
    useRecoilState<DetailLayoutStateTypes>(detailLayoutState);
  const [open, setOpen] = useState<string>("");

  // 프로젝트 스크롤 인터렉션 참조 요소 상태 관리
  const setDetailScrollRef =
    useSetRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);
  const detailRef = useRef<HTMLElement | null>(null);

  // 프로젝트 데이터 상태관리
  const setDetailData = useSetRecoilState<DetailTypes>(detailData);
  const { status, data } = useGetDetailByCodeQuery(code);

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
    if (code) {
      setLayoutState(prev => ({ ...prev, dataStatus: status }));
      if (status === "success") {
        console.log(`[Detail Container :: React Query] Data is ready.`, data);
        setDetailData(prev => ({ ...prev, [code]: data }));
      }
    }
  }, [code, data, setDetailData, setLayoutState, status]);

  // 프로젝트 상세 오픈 ; 버튼 or URL
  useEffect(() => {
    console.log(
      `[Detail Container :: before] open(${layoutState.open}) / code(${code})`
    );
    // URL 또는 프로젝트 선택 클릭 모두 적용하여 열기/닫기
    if (code) setLayoutState(prev => ({ ...prev, open: true }));

    // 열기 전 스크롤 초기화
    if (code) detailRef.current?.scrollTo(0, 0);

    // 열림 상태 적용
    setOpen(layoutState.open && code ? "open" : "");
  }, [code, layoutState.open, open, setLayoutState]);

  // 상세 페이지 오픈 슬라이드 완료 상태 업데이트
  useEffect(() => {
    if (code && open === "open") {
      const timer = setTimeout(() => {
        setLayoutState(prev => ({ ...prev, openComplete: true }));
      }, transTime.detail.sheetSlide);

      return () => clearTimeout(timer);
    }
  }, [code, open, setLayoutState]);

  return (
    <PDContainer className={`${open}`} ref={setRef}>
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
