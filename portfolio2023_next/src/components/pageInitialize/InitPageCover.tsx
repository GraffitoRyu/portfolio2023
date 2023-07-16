"use client";

import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

// components
import LoadingIconComponent from "../loading/LoadingIcon";
import InitTitle from "./InitCoverTitle";

// style components
import {
  InitCoverBox,
  InitCoverContainer,
} from "@/styles/styled/components/InitPageCover";

// types
import { ScreenSizeTypes, pageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";
import { screenSizeState } from "@/states/screen";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function InitPageCover() {
  const [initializing, setInit] = useState<string>("");
  const [show, setShow] = useState<string>("show");
  const [{ init, loaded }, setPage] = useRecoilState<pageStateTypes>(pageState);
  const { windowHeight } = useRecoilValue<ScreenSizeTypes>(screenSizeState);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setInit("initializing");
  }, []);

  useEffect(() => {
    if (init && loaded) {
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
    }
  }, [init, loaded, setPage]);

  return (
    <InitCoverContainer className={`${initializing} ${show}`}>
      <InitCoverBox $wh={windowHeight}>
        <InitTitle />
        <LoadingIconComponent />
      </InitCoverBox>
    </InitCoverContainer>
  );
}
