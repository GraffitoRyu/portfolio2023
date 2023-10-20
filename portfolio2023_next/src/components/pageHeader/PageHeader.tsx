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

// util
import debounce from "@/util/debounceEvent";

export default function PageHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const setScreenSize = useSetRecoilState<ScreenSizeTypes>(screenSizeState);
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);
  const [hide, setHide] = useState<string>("init-hide hide");
  const { init, initComplete } = useRecoilValue<pageStateTypes>(pageState);

  const updateHeaderHeight = useCallback(() => {
    const header = headerRef?.current;
    if (!header) return;

    document.documentElement.style.setProperty(
      `--header-height`,
      `${header.clientHeight}px`,
    );

    setScreenSize(prev => ({
      ...prev,
      headerHeight: header.clientHeight,
    }));
  }, [setScreenSize]);

  const updateDebounce = debounce(() => {
    updateHeaderHeight();
  }, 500);

  const updateScrollRef = useCallback(
    (node: HTMLElement | null) => {
      headerRef.current = node;
      setScrollRef(prev => ({ ...prev, header: node }));
    },
    [setScrollRef],
  );

  // 헤더 높이 최초 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;
    updateHeaderHeight();
  }, [updateHeaderHeight]);

  // 헤더 높이 상태 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", updateDebounce, false);
    return () => window.removeEventListener("resize", updateDebounce, false);
  }, [updateDebounce]);

  // 최초 로딩 시 등장
  useEffect(() => {
    if (init) setHide("init-hide");
  }, [init]);

  // 로딩 완료 후, transition css 제거
  useEffect(() => {
    if (initComplete) setHide("");
  }, [initComplete]);

  return (
    <HeaderContainer className={`${hide}`} ref={updateScrollRef}>
      <StyledHeaderWrap>
        <TimeDisplay />
        <Gnb />
      </StyledHeaderWrap>
    </HeaderContainer>
  );
}
