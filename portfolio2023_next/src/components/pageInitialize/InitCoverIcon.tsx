"use client";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  InitIconContainer,
  InitIconFigure,
} from "@/styles/styled/components/InitPageCover";

// svg components
import InitLoadingIcon from "@/svg/common/InitLoadingIcon";

// types
import { pageState } from "@/states/page";

// state
import { pageStateTypes } from "@/types/state";

export default function InitIcon() {
  const page = useRecoilValue<pageStateTypes>(pageState);
  const [loading, setLoading] = useState<string>("loading");

  useEffect(() => {
    if (page.init) setLoading("");
  }, [page.init]);

  return (
    <InitIconContainer className={`${loading}`}>
      <InitIconFigure className="loading-icon">
        <InitLoadingIcon />
      </InitIconFigure>
    </InitIconContainer>
  );
}
