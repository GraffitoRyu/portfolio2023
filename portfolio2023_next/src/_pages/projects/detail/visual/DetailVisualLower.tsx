"use client";

import { useRecoilValue } from "recoil";

// components
import DetailLinkContainer from "../common/linkMenu/DetailLinkContainer";
import DetailStacks from "./stacks/DetailStacks";

// style components
import { PDVisualLower } from "@/styles/styled/components/ProjectDetail";

// state
import { screenSizeState } from "@/states/screen";

// type
import { ScreenSizeTypes } from "@/types/state";

export default function DetailVisualLower() {
  const { windowWidth } = useRecoilValue<ScreenSizeTypes>(screenSizeState);

  return (
    <PDVisualLower>
      {windowWidth < 1024 ? <DetailLinkContainer /> : null}
      <DetailStacks />
    </PDVisualLower>
  );
}
