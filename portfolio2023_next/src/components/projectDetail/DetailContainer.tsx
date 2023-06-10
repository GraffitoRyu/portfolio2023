"use client";

import { useEffect, useState, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

// components
import DetailHeader from "@/components/projectDetail/header/DetailHeader";
import DetailBackground from "@/components/projectDetail/visual/DetailBackground";
import DetailSection from "@/components/projectDetail/section/DetailSection";
import DetailVisual from "@/components/projectDetail/visual/DetailVisual";
import DetailInfoContainer from "@/components/projectDetail/info/DetailInfoContainer";
import DetailMedia from "@/components/projectDetail/media/DetailMedia";

// style components
import { PDContainer } from "@/styles/styled/components/ProjectDetail";

// types
import {
  DetailLayoutStateTypes,
  DetailScrollRefStateTypes,
} from "@/types/state";

// state
import { detailScrollRefState } from "@/states/scroll";
import { detailLayoutState } from "@/states/detail";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function ProjectDetail() {
  const [layoutState, setLayoutState] =
    useRecoilState<DetailLayoutStateTypes>(detailLayoutState);
  const setDetailScrollRef =
    useSetRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);

  const detailRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState<string>("");

  // 스크롤 참조 데이터 업데이트
  useEffect(() => {
    if (detailRef.current) {
      setDetailScrollRef(prev => ({ ...prev, container: detailRef }));
    }
    return () => {
      setDetailScrollRef(prev => ({ ...prev, container: null }));
    };
  }, [setDetailScrollRef]);

  // 프로젝트 상세 오픈
  useEffect(() => {
    // 열림 상태 클래스명으로 컨트롤
    setOpen(layoutState.open ? "open" : "");

    if (layoutState.open) {
      const timer = setTimeout(() => {
        setLayoutState(prev => ({ ...prev, openComplete: true }));
      }, transTime.detail.sheetSlideTime);
      return () => clearTimeout(timer);
    }
  }, [layoutState.open, setLayoutState]);

  return (
    <PDContainer className={`${open}`} ref={detailRef}>
      <DetailHeader />
      <DetailBackground />
      <DetailSection className="detail-visual">
        <DetailVisual />
      </DetailSection>
      <DetailSection className="detail-info">
        <DetailInfoContainer />
      </DetailSection>
      <DetailSection className="detail-media">
        <DetailMedia />
      </DetailSection>
    </PDContainer>
  );
}
