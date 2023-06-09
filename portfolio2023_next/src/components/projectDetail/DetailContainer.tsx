"use client";

import { useEffect, useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

// components
import DetailHeader from "@/components/projectDetail/header/DetailHeader";
import DetailSection from "@/components/projectDetail/section/DetailSection";
import DetailVisual from "@/components/projectDetail/visual/DetailVisual";
import DetailInfoContainer from "@/components/projectDetail/info/DetailInfoContainer";
import DetailMedia from "@/components/projectDetail/media/DetailMedia";

// style components
import { PDContainer } from "@/styles/styled/components/ProjectDetail";

// types
import { ScrollRefStateTypes, pageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";
import { scrollRefState } from "@/states/scroll";
import DetailBackground from "./visual/DetailBackground";

export default function ProjectDetail() {
  const { bottomSheetOpen } = useRecoilValue<pageStateTypes>(pageState);
  const [scrollRef, setScrollRef] =
    useRecoilState<ScrollRefStateTypes>(scrollRefState);
  const detailRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<string>("");

  useEffect(() => {
    if (detailRef.current && detailRef.current != scrollRef.detail?.current) {
      setScrollRef(prev => ({ ...prev, detail: detailRef }));
    }
  }, [scrollRef.detail, setScrollRef]);

  useEffect(() => {
    setOpen(bottomSheetOpen ? "open" : "");
  }, [bottomSheetOpen]);

  return (
    <>
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
    </>
  );
}
