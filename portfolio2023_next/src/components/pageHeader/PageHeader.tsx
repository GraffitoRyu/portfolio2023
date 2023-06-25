"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// components
import Gnb from "./Gnb";
import TimeDisplay from "./TimeDisplay";

// style components
import {
  HeaderContainer,
  StyledHeaderWrap,
} from "@/styles/styled/components/PageHeader";

// state
import { pageState } from "@/states/page";
import { scrollRefState } from "@/states/scroll";
import { screenSizeState } from "@/states/screen";

// types
import {
  ScreenSizeTypes,
  ScrollRefStateTypes,
  pageStateTypes,
} from "@/types/state";

export default function PageHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const setScreenSize = useSetRecoilState<ScreenSizeTypes>(screenSizeState);
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);
  const [hide, setHide] = useState<string>("init-hide hide");
  const { init, initComplete } = useRecoilValue<pageStateTypes>(pageState);

  const updateSize = useCallback(() => {
    const header = headerRef?.current;
    if (!header) return;

    setScreenSize(prev => ({
      ...prev,
      headerHeight: header.clientHeight,
    }));
  }, [setScreenSize]);

  const updateRef = useCallback(
    (node: HTMLElement | null) => {
      headerRef.current = node;
      setScrollRef(prev => ({ ...prev, header: node }));
    },
    [setScrollRef]
  );

  // 헤더 높이 상태 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;
    updateSize();

    window.addEventListener("resize", updateSize, false);
    return () => window.removeEventListener("resize", updateSize, false);
  }, [updateSize]);

  // 최초 로딩 시 등장
  useEffect(() => {
    if (init) setHide("init-hide");
  }, [init]);

  // 로딩 완료 후, transition css 제거
  useEffect(() => {
    if (initComplete) setHide("");
  }, [initComplete]);

  return (
    <HeaderContainer className={`${hide}`} ref={updateRef}>
      <StyledHeaderWrap>
        <TimeDisplay />
        <Gnb />
      </StyledHeaderWrap>
    </HeaderContainer>
  );
}
