"use client";

import { useCallback, useRef } from "react";
import { useSetAtom } from "jotai";

// components
import DetailHeaderTitle from "./Title";
import DetailLinkContainer from "../common/linkMenu/LinkContainer";
import CloseButton from "@graffitoryu/ui/product/components/buttons/Close";

// style components
import { StyledHeaderWrap } from "@graffitoryu/ui/product/styles/styled/components/PageHeader";

// hooks
import useCheckView from "@graffitoryu/ui/product/hooks/layout/useCheckView";
import useResizeObserver from "@graffitoryu/ui/product/hooks/layout/useResizeObserver";

// state
import { viewportState } from "@graffitoryu/ui/product/jotai/viewport.state";
import { pageDetailLoadState } from "@graffitoryu/ui/product/jotai/load.state";

// style
import { transTime } from "@graffitoryu/ui/product/styles/styled/preset/transTime";
import { useProductRuntime } from "@graffitoryu/ui/product/runtime/ProductRuntime";

export default function DetailHeaderWrap() {
  const { replace } = useProductRuntime();

  const wrapRef = useRef<HTMLDivElement | null>(null);

  const setScreenSize = useSetAtom(viewportState);
  const setDetailLoad = useSetAtom(pageDetailLoadState);

  const { isCustomView } = useCheckView(1024);

  const closeDetail = useCallback(() => {
    setDetailLoad(prev => ({
      ...prev,
      open: false,
      openComplete: false,
    }));
    // bottom sheet가 모두 들어 간 뒤 경로 이동
    setTimeout(() => {
      replace("/projects");
    }, transTime.detail.sheetSlide);
  }, [replace, setDetailLoad]);

  useResizeObserver({
    ref: wrapRef,
    delay: 500,
    callback({ height }) {
      setScreenSize(prev => ({
        ...prev,
        detailHeaderHeight: height,
      }));
    },
  });

  return (
    <StyledHeaderWrap ref={wrapRef}>
      <DetailHeaderTitle />
      {isCustomView ? null : <DetailLinkContainer />}
      <CloseButton
        clickEvent={closeDetail}
        ariaLabel="프로젝트 상세 페이지 닫기"
      />
    </StyledHeaderWrap>
  );
}
