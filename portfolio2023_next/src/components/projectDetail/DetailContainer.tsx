"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

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
} from "@/types/state";
import { DetailTypes } from "@/types/projectDetails";

// state
import { detailScrollRefState } from "@/states/scroll";
import { detailData, detailLayoutState } from "@/states/detail";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// hooks
import useGetDetailByCodeQuery from "@/hooks/useGetDetailQuery";

export default function ProjectDetail() {
  const router = useRouter();
  // 프로젝트 코드
  const params = useSearchParams();
  const code = params.get("code");

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
  const { isError, status, data } = useGetDetailByCodeQuery(code);

  // 프로젝트 상세 오픈 ; 열림 상태 클래스명으로 컨트롤
  useEffect(() => {
    // 프로젝트 클릭 선택으로 여는 경우
    setOpen(layoutState.open ? "open" : "");

    // url로 직접 접근할 때
    if (!layoutState.open && code) {
      setLayoutState(prev => ({ ...prev, open: true }));
      setOpen("open");
    }
  }, [code, layoutState, setLayoutState]);

  // 상세 페이지 오픈 슬라이드 완료 상태 업데이트
  useEffect(() => {
    if (code && open === "open") {
      const timer = setTimeout(() => {
        setLayoutState(prev => ({ ...prev, openComplete: true }));
      }, transTime.detail.sheetSlideTime);

      return () => clearTimeout(timer);
    }
  }, [code, open, setLayoutState]);

  // 데이터 조회 오류 시, 창 닫기
  useEffect(() => {
    // 데이터 조회 실패 시 닫기
    if (isError) {
      setLayoutState(prev => ({ ...prev, open: false, openComplete: false }));
      router.back();
    }
  }, [isError, router, setLayoutState]);

  // 스크롤 참조 데이터 업데이트
  useEffect(() => {
    if (detailRef.current) {
      setDetailScrollRef(prev => ({ ...prev, container: detailRef }));
    }
  }, [setDetailScrollRef]);

  useEffect(() => {
    if (code) {
      setLayoutState(prev => ({ ...prev, dataStatus: status }));
      if (status === "success") {
        console.log(`[Detail Container :: React Query] Data is ready.`, data);
        setDetailData(prev => ({ ...prev, [code]: data }));
      }
    }
  }, [code, data, setDetailData, setLayoutState, status]);

  return (
    <PDContainer className={`${open}`} ref={detailRef}>
      <DetailHeader />
      <DetailBackground />
      <DetailSection className="detail-visual">
        <DetailVisual />
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
