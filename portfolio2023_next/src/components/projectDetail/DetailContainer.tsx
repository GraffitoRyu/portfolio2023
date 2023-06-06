"use client";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import DetailHeader from "@/components/projectDetail/header/DetailHeader";
import DetailSection from "@/components/projectDetail/section/DetailSection";
import DetailVisual from "@/components/projectDetail/section/DetailVisual";
import DetailDescription from "@/components/projectDetail/section/DetailDescription";
import DetailMedia from "@/components/projectDetail/section/DetailMedia";

// style components
import { PDContainer } from "@/styles/styled/components/ProjectDetail";

// state
import { pageState, pageStateTypes } from "@/states/page";

export default function ProjectDetail() {
  const { bottomSheetOpen } = useRecoilValue<pageStateTypes>(pageState);
  const [open, setOpen] = useState<string>("");

  useEffect(() => {
    setOpen(bottomSheetOpen ? "open" : "");
  }, [bottomSheetOpen]);

  return (
    <PDContainer className={`${open}`}>
      <DetailHeader />
      <DetailSection>
        <DetailVisual />
      </DetailSection>
      <DetailSection>
        <DetailDescription />
      </DetailSection>
      <DetailSection>
        <DetailMedia />
      </DetailSection>
    </PDContainer>
  );
}
