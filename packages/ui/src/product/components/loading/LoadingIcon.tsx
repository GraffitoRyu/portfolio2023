"use client";

import { useAtomValue } from "jotai";

// style components
import {
  StyledLoadingIconContainer,
  StyledLoadingIconFigure,
} from "@graffitoryu/ui/product/styles/styled/components/LoadingIcon";

// svg components
import LoadingIcon from "@graffitoryu/ui/product/svg/common/LoadingIcon";

// state
import { pageLoadState } from "@graffitoryu/ui/product/jotai/load.state";

export default function LoadingIconComponent() {
  const { loaded } = useAtomValue(pageLoadState);

  return (
    <StyledLoadingIconContainer className={loaded ? "" : "loading"}>
      <StyledLoadingIconFigure className="loading-icon">
        <LoadingIcon />
      </StyledLoadingIconFigure>
    </StyledLoadingIconContainer>
  );
}
