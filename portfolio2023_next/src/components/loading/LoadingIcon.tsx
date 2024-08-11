"use client";

import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  StyledLoadingIconContainer,
  StyledLoadingIconFigure,
} from "@/styles/styled/components/LoadingIcon";

// svg components
import LoadingIcon from "@/svg/common/LoadingIcon";

// state
import { pageLoadState } from "@/jotai/load.state";

export default function LoadingIconComponent() {
  const { init } = useAtomValue<PageLoadStateTypes>(pageLoadState);
  const [loading, setLoading] = useState<string>("loading");

  useEffect(() => {
    if (init) setLoading("");
  }, [init]);

  return (
    <StyledLoadingIconContainer className={loading}>
      <StyledLoadingIconFigure className="loading-icon">
        <LoadingIcon />
      </StyledLoadingIconFigure>
    </StyledLoadingIconContainer>
  );
}
