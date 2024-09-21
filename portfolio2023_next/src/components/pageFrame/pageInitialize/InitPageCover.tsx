"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";

// components
import LoadingIconComponent from "../../loading/LoadingIcon";
import InitTitle from "./InitCoverTitle";

// style components
import {
  StyledInitCoverBox,
  StyledInitCoverContainer,
} from "@/styles/styled/components/InitPageCover";

// state
import { pageLoadState } from "@/jotai/load.state";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function InitPageCover() {
  const [initializing, setInit] = useState<string>("initializing");
  const [show, setShow] = useState<string>("show");
  const [{ init, loaded }, setPage] = useAtom(pageLoadState);

  useEffect(() => {
    if (!init || !loaded) return;

    // 페이지 로드가 완료되면, 완료 애니메이션 후 커버를 비활성화한다.
    setTimeout(() => {
      setShow("");
      // 커버 비활성화 후, loadComplete 처리한다.
      setTimeout(() => {
        setInit("");
        setPage(prev => ({
          ...prev,
          loadComplete: true,
          initComplete: true,
        }));
      }, transTime.common.loadComplete);
    }, transTime.common.initComplete);
  }, [init, loaded, setPage]);

  return (
    <StyledInitCoverContainer className={`${initializing} ${show}`}>
      <StyledInitCoverBox>
        <InitTitle />
        <LoadingIconComponent />
      </StyledInitCoverBox>
    </StyledInitCoverContainer>
  );
}
