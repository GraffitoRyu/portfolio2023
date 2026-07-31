"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";
import { useSetAtom } from "jotai";

// components
import DetailHeaderTitle from "./Title";
import DetailLinkContainer from "../common/linkMenu/LinkContainer";
import CloseButton from "@/components/buttons/Close";

// style components
import { StyledHeaderWrap } from "@/styles/styled/components/PageHeader";

// hooks
import useCheckView from "@/hooks/layout/useCheckView";
import useResizeObserver from "@/hooks/layout/useResizeObserver";

// state
import { viewportState } from "@/jotai/viewport.state";
import { pageDetailLoadState } from "@/jotai/load.state";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function DetailHeaderWrap() {
  const router = useRouter();

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
      router.replace("/projects", { scroll: false });
    }, transTime.detail.sheetSlide);
  }, [router, setDetailLoad]);

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
