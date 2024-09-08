"use client";

import { useAtomValue } from "jotai";

// components
import DetailLinkContainer from "../common/linkMenu/LinkContainer";
import DetailStacks from "./stacks/Container";

// style components
import { StyledPDVisualLower } from "@/styles/styled/components/ProjectDetail";

// state
import { viewportState } from "@/jotai/viewport.state";

export default function DetailVisualLower() {
  const { windowWidth } = useAtomValue(viewportState);

  return (
    <StyledPDVisualLower>
      {windowWidth < 1024 ? <DetailLinkContainer /> : null}
      <DetailStacks />
    </StyledPDVisualLower>
  );
}
