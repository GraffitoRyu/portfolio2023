"use client";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// types
import { pageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";

// style components
import {
  InitCoverBox,
  InitCoverContainer,
  InitCoverTItle,
} from "@/styles/styled/components/InitPageCover";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function InitPageCover() {
  const [initiating, setInit] = useState<string>("initiating");
  const page = useRecoilValue<pageStateTypes>(pageState);

  useEffect(() => {
    if (page.init)
      setTimeout(() => {
        setInit("");
      }, transTime.common.initCover);
  }, [page.init]);

  return (
    <InitCoverContainer className={`${initiating}`}>
      <InitCoverBox>
        <InitCoverTItle>LOADING</InitCoverTItle>
      </InitCoverBox>
    </InitCoverContainer>
  );
}
