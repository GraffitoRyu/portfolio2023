"use client";

import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  InitIconContainer,
  InitIconFigure,
} from "@/styles/styled/components/InitPageCover";

// svg components
import InitLoadingIcon from "@/svg/common/InitLoadingIcon";
import InitCompleteIcon from "@/svg/common/InitCompleteIcon";

// types
import { pageState } from "@/states/page";

// state
import { pageStateTypes } from "@/types/state";

export default function InitIcon() {
  const page = useRecoilValue<pageStateTypes>(pageState);
  const [loading, setLoading] = useState<string>("loading");
  const completeRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (page.init) setLoading("");
  }, [page.init]);

  return (
    <InitIconContainer className={`${loading}`}>
      <InitIconFigure className="loading-icon">
        <InitLoadingIcon />
      </InitIconFigure>
      <InitIconFigure className="complete-icon">
        <InitCompleteIcon ref={completeRef} />
      </InitIconFigure>
    </InitIconContainer>
  );
}
