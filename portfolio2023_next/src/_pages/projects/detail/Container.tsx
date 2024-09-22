"use client";

// components
import SimpleScrollContainer from "@/components/scroll/SimpleScrollContainer";
import DetailHeaderContainer from "./0_header/Container";
import DetailVisualContainer from "./1_visual/Container";
import DetailSubVisual from "./2_subVisual/Container";
import DetailExperience from "./3_experience/Container";
import DetailMediaContainer from "./4_media/Container";

// style components
import { StyledPDContainer } from "@/styles/styled/components/ProjectDetail";

// hooks
import useProjectDetailState from "@/hooks/page/useProjectDetailState";

/**
 * 프로젝트 > 프로젝트 상세; bottom sheet container
 * @component
 */
export default function ProjectDetailContainer() {
  // 프로젝트 상태의 열림상태, 데이터 로드 상태 관리 훅
  const { open } = useProjectDetailState();

  return (
    <StyledPDContainer className={`${open ? "open" : ""}`}>
      <SimpleScrollContainer standard="detail">
        <DetailHeaderContainer />
        <DetailVisualContainer />
        <DetailSubVisual />
        <DetailExperience />
        <DetailMediaContainer />
      </SimpleScrollContainer>
    </StyledPDContainer>
  );
}
