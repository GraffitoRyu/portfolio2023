"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

// components
import DetailHeaderTitleContainer from "./DetailHeaderTitleContainer";
import DetailLinkContainer from "../common/linkMenu/DetailLinkContainer";
import CloseButton from "@/components/buttons/Close";

// style components
import { StyledHeaderWrap } from "@/styles/styled/components/PageHeader";

// types
import { DetailLayoutStateTypes, ScreenSizeTypes } from "@/types/state";

// state
import { screenSizeState } from "@/states/screen";
import { detailLayoutState } from "@/states/detail";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// util
import debounce from "@/util/debounceEvent";

export default function DetailHeaderWrap() {
  const [{ windowWidth }, setScreenSize] =
    useRecoilState<ScreenSizeTypes>(screenSizeState);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const setDetailLayout =
    useSetRecoilState<DetailLayoutStateTypes>(detailLayoutState);

  const closeDetail = () => {
    setDetailLayout(prev => ({
      ...prev,
      open: false,
      openComplete: false,
    }));
    // bottom sheet가 모두 들어 간 뒤 경로 이동
    setTimeout(() => {
      router.back();
    }, transTime.detail.sheetSlide);
  };

  const updateHeaderHeight = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    if (typeof wrap.offsetHeight === "number")
      setScreenSize(prev => ({
        ...prev,
        detailHeaderHeight: wrap.offsetHeight,
      }));
  }, [setScreenSize]);

  const updateDebounce = debounce(() => {
    updateHeaderHeight();
  }, 500);

  // 프로젝트 상세 헤더 높이 최초 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;
    updateHeaderHeight();
  }, [updateHeaderHeight]);

  // 프로젝트 상세 헤더 높이 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", updateDebounce, false);
    return () => window.removeEventListener("resize", updateDebounce, false);
  }, [updateDebounce]);

  return (
    <StyledHeaderWrap ref={wrapRef}>
      <DetailHeaderTitleContainer />
      {windowWidth < 1024 ? null : <DetailLinkContainer />}
      <CloseButton clickEvent={closeDetail} />
    </StyledHeaderWrap>
  );
}
