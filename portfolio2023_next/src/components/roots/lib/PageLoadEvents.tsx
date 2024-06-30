"use client";

import { usePathname, useParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { useAtom, useSetAtom } from "jotai";

// state
import { pageDetailLoadState, pageLoadState } from "@/jotai/pages/load";
import { detailData, detailLayoutState } from "@/states/detail";

// data
import sitemap from "@/data/sitemap";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function PageLoadEvents() {
  const pathname = usePathname(); // 현재 루트 수신
  const { category } = useParams();
  const [savedPathName, setPathname] = useState<string>("/"); // 현재 루트 저장
  const [{ init, initComplete, currentPage }, setPage] =
    useAtom<PageLoadStateTypes>(pageLoadState);

  const routeData = sitemap.portfolio.filter(route => !route.isExternal);

  // 프로젝트 상세에 대한 열림/닫힘 상태 업데이트
  const setDetailState = useSetAtom(pageDetailLoadState);
  const savedData = useRecoilValue<DetailTypes>(detailData);

  // 루트 업데이트
  useLayoutEffect(() => {
    // 동적 경로 제외한 실 페이지 경로
    const newPathName: string = pathname;
    // 현재 페이지의 코드(페이지 이름) 값
    const newPageName: string = getCurPageName(newPathName, routeData);

    if (savedPathName !== newPathName) {
      // 페이지 상태 업데이트
      setPage(prev => ({
        ...prev,
        loaded: true,
        cur: newPageName !== currentPage ? newPageName : currentPage,
      }));
      setPathname(newPathName);
    }
  }, [currentPage, pathname, routeData, savedPathName, setPage]);

  // 페이지 새로고침 또는 첫 진입 체크
  useLayoutEffect(() => {
    if (!init) {
      // console.log(`[PageLoadEvent : 페이지 최초 로드 완료] `, savedPathName);
      setTimeout(() => {
        setPage(prev => ({ ...prev, init: true, loaded: true }));
      }, transTime.common.initComplete);
    }
  }, [init, savedPathName, setPage]);

  // 프로젝트 상세 카테고리 업데이트
  useLayoutEffect(() => {
    if (initComplete) {
      setDetailState(prev => ({
        ...prev,
        category: typeof category === "string" ? category : "",
      }));
      if (typeof category === "string" && savedData?.[category]) {
        setDetailState(prev => ({ ...prev, open: true }));
      } else {
        setDetailState(prev => ({ ...prev, open: false }));
      }
    }
  }, [category, initComplete, savedData, setDetailState]);

  return null;
}

// 경로에서 페이지 이름 찾기
export function getCurPageName(
  curPath: string,
  data: SitemapDataType[],
): string {
  return data.filter(d => d.path === curPath)[0]?.code;
}
