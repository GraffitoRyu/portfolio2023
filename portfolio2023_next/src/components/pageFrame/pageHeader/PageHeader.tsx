"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";

// components
import Gnb from "./Gnb";
import TimeDisplay from "./TimeDisplay";

// style components
import {
  StyledHeaderContainer,
  StyledHeaderWrap,
} from "@/styles/styled/components/PageHeader";

// state
import { viewportState } from "@/jotai/viewport.state";
import { pageLoadState } from "@/jotai/load.state";
import { scrollPageSectionRefState } from "@/jotai/interaction/scroll.state";

// hook
import useResizeObserver from "@/hooks/layout/useResizeObserver";

export default function PageHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const setScreenSize = useSetAtom(viewportState);
  const setScrollRef = useSetAtom(scrollPageSectionRefState("header"));
  const [hide, setHide] = useState<string>("init-hide hide");
  const { init, initComplete } = useAtomValue(pageLoadState);

  const updateScrollRef = useCallback(
    (node: HTMLElement | null) => {
      headerRef.current = node;
      setScrollRef(node);
    },
    [setScrollRef],
  );

  // 최초 로딩 시 등장
  useEffect(() => {
    if (init) setHide("init-hide");
  }, [init]);

  // 로딩 완료 후, transition css 제거
  useEffect(() => {
    if (initComplete) setHide("");
  }, [initComplete]);

  // 헤더 높이 상태 업데이트
  useResizeObserver({
    ref: headerRef,
    delay: 500,
    callback: ({ height }) => {
      document.documentElement.style.setProperty(
        `--header-height`,
        `${height}px`,
      );

      setScreenSize(prev => ({
        ...prev,
        headerHeight: height,
      }));
    },
  });

  return (
    <StyledHeaderContainer className={hide} ref={updateScrollRef}>
      <StyledHeaderWrap>
        <TimeDisplay />
        <Gnb />
      </StyledHeaderWrap>
    </StyledHeaderContainer>
  );
}
