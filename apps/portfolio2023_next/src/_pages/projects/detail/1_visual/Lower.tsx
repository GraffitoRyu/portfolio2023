"use client";

// components
import DetailLinkContainer from "../common/linkMenu/LinkContainer";
import DetailStacks from "./3_stacks/Container";

// style components
import { StyledPDVisualLower } from "@/styles/styled/components/ProjectDetail";

// hook
import useCheckView from "@/hooks/layout/useCheckView";

export default function DetailVisualLower() {
  const { isCustomView } = useCheckView(1024);

  return (
    <StyledPDVisualLower>
      {isCustomView ? <DetailLinkContainer /> : null}
      <DetailStacks />
    </StyledPDVisualLower>
  );
}
