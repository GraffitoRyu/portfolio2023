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
import { DetailLayoutStateTypes, ScrollRefStateTypes } from "@/types/state";

// state
import { scrollRefState } from "@/states/scroll";
import { detailLayoutState } from "@/states/detail";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function ProjectDetail() {
  const [layoutState, setLayoutState] =
    useRecoilState<DetailLayoutStateTypes>(detailLayoutState);
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);
  const detailRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState<string>("");

  useEffect(() => {
    if (detailRef.current) {
      setScrollRef(prev => ({ ...prev, detail: detailRef }));
    }
    return () => {
      setScrollRef(prev => ({ ...prev, detail: null }));
    };
  }, [setScrollRef]);

  useEffect(() => {
    // 열림 상태 클래스명으로 컨트롤
    setOpen(layoutState.open ? "open" : "");

    if (layoutState.open) {
      const timer = setTimeout(() => {
        setLayoutState(prev => ({ ...prev, openComplete: true }));
      }, transTime.detail.sheetSlideTime);
      return () => clearTimeout(timer);
    }
  }, [layoutState, setLayoutState]);

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
