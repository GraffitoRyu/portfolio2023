"use client";

import { useCallback, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type SimpleBarCore from "simplebar-core";
import type { SimpleBarOptions } from "simplebar-core";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

// state
import {
  scrollDetailSectionRefState,
  scrollPageSectionRefState,
} from "@/jotai/interaction/scroll.state";

// hooks
import useResizeObserver from "@/hooks/layout/useResizeObserver";
import { pageLoadState } from "@/jotai/load.state";

export default function SimpleScrollContainer({
  standard = "page",
  simplebarOptions,
  children,
}: {
  standard?: "page" | "detail";
  simplebarOptions?: SimpleBarOptions;
  children: React.ReactNode;
}) {
  const { loadComplete } = useAtomValue(pageLoadState);
  // 페이지 스크롤 인털랙션 참조 요소 업데이트
  const setPageScrollContainerRef = useSetAtom(
    scrollPageSectionRefState("container"),
  );

  // 프로젝트 스크롤 인터렉션 참조 요소 업데이트
  const setDetailScrollRef = useSetAtom(
    scrollDetailSectionRefState("container"),
  );

  const contentRef = useRef<HTMLElement | null>(null);

  // SimpleBar 마크업에서 스크롤 위치 모니터링을 위한 element ref
  const updateRef = useCallback(
    (simplebar: SimpleBarCore | null) => {
      if (!simplebar) return;

      const wrapperEl = simplebar.contentWrapperEl;

      if (standard === "page") setPageScrollContainerRef(wrapperEl);
      else if (standard === "detail") setDetailScrollRef(wrapperEl);

      contentRef.current = simplebar.contentEl;
    },
    [setDetailScrollRef, setPageScrollContainerRef, standard],
  );

  let timer: NodeJS.Timeout | null = null;
  useResizeObserver({
    element: contentRef.current,
    delay: 300,
    callback: () => {
      if (timer !== null) clearTimeout(timer);

      if (!loadComplete) return;

      timer = setTimeout(() => {
        // console.log("재계산");
        ScrollTrigger.refresh();
      }, 1000);
    },
  });

  return (
    <SimpleBar
      className="simplebar-container"
      {...simplebarOptions}
      ref={updateRef}
    >
      {children}
    </SimpleBar>
  );
}
