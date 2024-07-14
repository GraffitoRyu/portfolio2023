"use client";

import { useAtomValue } from "jotai";

// components
import DetailLinkContainer from "../common/linkMenu/DetailLinkContainer";
import DetailStacks from "./stacks/DetailStacks";

// style components
import { PDVisualLower } from "@/styles/styled/components/ProjectDetail";

// state
import { viewportState } from "@/jotai/viewport.state";

export default function DetailVisualLower() {
  const { windowWidth } = useAtomValue(viewportState);

  return (
    <PDVisualLower>
      {windowWidth < 1024 ? <DetailLinkContainer /> : null}
      <DetailStacks />
    </PDVisualLower>
  );
}
