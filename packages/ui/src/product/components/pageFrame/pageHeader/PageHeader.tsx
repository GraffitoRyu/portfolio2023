"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { Header } from "@graffitoryu/ui";

// components
import Gnb from "./Gnb";
import TimeDisplay from "./TimeDisplay";

// style components
import {
  StyledHeaderContainer,
  StyledHeaderWrap,
} from "@graffitoryu/ui/product/styles/styled/components/PageHeader";

// state
import { pageLoadState } from "@graffitoryu/ui/product/jotai/load.state";
import { viewportState } from "@graffitoryu/ui/product/jotai/viewport.state";
import { scrollPageSectionRefState } from "@graffitoryu/ui/product/jotai/interaction/scroll.state";

// hook
import useResizeObserver from "@graffitoryu/ui/product/hooks/layout/useResizeObserver";

export default function PageHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const setViewportState = useSetAtom(viewportState);
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
    delay: 200,
    callback: ({ height }) => {
      setViewportState(prev => ({ ...prev, headerHeight: height }));
      document.documentElement.style.setProperty(
        `--header-height`,
        `${height}px`,
      );
    },
  });

  return (
    <StyledHeaderContainer as={Header} className={hide} ref={updateScrollRef}>
      <StyledHeaderWrap>
        <TimeDisplay />
        <Gnb />
      </StyledHeaderWrap>
    </StyledHeaderContainer>
  );
}
