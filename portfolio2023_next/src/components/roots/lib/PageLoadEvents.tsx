"use client";

import { usePathname, useParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

// state
import { pageDetailLoadState, pageLoadState } from "@/jotai/load.state";
import { projectDetailDataState } from "@/jotai/pages/project.detail.state";

// data
import sitemap from "@/data/sitemap";

// style
import { transTime } from "@/styles/styled/preset/transTime";

/**
 * Root/Library; 페이지 변경 이벤트 감지를 위한 컴포넌트
 * @component
 * @see https://nextjs.org/docs/app/api-reference/functions/use-router#router-events
 * @desc
 * - 페이지 변경 시, 변경 이벤트 감지에 따라 필요한 처리를 적용하기 위한 컴포넌트
 * - middleware.ts로 구성을 뺄 수 있는 부분은 리팩토링할 예정
 */
export default function PageLoadEvents() {
  const pathname = usePathname(); // 현재 루트 수신
  const { category } = useParams();
  const [savedPathName, setPathname] = useState<string>("/"); // 현재 루트 저장
  const [{ init, initComplete, currentPage }, setPage] =
    useAtom<PageLoadStateTypes>(pageLoadState);

  const routeData = sitemap.portfolio.filter(route => !route.isExternal);

  // 프로젝트 상세에 대한 열림/닫힘 상태 업데이트
  const setDetailState = useSetAtom(pageDetailLoadState);
  const existDetailData = useAtomValue<DetailDataCollectionTypes>(
    projectDetailDataState,
  );

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
      if (typeof category === "string" && existDetailData?.[category]) {
        setDetailState(prev => ({ ...prev, open: true }));
      } else {
        setDetailState(prev => ({ ...prev, open: false }));
      }
    }
  }, [category, initComplete, existDetailData, setDetailState]);

  return null;
}

/**
 * 경로에서 페이지 이름 찾기
 * @param {string} curPath 현재 페이지 경로
 * @param {SitemapDataType[]} data 라우트 데이터
 * @return {string} 페이지 라우트 코드
 */
export function getCurPageName(
  curPath: string,
  data: SitemapDataType[],
): string {
  return data.filter(d => d.path === curPath)[0]?.code;
}
