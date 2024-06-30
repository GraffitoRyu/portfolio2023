"use client";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  LoadingIconContainer,
  LoadingIconFigure,
} from "@/styles/styled/components/LoadingIcon";

// svg components
import LoadingIcon from "@/svg/common/LoadingIcon";

// state
import { pageState } from "@/states/page";

export default function LoadingIconComponent() {
  const page = useRecoilValue<PageLoadStateTypes>(pageState);
  const [loading, setLoading] = useState<string>("loading");

  useEffect(() => {
    if (page.init) setLoading("");
  }, [page.init]);

  return (
    <LoadingIconContainer className={loading}>
      <LoadingIconFigure className="loading-icon">
        <LoadingIcon />
      </LoadingIconFigure>
    </LoadingIconContainer>
  );
}
